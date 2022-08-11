/**
 * Create buildings
 */
class BuilderManager {
    initialization(gameManager) {
        this.gameManager = gameManager;
        this.configManager = this.gameManager.configManager;
        this.eventManager = this.gameManager.eventManager;
        this.pageManager = this.gameManager.pageManager;

        this.buildingMap = new Map([
            ["grave", new BuildingWithShowElement(
                new Building(10, 10, [[this.configManager.grave, this.configManager.corpseStorage], [1, 1]], this.configManager, this.eventManager),
                this.pageManager, this.configManager.buildFuneralFlag, [this.pageManager.emptyRowBeforeJobFuneral, this.pageManager.jobFuneralRow, this.pageManager.inGravesRow])],
            ["graveyard", new Building(1e3, 1e3, [[this.configManager.graveyard, this.configManager.corpseStorage], [1, 75]], this.configManager, this.eventManager)],
            ["scroll", new Building(0, 10, [[this.configManager.scroll, this.configManager.knowledgeStorage], [1, +this.configManager.knowledgeInScroll]],
                this.configManager, this.eventManager)],
            ["granary", new Building(50, 50, [[this.configManager.granary, this.configManager.foodStorage], [1, +this.configManager.resourcesInStorage]], this.configManager,
                this.eventManager)],
            ["pit", new Building(50, 50, [[this.configManager.pit, this.configManager.woodStorage, this.configManager.stoneStorage], [1, +this.configManager.resourcesInStorage,
                +this.configManager.resourcesInStorage]], this.configManager, this.eventManager)],
            ["tent", new Building(20, 0, [[this.configManager.tent, this.configManager.populationStorage], [1, this.configManager.spaceInTent]], this.configManager, this.eventManager)],
            ["hut", new Building(50, 20, [[this.configManager.hut, this.configManager.populationStorage], [1, this.configManager.spaceInHut]], this.configManager, this.eventManager)],
            ["duplex", new Building(3e2, 3e2, [[this.configManager.duplex, this.configManager.populationStorage], [1, this.configManager.spaceInDuplex]], this.configManager, this.eventManager)],
            ["campfire", new Building(30, 10, [[this.configManager.campfire, this.configManager.scientistStorage], [1, this.configManager.spaceInCamprire]],
                this.configManager, this.eventManager)],
            ["dolmen", new Building(80, 80, [[this.configManager.dolmen, this.configManager.scientistStorage], [1, this.configManager.spaceInDolmen]], this.configManager,
                this.eventManager)],
            ["parthenon", new Building(150, 3e2, [[this.configManager.parthenon, this.configManager.scientistStorage], [1, this.configManager.spaceInParthenon]], this.configManager,
                this.eventManager)],
            ["library", new BuildingWithShowElement(
                new Building(3e2, 3e2, [[this.configManager.library, this.configManager.writerStorage], [1, this.configManager.spaceInLibrary]], this.configManager,
                    this.eventManager), this.pageManager, this.configManager.writerPresentFlag, [this.pageManager.jobWriterRow]
            )],
            ["music-club", new BuildingWithShowElement(
                new Building(225, 225, [[this.configManager.musicClub, this.configManager.djStorage, this.configManager.happyPeopleStorage], [1,
                    this.configManager.spaceForWorkerInClub, this.configManager.spaceForPeopleInClub]], this.configManager, this.eventManager),
                this.pageManager, this.configManager.djPresentFlag, [this.pageManager.emptyRowBeforHappinessRowElement, this.pageManager.happinessRowElement,
                    this.pageManager.emptyRowBeforProductivityRowElement, this.pageManager.productivityRowElement, this.pageManager.emptyRowBeforeJobInClubElement, this.pageManager.jobDjRowElement])],
            ["yoga-club", new BuildingWithShowElement(
                new Building(225, 225, [[this.configManager.yogaClub, this.configManager.instructorStorage, this.configManager.healthyPeopleStorage], [1,
                    this.configManager.spaceForWorkerInClub, this.configManager.spaceForPeopleInClub]], this.configManager, this.eventManager),
                this.pageManager, this.configManager.instructorPresentFlag, [this.pageManager.emptyRowBeforHappinessRowElement, this.pageManager.healthRowElement,
                    this.pageManager.emptyRowBeforProductivityRowElement, this.pageManager.productivityRowElement, this.pageManager.emptyRowBeforeJobInClubElement, this.pageManager.jobInstructorRowElement])],
            ["palace", new BuildingWithShowElement(
                new Building(25e2, 25e2, [[this.configManager.palace, this.configManager.dolmen, this.configManager.musicClub,
                    this.configManager.yogaClub, this.configManager.scientistStorage, this.configManager.happyPeopleStorage, this.configManager.healthyPeopleStorage, this.configManager.djStorage,
                    this.configManager.instructorStorage], [1, 5, 5, 5, 5 * this.configManager.spaceInDolmen, 5 * this.configManager.spaceForPeopleInClub, 5 * this.configManager.spaceForPeopleInClub,
                    5, 5]], this.configManager, this.eventManager),
                this.pageManager, this.configManager.palacePresentFlag, [])],
            ["armory", new BuildingWithShowElement(
                new Building(3e2, 3e2, [[this.configManager.armory, this.configManager.weaponMasterStorage], [1, 1]], this.configManager, this.eventManager),
                this.pageManager, this.configManager.armoryPresentFlag, []
            )],
            ["barrack", new BuildingWithShowElement(
                new Building(5e2, 250, [[this.configManager.barrack, this.configManager.warriorStorage], [1, this.configManager.spaceInBarrack]], this.configManager,
                    this.eventManager),
                this.pageManager, this.configManager.barrackPresentFlag, [this.pageManager.jobWarriorRow])]
        ]);
    }

    /**
     * Trying to build new building
     * @param buildingType building type
     * @returns true/false depends on whether building is built.
     */
    buildNewBuilding(buildingType) {
        let result = this.buildingMap.get(buildingType).buildBuilding()
        if (!this.configManager.palacePresentFlag && result) {
            this.checkPalaceAchievement(buildingType);
        }
        if (result) {
            this.pageManager.checkOverpopulated();
        }

        return result;
    }

    checkPalaceAchievement(buildingType) {
        if (!this.configManager.palacePresentFlag && "palace" === buildingType) {
            this.eventManager.showAchievementToUser("Palace");
            this.pageManager.buildPalaceButton.blur().prop("disabled", true).tooltip('hide');
            setTimeout(() => {
                $(`#build-palace-last-msg`).text(
                    `\t${this.configManager.userName}, You are amazing!!! \nCongratulations! You built a palace for yourself!! \nAlso you've just killed: ${+this.configManager.corpse
                    + +this.configManager.inGraveQuantity} people. \n(￣▽￣)ノ Great job!!`
                );
                $("#audio-build-palace")[0].play();

                $("#build-palace-modal").modal();
            }, 3e2);
        }
    }
}

/**
 * Base class for building
 */
class Building {
    constructor(woodPrice, stonePrice, resourceToChangeAr, configManager, eventManager) {
        this.woodPrice = woodPrice;
        this.stonePrice = stonePrice;

        this.resourceToChangeAr = resourceToChangeAr;

        this.configManager = configManager;
        this.eventManager = eventManager;
    }

    buildBuilding() {
        return this.tryToBuild();
    }

    tryToBuild() {
        let result = true;

        if (this.checkEnoughResource()) {
            this.configManager.wood.changeValue(-this.woodPrice);
            this.configManager.stone.changeValue(-this.stonePrice);

            for (let i = 0; i < this.resourceToChangeAr[0].length; i++) {
                this.resourceToChangeAr[0][i].changeValue(this.resourceToChangeAr[1][i]);
            }
        } else {
            this.eventManager.showEventMsgToUser("more resources");
            result = false;
        }

        return result;
    }

    checkEnoughResource() {
        return +this.configManager.wood >= this.woodPrice && +this.configManager.stone >= this.stonePrice;
    }
}

/**
 * Class decorator for Building
 * Add showing new elements on the page.
 */
class BuildingWithShowElement {
    constructor(building, pageManager, flag, showElementAr) {
        this.building = building;

        this.pageManager = pageManager;
        this.flag = flag;
        this.showElementAr = showElementAr;
    }

    buildBuilding() {
        let result = this.building.tryToBuild();
        if (!this.flag && result) {
            this.pageManager.showElement(this.showElementAr);
            this.flag = true;
        }
        return result;
    }
}

export default BuilderManager;