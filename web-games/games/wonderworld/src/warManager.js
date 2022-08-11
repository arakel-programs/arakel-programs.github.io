import EventManager from "./eventManager";

class WarManager {
    initialization(gameManager) {
        this.gameManager = gameManager;
    }

    attackEvent(event) {
        $("#audio-attack")[0].play();
        if (+this.gameManager.pageManager.totalPowerSpan.text() === 0) {
            this.gameManager.eventManager.showMsgToUser(`Lack of attack power, find more warriors.`, this.gameManager.eventManager.warningStatus);
        } else {
            this.gameManager.pageManager.attackDiv.hide("slow");

            let targetButton = event.target;
            targetButton.remove();

            this.attackPhase(targetButton.textContent);
        }
    }

    attackPhase(who) {
        switch (who.split(" ")[0]) {
            case "Amazon":
            case "Ufo":
            case "Human":
                this.noBattle(who);
                break;
            default:
                this.battle(who);
                break;
        }

    }

    noBattle(who) {
        $("#attack-section2").show("slow");
        $("#attack-i2").text(who);

        let i = 0;
        let width = 0;
        $("#no-battle-progress-bar").css("width", width + "%").attr("aria-valuenow", width);
        let intervalId = setInterval(()=> {
            width += 1.5125;
            $("#no-battle-progress-bar").css("width", width + "%").attr("aria-valuenow", width);

            i++;
            if (i === 64) {
                clearInterval(intervalId);
                setTimeout(() => {
                    $("#attack-section2").hide("slow");
                    this.gameManager.pageManager.attackDiv.show("slow");
                }, 300);

                this.gameManager.eventManager.noBattleResultEvent(who);
            }
        }, 125);
    }

    battle(who) {
        this.gameManager.pageManager.attackProgressBarSection.show("slow");
        this.gameManager.pageManager.attackI.text(who);

        let yourPower = +this.gameManager.pageManager.totalPowerSpan.text();
        let yourInitialPower = yourPower;
        let enemyPower = this.getEnemyPower(who);
        yourPower = yourPower === enemyPower ? yourPower + 1 : yourPower;

        $("#enemy-power-i").text(enemyPower.toFixed());
        this.showWarProgressBar(yourPower, enemyPower);

        let yourLostPerStep = enemyPower * enemyPower / yourPower * 0.25;
        let enemyLostPerStep = enemyPower * 0.25;
        if (yourPower < enemyPower) {
            yourLostPerStep = yourPower * 0.25;
            enemyLostPerStep = yourPower * yourPower / enemyPower * 0.25;
        }

        let i = 0;
        let j = 0;
        let intervalId = setInterval(() => {
            yourPower -= yourLostPerStep;
            enemyPower -= enemyLostPerStep;
            for (; j < Math.floor(yourInitialPower - yourPower); j++) {
                this.gameManager.citizenManager.killWarrior();
            }

            $("#enemy-power-i").text(enemyPower.toFixed());
            this.showWarProgressBar(yourPower, enemyPower);

            i++;
            if (i === 4) {
                clearInterval(intervalId);
                this.finishTheLeftAlive(yourPower, enemyPower);
                setTimeout(() => {
                    this.gameManager.pageManager.attackProgressBarSection.hide("slow");
                    this.gameManager.pageManager.attackDiv.show("slow");
                }, 300);

                this.gameManager.eventManager.battleResultEvent(who, yourPower > enemyPower);
            }
        }, 1000);
    }

    getEnemyPower(who) {
        let result = EventManager.getRandomInt(40) + 10;

        if (who.includes("city")) {
            // 200 - 1k
            result = EventManager.getRandomInt(800) + 200;
        } else if (who.includes("palace")) {
            // 3k - 10k
            result = EventManager.getRandomInt(7000) + 3000;
        }

        result = who.includes("Sparta") ? result * 5 : result;

        return result;
    }

    showWarProgressBar(yourPower, enemyPower) {
        let onePercent = 100 / (yourPower + enemyPower);
        let yourPowerOnProgressBar = Math.round(onePercent * yourPower);
        let enemyPowerOnProgressBar = Math.round(onePercent * enemyPower);

        this.gameManager.pageManager.yourPowerProgressBar.css("width", yourPowerOnProgressBar + "%").attr("aria-valuenow", yourPowerOnProgressBar);
        this.gameManager.pageManager.enemyPowerProgressBar.css("width", enemyPowerOnProgressBar + "%").attr("aria-valuenow", enemyPowerOnProgressBar);
    }

    finishTheLeftAlive(yourPower, enemyPower) {
        if (yourPower > enemyPower) {
            $("#enemy-power-i").text(0);

            this.gameManager.pageManager.yourPowerProgressBar.css("width", "100%").attr("aria-valuenow", 100);
            this.gameManager.pageManager.enemyPowerProgressBar.css("width", "0%").attr("aria-valuenow", 0);
        } else {
            this.gameManager.pageManager.yourPowerProgressBar.css("width", "0%").attr("aria-valuenow", 0);
            this.gameManager.pageManager.enemyPowerProgressBar.css("width", "100%").attr("aria-valuenow", 100);
        }
    }
}

export default WarManager;