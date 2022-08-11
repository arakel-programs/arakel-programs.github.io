// TODO refactoring this class
class EventManager {
    constructor() {
        // Msg's
        // this.okMsg = "Everything is ok. Let s relax. ☕";
        this.lackLazyboneMsg = "&#9888; Find more lazybones. 👷‍♂";
        this.starvationMsg = "🍽️ HELP!!! We don't have enough food. :(";
        this.moreResourceMsg = "&#9888; Collect more resources.";
        this.moreKnowledgeMsg = "&#9888; Collect more knowledge.";
        this.moreScienceBuildingMsg = "&#9888; Build more science buildings.";
        this.moreLibraryBuildingMsg = "&#9888; Build more library buildings.";
        this.moreMusicClubsMsg = "&#9888; Build more entertainment buildings.";
        this.moreYogaClubsMsg = "&#9888; Build more health buildings.";
        this.moreArmoryMsg = "&#9888; Build more armory buildings.";
        this.moreBarrackMsg = "&#9888; Build more barracks.";
        this.moreWeaponMsg = "&#9888; Produce more weapon.";
        this.funeralProccessMoreWorkersMsg = "👥👥 One funeral requires 2 workers.";
        // this.elvesCantCutTreeMsgPart1 = "🧝🧝 Elves can't cut trees, so sometimes they take it from the others. They said - THANK YOU. And took: ";
        // this.elvesCantCutTreePart2 = " of your wood.";
        // this.elvesAreDisappointed = "🧝🧝 You don t have wood. Elves are disappointed of us.. :((";
        // this.elvesLike = "🧝🧝 Main Elf said - we like you.";
        // this.nightmareMsg = "👩‍🌾👩‍🌾  Your farmers said that they saw strange nightmares. 👾👾";
        // this.strangeInTheSkiesMsg = "👩‍🌾👩‍🌾 Your farmers said that they saw something strange in the skies. You said - ha, rich imagination";
        // this.ufoKilledMsgPart1 = "🛸 Ufo Aliens tried to improve your human beings, but it wasn't successful. Unfortunately they killed: ";
        // this.ufoKilledMsgPart2 = " of your farmers. Maybe in the next time.";
        // this.ufoArtifactMsgPart1 = "🛸 Ufo gave to you a mighty artifact, but your people don't know how to apply this and they just exchanged it with more advanced civilization for: ";
        // this.ufoArtifactMsgPart2 = " stones.";
        // this.overturnedCorpsesMsg = "🧑🧑 Your people said that corpses overturned during the last full moon night. You said - ha, rich imagination";
        // this.foolMoonMsg = "Your people like fool moon this night 🌘";
        // this.deathBecauseOfZombie = "🌘🧛 You people died because of too many zombies.";
        // this.newAchievement = "🙊🙈🙉 Get a new achievement.";

        // Statuses
        this.successStatus = "success";
        this.primaryStatus = "primary";
        this.warningStatus = "dark";
        this.dangerStatus = "danger";
    }

    initialization(gameManager) {
        this.gameManager = gameManager;

        this.pageManager = this.gameManager.pageManager;
        this.configManager = this.gameManager.configManager;
        this.citizenManager = this.gameManager.citizenManager;

        this.eventMap = new Map([
            [1, () => this.nothingHappenEvent()],
            [2, () => this.ufoEvent()],
            [3, () => this.farmerEvent()],
            [4, () => this.weatherEvent()],
            [5, () => this.wildAmazonEvent()],
            [6, () => this.elfEvent()],
            [7, () => this.bloodMoonEvent()],
            [8, () => this.birthDeathCycleEvent()],
            [9, () => this.petsEvent()]

            // // Drought (-foodProduction)
            // // Animals (-citizen quantity)
            // // Pets (+food consuming)
            // // Im/Emigration (+current population, - knowledge)
            // // Laziness/Motivation (-/+productivity)
        ]);

        this.achievementImgMap = new Map([
            ["UFO Alien", this.pageManager.ufoAchievement],
            ["Palace", this.pageManager.palaceAchievement],
            ["First Research", this.pageManager.firstResearchAchievement],
            ["Starvation", this.pageManager.hungerAchievement],
            ["Productivity", this.pageManager.productivityAchievement],
            ["More Food", this.pageManager.moreFoodAchievement]
        ]);

        this.hiddenButtons = [this.pageManager.startAgainButton, this.pageManager.loadButton, this.pageManager.saveButton, this.pageManager.pauseButton];
        this.hiddenLands = [this.pageManager.elfRadioButton, this.pageManager.dwarfRadioButton, this.pageManager.ufoRadioButton, this.pageManager.dragonRadioButton,
            this.pageManager.humanRadioButton, this.pageManager.amazonRadioButton, this.pageManager.spartaRadioButton, this.pageManager.orcRadioButton];
    }

    showEventMsgToUser(what, changes) {
        $("#audio-no")[0].play();
        // TODO think about this map...
        let msgMap = new Map([
            // ["ok", [this.okMsg, this.successStatus]],
            ["starvation", [this.starvationMsg, this.dangerStatus]],
            // lack of resource
            ["not enough food", ["&#9888; You need more food.", this.warningStatus]],
            ["not enough houses", ["&#9888; You need more houses.", this.warningStatus]],
            ["more resources", [this.moreResourceMsg, this.warningStatus]],
            ["more knowledge", [this.moreKnowledgeMsg, this.warningStatus]],
            // lack of building
            ["more campfires", [this.moreScienceBuildingMsg, this.warningStatus]],
            ["more libraries", [this.moreLibraryBuildingMsg, this.warningStatus]],
            ["more music clubs", [this.moreMusicClubsMsg, this.warningStatus]],
            ["more yoga clubs", [this.moreYogaClubsMsg, this.warningStatus]],
            ["more armory", [this.moreArmoryMsg, this.warningStatus]],
            ["more barrack", [this.moreBarrackMsg, this.warningStatus]],
            ["weapon lack", [this.moreWeaponMsg, this.warningStatus]],
            // lack of free workers
            ["lack of lazybones", [this.lackLazyboneMsg, this.warningStatus]],
            ["1 funeral process needs 2 workers", [this.funeralProccessMoreWorkersMsg, this.warningStatus]],
            // event
            // ufo
            // ["ufo gave an useful artifact", [`🛸 Ufo gives a mighty artifact and your people made a new button from it.&#128526&#128526`, this.successStatus]],
            // ["ufo gave an artifact", [`${this.ufoArtifactMsgPart1} ${changes} ${this.ufoArtifactMsgPart2}`, this.successStatus]],
            // ["strange in the skies", [this.strangeInTheSkiesMsg, this.primaryStatus]],
            // ["nightmare", [this.nightmareMsg, this.primaryStatus]],
            // ["ufo killed", [`${this.ufoKilledMsgPart1} ${changes} ${this.ufoKilledMsgPart2}`, this.dangerStatus]],
            // zombie
            // ["fool moon", [this.foolMoonMsg, this.primaryStatus]],
            // ["overturned corpses", [this.overturnedCorpsesMsg, this.warningStatus]],
            // ["white walkers in another village", [`🧛🧛 ${changes} corpses woke up and went to another village. Than they went back to you to sleep.`, this.warningStatus]],
            // ["white walker killed", ["🧛🧛 Some zombies woke up and killed a few of your people. Than they went back. You have more corpses.", this.dangerStatus]],
            // ["death because of zombies", [this.deathBecauseOfZombie, this.dangerStatus]],
            // farmer
            // ["potatoes", [`👩‍🌾👩‍🌾 Farmers found ${changes} potatoes.🥔🥔🥔🥔`, this.successStatus]],
            // ["kiwi", [`👩‍🌾👩‍🌾 Farmers found ${changes} kiwi fruits.🥝🥝🥝🥝`, this.successStatus]],
            // ["wild rabbits", ["🐰🐰🐰 Farmers saw the wild rabbits.", this.primaryStatus]],
            // ["rats", [`🐀🐀🐀 Rats ate ${changes} of your food.`, this.dangerStatus]],
            // ["assassin rabbits", [`🐰🐰🐰 Obviously it was bad decision to take rabbit's food. Assassin rabbits killed : ${changes} farmers.`, this.dangerStatus]],
            // weather
            // ["middle earthquake", [`🧶️ There was a middle earthquake. Some trees were down and it gave you : ${changes} woods.`, this.successStatus]],
            // ["small rain", ["🌈 There was a small rain.", this.primaryStatus]],
            // ["light earthquake", ["🧶 There was a light earthquake.", this.primaryStatus]],
            // ["storm", [`⛈️There is a storm. It spoiled some of your wood: ${changes} is lost.`, this.dangerStatus]],
            // ["big earthquake", [`🧶 ☹ There was a big earthquake. Unfortunately it killed: ${changes} of your miners.`, this.dangerStatus]],
            // amazon
            // ["amazons brought", [`👧👧👧👧 Amazons brought a few males to your people . ${changes} new free people.`, this.successStatus]],
            // ["amazons are there", ["People saw a lot of beautiful wild amazons 👧👧👧", this.primaryStatus]],
            // ["amazons speaking", ["👧👧👧 Your people communicated a bit with Amazons.", this.primaryStatus]],
            // ["amazons kidnapped", [`👧👧👧👧 Wild Amazons kidnapped some of your people. Than they brought ${changes} male corpses back, you see smiles on corpse's faces.`, this.dangerStatus]],
            // elf
            // ["elves like", [this.elvesLike, this.primaryStatus]],
            // ["elves are disappointed", [this.elvesAreDisappointed, this.primaryStatus]],
            // ["elves can't cut trees", [`${this.elvesCantCutTreeMsgPart1} ${changes} ${this.elvesCantCutTreePart2}`, this.dangerStatus]],
            // ["elves don't like", [`🧝🧝 Elves don't like when you cut trees. They killed: ${changes} of your woodcutters. They said - sorry.`, this.dangerStatus]],
            // lifecycle
            // ["new people were born", [`👪👪 ${changes} new people were born.`, this.successStatus]],
            // ["died because of age", [`👪👪 ${changes} died because of old age.`, this.dangerStatus]],
            // war tab
            // ["better knowledge land", [`Now your people know their land better. 🐾 🗺 Your people get ${changes} knowledge because of scouts.`, this.successStatus]],
            // ["new lands", [`Your scouts found a new race, now you can scout them 🐾🐾🐾 🗺 .`, this.successStatus]],
            // ["lack of attack power", [`Lack of attack power, find more warrior.`, this.warningStatus]],
            // ["lose battle", [`You lost the battle, enemy were stronger.`, this.dangerStatus]],
            // ["win the battle", [`You won the battle with the orcs and got ${changes} of wood.`, this.successStatus]],
            // ["win sparta", [`You win the battle and can be proud of yourself.`, this.successStatus]],
            // ["your army left", [`Instead of attack your army joined to the beautiful amazons.`, this.warningStatus]],
            // ["amazons join", [`Amazons like your people, ${changes} amazons joined to you.`, this.successStatus]],
            // ["attack human", [`After your attack at the other human beings, they attacked you back and killed ${changes} of your people.`, this.dangerStatus]],
            // ["win the dragon", [`You won dragons, got their gold, gems and other treasures. Summary you got ${changes} of gold.`, this.successStatus]],
            // ["attack ufo", [`After your attack at Ufo, they takes some of your knowledge.`, this.warningStatus]],
            // ["attack dwarf", [`You won the battle with the dwarves and got ${changes} of stone.`, this.warningStatus]],
            // ["attack elves", [`You won the elves, elves had a lot of different resources and artifacts, but your warriors got craziness and burnt every useful stuff.`, this.successStatus]]
        ]);
        let msgElem = msgMap.get(what);
        let msg = msgElem[0];
        let status = msgElem[1];

        if (msg) {
            let event = $(`<div class="alert alert-${status} highlight2" role="alert">${EventManager.getMsgWithTime(msg)}</div>`);
            this.pageManager.eventDiv.after(event);
            event.show("slow");

            $("#events-section").animate({scrollTop: 0}, "fast")

            $('#events-section div.highlight2').hover(
                function () {
                    $(this).removeClass('highlight2');
                }
            );
        }
    }

    showMsgToUser(msg, status) {
        let eventElement = $(`<div class="alert alert-${status}" role="alert">${EventManager.getMsgWithTime(msg)}</div>`);

        this.pageManager.eventDiv.after(eventElement);
        eventElement.show("slow");

        $("#events-section").animate({scrollTop: 0}, "fast")
    }

    showAchievementToUser(what) {
        $("#audio-build-achievement")[0].play();
        // TODO add flag
        this.pageManager.hideElement([this.pageManager.notAchievement]);

        let achievementImg = this.achievementImgMap.get(what);

        if (achievementImg) {
            this.pageManager.gotAchievementQuantitySpan.text(+this.pageManager.gotAchievementQuantitySpan.text() + 1);
            this.pageManager.achievementSection.append(achievementImg);

            // let event = $(`<div class="alert alert-${this.successStatus}" role="alert"><span>${EventManager.getMsgWithTime(this.newAchievement)}</span></div>`);
            // this.pageManager.eventDiv.after(event);
            // event.show("slow", () => achievementImg.show("slow"));
            this.showMsgToUser("🙊🙈🙉 Get a new achievement.", this.successStatus);
            achievementImg.show("slow");
            $("#events-section").animate({scrollTop: 0}, "fast")
        }
    }

    static getMsgWithTime(msg) {
        return `${new Date().toLocaleTimeString()} : ${msg}`;
    }

    eventHappen() {
        // FOR TEST
        // this.eventMap.get(9)();

        let eventDiversity = +this.configManager.currentPopulation > 20 ? this.eventMap.size : 1;
        this.eventMap.get(EventManager.getRandomInt(eventDiversity))();
    }

    nothingHappenEvent() {
        // this.showEventMsgToUser("ok");
        $("#audio-ok")[0].play();
        this.showMsgToUser("Everything is ok. Let s relax. ☕", this.successStatus);
    }

    ufoEvent() {
        $("#audio-ufo")[0].play();
        let farmerQuantity = +this.configManager.farmer;
        if (this.hiddenButtons.length) {
            this.pageManager.showElement([this.hiddenButtons.pop()]);
            // this.showEventMsgToUser("ufo gave an useful artifact");
            this.showMsgToUser("`🛸 Ufo gives a mighty artifact and your people made a new button from it.&#128526&#128526`", this.successStatus);
        } else if (farmerQuantity > 25) {
            switch (EventManager.getRandomInt(3)) {
                case 1:
                    let killedFarmerQuantity = Math.round(0.1 * farmerQuantity);
                    // this.showEventMsgToUser("ufo killed", killedFarmerQuantity);
                    this.showMsgToUser(`🛸 Ufo Aliens tried to improve your human beings, but it wasn't successful. Unfortunately they killed: ${killedFarmerQuantity} of your farmers. Maybe in the next time.`,
                        this.dangerStatus);
                    for (let i = 0; i < killedFarmerQuantity; i++) {
                        this.citizenManager.killFarmer();
                    }
                    break;
                case 2:
                    // this.showEventMsgToUser("nightmare");
                    this.showMsgToUser("👩‍🌾👩‍🌾  Your farmers said that they saw strange nightmares. 👾👾", this.primaryStatus);
                    break;
                case 3:
                    let newResources = Math.round(0.6 * +this.configManager.stone);
                    // this.showEventMsgToUser("ufo gave an artifact", newResources);
                    this.showMsgToUser(`🛸 Ufo gave to you a mighty artifact, but your people don't know how to apply this and they just exchanged it with more advanced civilization for: ${newResources} stones.`,
                        this.successStatus);
                    this.configManager.stone.changeValue(newResources);
                    break;
            }
        } else {
            // this.showEventMsgToUser("strange in the skies");
            this.showMsgToUser(`👩‍🌾👩‍🌾 Your farmers said that they saw something strange in the skies. You said - ha, rich imagination`,
                this.primaryStatus);
        }
    }

    farmerEvent() {
        $("#audio-farmer")[0].play();
        let farmerQuantity = +this.configManager.farmer;

        let foodQuantity = +this.configManager.food;
        let changes;
        switch (EventManager.getRandomInt(5)) {
            case 1:
                this.configManager.food.changeValue(Math.round(foodQuantity * 1.8));
                // this.showEventMsgToUser("potatoes", Math.round(foodQuantity * 1.8));
                this.showMsgToUser(`👩‍🌾👩‍🌾 Farmers found ${Math.round(foodQuantity * 1.8)} potatoes.🥔🥔🥔🥔`, this.successStatus);
                break;
            case 2:
                for (let i = 0, amount = Math.round(farmerQuantity * 0.15); i < amount; i++) {
                    this.citizenManager.killFarmer();
                }
                // this.showEventMsgToUser("assassin rabbits", Math.round(this.getRandomInt(farmerQuantity) * 0.15));
                this.showMsgToUser(`🐰🐰🐰 Obviously it was bad decision to take rabbit's food. Assassin rabbits killed : ${Math.round(EventManager.getRandomInt(farmerQuantity) * 0.15)} farmers.`,
                    this.dangerStatus);
                break;
            case 3:
                // this.showEventMsgToUser("wild rabbits");
                this.showMsgToUser("🐰🐰🐰 Farmers saw the wild rabbits.", this.primaryStatus);
                break;
            case 4:
                changes = Math.round(foodQuantity * 2.5);
                this.configManager.food.changeValue(changes);
                // this.showEventMsgToUser("kiwi", Math.round(foodQuantity * 2.5));
                this.showMsgToUser(`👩‍🌾👩‍🌾 Farmers found ${changes} kiwi fruits.🥝🥝🥝🥝`, this.successStatus);
                break;
            case 5:
                changes = -Math.round(foodQuantity * 0.9);
                this.configManager.food.changeValue(changes);
                // this.showEventMsgToUser("rats", Math.round(foodQuantity * 0.9));
                this.showMsgToUser(`🐀🐀🐀 Rats ate ${changes} of your food.`, this.dangerStatus);
                break;
        }
    }

    weatherEvent() {
        $("#audio-weather")[0].play();
        // TODO add illness
        let woodQuantity = +this.configManager.wood;
        switch (EventManager.getRandomInt(2)) {
            // Storm
            case 1:
                if (woodQuantity > 20) {
                    let lostWoodQuantity = Math.round(woodQuantity * 0.3);
                    this.configManager.wood.changeValue(-lostWoodQuantity);
                    // this.showEventMsgToUser("storm", lostWoodQuantity);
                    this.showMsgToUser(`⛈️There is a storm. It spoiled some of your wood: ${lostWoodQuantity} is lost.`, this.dangerStatus);
                } else {
                    // this.showEventMsgToUser("small rain");
                    this.showMsgToUser("🌈 There was a small rain.", this.primaryStatus);
                }
                break;
            // Earthquake
            case 2:
                switch (EventManager.getRandomInt(2)) {
                    case 1:
                        let minerQuantity = +this.configManager.miner;
                        if (minerQuantity > 7) {
                            let killedMinerQuantity = Math.round(0.3 * minerQuantity);
                            for (let i = 0, amount = killedMinerQuantity; i < amount; i++) {
                                this.citizenManager.killMiner();
                            }
                            // this.showEventMsgToUser("big earthquake", killedMinerQuantity);
                            this.showMsgToUser(`🧶 ☹ There was a big earthquake. Unfortunately it killed: ${killedMinerQuantity} of your miners.`, this.dangerStatus);
                        } else {
                            let newResourceQuantity = Math.round(0.33 * +this.configManager.woodStorage);
                            this.configManager.wood.changeValue(newResourceQuantity);
                            // this.showEventMsgToUser("middle earthquake", newResourceQuantity);
                            this.showMsgToUser(`🧶️ There was a middle earthquake. Some trees were down and it gave you : ${newResourceQuantity} woods.`, this.successStatus);
                        }
                        break;
                    case 2:
                        // this.showEventMsgToUser("light earthquake");
                        this.showMsgToUser("🧶 There was a light earthquake.", this.primaryStatus);
                        break;
                }
                break;
        }
    }

    wildAmazonEvent() {
        $("#audio-amazon")[0].play();
        let scientistQuantity = +this.configManager.scientist;
        if (scientistQuantity > 10) {
            switch (EventManager.getRandomInt(3)) {
                case 1:
                    // this.showEventMsgToUser("amazons speaking");
                    this.showMsgToUser("👧👧👧 Your people communicated a bit with Amazons.", this.primaryStatus);
                    break;
                case 2:
                    let killedScientistQuantity = Math.round(0.5 * scientistQuantity);
                    for (let i = 0, amount = killedScientistQuantity; i < amount; i++) {
                        this.citizenManager.killScientist();
                    }
                    this.configManager.knowledge.changeValue(-+this.configManager.knowledge * 0.5);
                    // this.showEventMsgToUser("amazons kidnapped", killedScientistQuantity);
                    this.showMsgToUser(`👧👧👧👧 Wild Amazons kidnapped some of your people. Than they brought ${killedScientistQuantity} male corpses back, you see smiles on corpse's faces.`,
                        this.dangerStatus);
                    break;
                case 3:
                    let newMaleQuantity = Math.round(0.25 * scientistQuantity);
                    this.citizenManager.addCitizen(newMaleQuantity);
                    // this.showEventMsgToUser("amazons brought", newMaleQuantity);
                    this.showMsgToUser(`👧👧👧👧 Amazons brought a few males to your people . ${newMaleQuantity} new free people.`, this.successStatus);
                    break;
            }
        } else {
            // this.showEventMsgToUser("amazons are there");
            this.showMsgToUser("People saw a lot of beautiful wild amazons 👧👧👧", this.primaryStatus);
        }
    }

    elfEvent() {
        $("#audio-elf")[0].play();
        switch (EventManager.getRandomInt(2)) {
            case 1:
                let woodQuantity = Math.floor(+this.configManager.wood);
                if (woodQuantity > 20) {
                    this.configManager.wood.changeValue(-woodQuantity);
                    // this.showEventMsgToUser("elves can't cut trees", woodQuantity);
                    this.showMsgToUser(`🧝🧝 Elves can't cut trees, so sometimes they take it from the others. They said - THANK YOU. And took: ${woodQuantity} of your wood.`,
                        this.dangerStatus);
                } else {
                    // this.showEventMsgToUser("elves are disappointed");
                    this.showMsgToUser("🧝🧝 You don t have wood. Elves are disappointed of us.. :((", this.primaryStatus);
                }
                break;
            case 2:
                if (+this.configManager.woodman > 7) {
                    let killedWoodmanQuantity = Math.floor(+this.configManager.woodman * 0.9);
                    for (let i = 0; i < killedWoodmanQuantity; i++) {
                        this.citizenManager.killWoodcutter();
                    }
                    // this.showEventMsgToUser("elves don't like", killedWoodmanQuantity);
                    this.showMsgToUser(`🧝🧝 Elves don't like when you cut trees. They killed: ${killedWoodmanQuantity} of your woodcutters. They said - sorry.`,
                        this.dangerStatus);
                } else {
                    // this.showEventMsgToUser("elves like");
                    this.showMsgToUser("🧝🧝 Main Elf said - we like you.", this.primaryStatus);
                }
                break;
        }
    }

    bloodMoonEvent() {
        $("#audio-blood-moon")[0].play();
        let corpseQuantity = +this.configManager.corpse;
        if (corpseQuantity) {
            switch (EventManager.getRandomInt(2)) {
                case 1:
                    // this.showEventMsgToUser("overturned corpses");
                    this.showMsgToUser("🧑🧑 Your people said that corpses overturned during the last full moon night. You said - ha, rich imagination",
                        this.warningStatus);
                    break;
                case 2:
                    let zombieQuantity = Math.round(EventManager.getRandomInt(corpseQuantity) / 2);
                    switch (EventManager.getRandomInt(2)) {
                        case 1:
                            if (zombieQuantity) {
                                let killedCitizenQuantity = +this.configManager.currentPopulation > zombieQuantity ? zombieQuantity : +this.configManager.currentPopulation;
                                for (let i = 0; i < killedCitizenQuantity; i++) {
                                    this.citizenManager.findPersonToKill();
                                }
                                // this.showEventMsgToUser("white walker killed");
                                this.showMsgToUser("🧛🧛 Some zombies woke up and killed a few of your people. Than they went back. You have more corpses."
                                    , this.dangerStatus);
                                if (!+this.configManager.currentPopulation) {
                                    setTimeout(() => {
                                        // this.eventManager.showEventMsgToUser("death because of zombies");
                                        this.showMsgToUser("🌘🧛 You people died because of too many zombies.", this.dangerStatus);
                                        $("#zombie-apocalypse-modal").modal();
                                        this.pageManager.startAgainButton.show("slow");
                                    }, 500);
                                }
                            }
                            break;
                        case 2:
                            // this.showEventMsgToUser("white walkers in another village", zombieQuantity);
                            this.showMsgToUser(`🧛🧛 ${zombieQuantity} corpses woke up and went to another village. Than they went back to you to sleep.`,
                                this.warningStatus);
                            break;
                    }
            }
        } else {
            // this.showEventMsgToUser("fool moon");
            this.showMsgToUser("Your people like fool moon this night 🌘", this.primaryStatus);
        }
    }

    birthDeathCycleEvent() {
        $("#audio-birth-cycle")[0].play();
        let changeQuantity = Math.floor(EventManager.getRandomInt(+this.configManager.currentPopulation) * 0.2);
        if (changeQuantity) {
            switch (EventManager.getRandomInt(2)) {
                case 1:
                    this.citizenManager.addCitizen(changeQuantity);
                    // this.showEventMsgToUser("new people were born", changeQuantity);
                    this.showMsgToUser(`👪👪 ${changeQuantity} new people were born.`, this.successStatus);
                    break;
                case 2:
                    for (let i = 0; i < changeQuantity; i++) {
                        this.citizenManager.findPersonToKill();
                    }
                    // this.showEventMsgToUser("died because of age", changeQuantity);
                    this.showMsgToUser(`👪👪 ${changeQuantity} died because of disease.`, this.dangerStatus);
                    break;
            }
        }
    }

    scoutEvent() {
        let who = $("input[name='scoutOption']:checked").val();
        switch (who) {
            case "around":
                switch (EventManager.getRandomInt(2)) {
                    case 1:
                        let changes = EventManager.getRandomInt(Math.floor(+this.configManager.knowledge/3));
                        this.configManager.knowledge.changeValue(changes);
                        // this.showEventMsgToUser("better knowledge land", changes);
                        this.showMsgToUser(`Now your people know their land better. 🐾 🗺 Your people get ${changes} knowledge because of scouts.`, this.successStatus);
                        break;
                    case 2:
                        if (this.hiddenLands.length) {
                            this.hiddenLands.pop().css("display", 'inline-flex');
                            // this.showEventMsgToUser("new lands");
                            this.showMsgToUser(`Your scouts found a new race, now you can scout them 🐾🐾🐾 🗺 .`, this.successStatus);

                            if (!this.hiddenLands.length) {
                                this.pageManager.unknownRadioButton.hide("slow");
                            }
                        } else {
                            // TODO Found nothing
                        }
                        break;
                    // TODO some of your scouts have been lost.
                }
                break;
            default:
                this.generateFoundPlace(who);
                break;
        }
    }

    petsEvent() {
        $("#audio-pet")[0].play();
        let catQuantity = +this.configManager.cat;
        if (catQuantity) {
            let changes = EventManager.getRandomInt(catQuantity) * 2;
            this.configManager.cat.changeValue(changes);
            this.configManager.foodTotalProduction.changeValue(-changes * 0.1);
            this.configManager.catTotalConsumption.changeValue(-changes * 0.1);

            this.showMsgToUser("Your cats bred a bit. You have more beautiful kittens. 🐈🐈🐈", this.warningStatus);
        } else {
            this.showMsgToUser("Your people saw beautiful cats walking around.🐈🐈", this.primaryStatus);
        }
    }

    generateFoundPlace(who) {
        let text = this.generatePlaceName(who);
        this.generateButton(text);
    }

    generatePlaceName(who) {
        let random = EventManager.getRandomInt(100);
        // 3 types
        let text = who.includes("dragon") ? "small cave" : "village";
        if (random < 6) {
            text = who.includes("dragon") ? "big cave" : "palace";
        } else if (random < 25) {
            text = who.includes("dragon") ? "middle cave" : "city";
        }
        who = who.includes("dragon") ? "" : who;

        text = `${who} ${text}`.trim();
        text = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

        return text;
    }

    generateButton(text) {
        if ($("#attack-div button").length > 3) {
            let element = $("#attack-div button").last();
            element.hide("slow", () => {
                element.remove();
            });
        }
        let newElement = `<button class="btn btn-dark" style="display: none">${text}</button>`;
        $("#attack-div br").after(newElement);
        $("#attack-div button").first().show("slow");
    }

    noBattleResultEvent(who) {
        switch (who.split(" ")[0]) {
            case "Amazon":
                switch (EventManager.getRandomInt(3)) {
                    case 1:
                        // you army joined to beautiful amazon
                        this.configManager.warrior.setValue(0);
                        // this.showEventMsgToUser("your army left");
                        this.showMsgToUser(`Instead of attack your army joined to the beautiful amazons.`, this.warningStatus);
                        break;
                    case 2:
                    case 3:
                        // N amazons join to your army.
                        // this.showEventMsgToUser("amazons join", EventManager.getRandomInt(+this.configManager.warrior * 0.65));
                        let changes = EventManager.getRandomInt(Math.floor(+this.configManager.warrior * 0.9));
                        // TODO maybe change from citizen to warriors
                        this.citizenManager.addCitizen(changes);
                        this.showMsgToUser(`Amazons like your people, ${changes} amazons joined to you.`);
                        break;
                }
                break;
            case "Human":
                // this.showEventMsgToUser("attack human", EventManager.getRandomInt(+this.configManager.currentPopulation * 0.5));
                let changes = EventManager.getRandomInt(Math.floor(+this.configManager.currentPopulation * 0.5));
                for (let i = 0; i < changes; i++) {
                    this.citizenManager.findPersonToKill();
                }
                this.showMsgToUser(`Enemy had the high walls, you couldn't get in. After your attack at the other human beings, they attacked you back and killed ${changes} of your people.`,
                    this.dangerStatus);
                break;
            case "Ufo":
                this.configManager.knowledge.setValue(0);
                // this.showEventMsgToUser("attack ufo");
                this.showMsgToUser(`You warriors feared to attack this mighty civilization. After your attack at Ufo, they takes some of your knowledge.`, this.warningStatus);
                break;
        }
    }

    // TODO finish this
    battleResultEvent(who, win) {
        if (win) {
            let changes;
            switch (who.split(" ")[0]) {
                case "Orc":
                    if (who.includes("village")) {
                        changes = EventManager.getRandomInt(150) + 10;
                    } else if (who.includes("city")) {
                        changes = EventManager.getRandomInt(1500) + 200;
                    } else {
                        //    TODO finish this section;
                    }
                    this.configManager.wood.changeValue(changes);
                    this.showMsgToUser(`You won the battle with the orcs and got ${changes} of wood.`, this.successStatus);
                    break;
                case "Sparta":
                    this.showMsgToUser(`You win the battle and can be proud of yourself.`, this.successStatus);
                    break;
                //    TODO add dragon eggs
                case "Small":
                case "Middle":
                case "Big":
                    changes = 0;
                    if (who.includes("Small")) {
                        changes = EventManager.getRandomInt(1500) + 10;
                    } else if (who.includes("Middle")) {
                        changes = EventManager.getRandomInt(15000) + 200;
                    } else {
                        //    TODO finish this section;
                    }
                    // TODO add eggs
                    let dragonEggQuantity = Math.floor(changes / 100) + 1;
                    this.configManager.dragon.changeValue(dragonEggQuantity);
                    this.configManager.foodTotalProduction.changeValue(-dragonEggQuantity * 2);
                    this.configManager.dragonTotalConsumption.changeValue(-dragonEggQuantity * 2);
                    this.showMsgToUser(`You won dragons, got their gold, gems and other treasures. Summary you got ${changes} of gold. Also you've found ${dragonEggQuantity} newborn dragons.`, this.successStatus);
                    break;
                case "Dwarf":
                    changes = 0;
                    if (who.includes("village")) {
                        changes = EventManager.getRandomInt(150) + 10;
                    } else if (who.includes("city")) {
                        changes = EventManager.getRandomInt(1500) + 200;
                    } else {
                        //    TODO finish this section;
                    }
                    this.configManager.stone.changeValue(changes);
                    this.showMsgToUser(`You won the battle with the dwarves and got ${changes} of stone.`, this.successStatus);
                    break;
                case "Elf":
                    let catQuantity = EventManager.getRandomInt(15);
                    this.configManager.cat.changeValue(catQuantity);
                    this.configManager.foodTotalProduction.changeValue(-catQuantity * 0.1);
                    this.configManager.catTotalConsumption.changeValue(-catQuantity * 0.1);
                    this.showMsgToUser(`Elves had a lot of different resources and artifacts, but your warriors got craziness and burnt every useful stuff. But you've taken ${catQuantity} kittens from them.`
                        , this.successStatus);
                    break;
            }
        } else {
            this.showMsgToUser(`You lost the battle, enemies were stronger.`, this.dangerStatus);
        }
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
}

export default EventManager;