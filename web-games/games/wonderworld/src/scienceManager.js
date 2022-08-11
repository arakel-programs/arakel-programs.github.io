/**
 * Manage researches
 */
class ScienceManager {
    initialization(gameManager) {
        this.gameManager = gameManager;

        this.configManager = this.gameManager.configManager;
        this.eventManager = this.gameManager.eventManager;
        this.pageManager = this.gameManager.pageManager;

        this.researchMap = new Map([
            ["changes", new ChangesResearch(this.configManager, this.pageManager, this.eventManager)],
            ["agriculture", new AgricultureResearch(
                new Research(this.configManager.agricultureCost, this.pageManager.techAgricultureElement, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["architecture", new Research(this.configManager.architectureCost, this.pageManager.techArchitectureElement, [this.pageManager.buildHutRow],
                this.configManager, this.pageManager, this.eventManager)],
            ["funeral", new Research(this.configManager.funeralCost, this.pageManager.techFuneralElement, [this.pageManager.buildScrollRow, this.pageManager.buildGraveRow,
                this.pageManager.emptyRowBeforePopulationBuilding, this.pageManager.techChanges2Element], this.configManager, this.pageManager, this.eventManager)],
            ["changes2", new Research(this.configManager.changes2Cost, this.pageManager.techChanges2Element, [this.pageManager.techAgriculture2Element,
                    this.pageManager.techArchitecture2Element, this.pageManager.techLeadershipElement, this.pageManager.techStoneAgeElement], this.configManager, this.pageManager,
                this.eventManager)],
            ["leadership", new Research(this.configManager.leadershipCost, this.pageManager.techLeadershipElement, [this.pageManager.emptyRowBeforeJobLeader, this.pageManager.leaderRow],
                this.configManager, this.pageManager, this.eventManager)],
            ["agriculture2", new Agriculture2Research(
                new Research(this.configManager.agriculture2Cost, this.pageManager.techAgriculture2Element, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["architecture2", new Research(this.configManager.architecture2Cost, this.pageManager.techArchitecture2Element, [this.pageManager.buildPitRow],
                this.configManager, this.pageManager, this.eventManager)],
            ["stone age", new Research(this.configManager.stoneAgeCost, this.pageManager.techStoneAgeElement, [this.pageManager.buildGranaryRow, this.pageManager.techArchitecture3Element,
                this.pageManager.techMusicElement, this.pageManager.techSportElement, this.pageManager.techToolElement], this.configManager, this.pageManager, this.eventManager)],
            ["architecture3", new Research(this.configManager.architecture3Cost, this.pageManager.techArchitecture3Element, [this.pageManager.buildDolmenRow],
                this.configManager, this.pageManager, this.eventManager)],
            ["music", new Research(this.configManager.musicCost, this.pageManager.techMusicElement, [this.pageManager.buildMusicClubRow], this.configManager,
                this.pageManager, this.eventManager)],
            ["sport", new Research(this.configManager.sportCost, this.pageManager.techSportElement, [this.pageManager.emptyRowBeforeJobInClubElement,
                this.pageManager.emptyRowBeforeBuildEfficiency, this.pageManager.buildYogaClubRow], this.configManager, this.pageManager, this.eventManager)],
            ["tool", new Research(this.configManager.toolCost, this.pageManager.techToolElement, [this.pageManager.techAxeElement, this.pageManager.techPickaxeElement,
                this.pageManager.techHoeElement, this.pageManager.tech2sideScrollElement], this.configManager, this.pageManager, this.eventManager)],
            ["hoe", new HoeResearch(
                new Research(this.configManager.hoeCost, this.pageManager.techHoeElement, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["axe", new AxeResearch(
                new Research(this.configManager.axeCost, this.pageManager.techAxeElement, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["pickaxe", new PickAxeResearch(
                new Research(this.configManager.pickaxeCost, this.pageManager.techPickaxeElement, [this.pageManager.techBronzeAgeElement], this.configManager, this.pageManager, this.eventManager)
            )],
            ["2 side scroll", new TwoSideScrollResearch(
                new Research(this.configManager.bothSideScrollCost, this.pageManager.tech2sideScrollElement, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["bronze age", new Research(this.configManager.bronzeAgeCost, this.pageManager.techBronzeAgeElement, [this.pageManager.techArchitecture4Element, this.pageManager.techWheelElement],
                this.configManager, this.pageManager, this.eventManager
            )],
            ["architecture4", new Architecture4Research(
                new Research(this.configManager.architecture4Cost, this.pageManager.techArchitecture4Element, [this.pageManager.buildGraveyardRow, this.pageManager.buildDuplexRow,
                        this.pageManager.buildParthenonRow, this.pageManager.buildLibraryRow, this.pageManager.scrollRow, this.pageManager.jobWriterRow]
                    , this.configManager, this.pageManager, this.eventManager)
            )],
            ["wheel", new WheelResearch(
                new Research(this.configManager.wheelCost, this.pageManager.techWheelElement, [this.pageManager.techAgriculture3Element, this.pageManager.techLeadership2Element,
                    this.pageManager.techPackagingElement, this.pageManager.techScoutElement], this.configManager, this.pageManager, this.eventManager)
            )],
            ["agriculture3", new AgricultureResearch(
                new Research(this.configManager.agriculture3Cost, this.pageManager.techAgriculture3Element, [], this.configManager, this.pageManager, this.eventManager)
            )],
            ["leadership2", new Leadership2Research(
                new Research(this.configManager.leadership2Cost, this.pageManager.techLeadership2Element, [this.pageManager.addLeaderButton], this.configManager, this.pageManager, this.eventManager)
            )],
            ["packaging", new PackagingResearch(
                new Research(this.configManager.packagingCost, this.pageManager.techPackagingElement, [this.pageManager.techArchitecture5Element], this.configManager, this.pageManager, this.eventManager)
            )],
            ["scouting", new ScoutingResearch(
                new Research(this.configManager.scoutingCost, this.pageManager.techScoutElement, [this.pageManager.techAncientWeaponElement], this.configManager, this.pageManager, this.eventManager)
            )],
            ["weapon", new Research(this.configManager.ancientWeaponCost, this.pageManager.techAncientWeaponElement, [this.pageManager.weaponRow, this.pageManager.emptyRowBeforeJobMaster
                    , this.pageManager.jobWeaponMasterRom, this.pageManager.emptyRowbeforeBuildWar, this.pageManager.buildArmoryRow, this.pageManager.buildBarrackRow], this.configManager, this.pageManager
                , this.eventManager)],
            ["architecture5", new Research(this.configManager.architecture5Cost, this.pageManager.techArchitecture5Element, [this.pageManager.buildPalaceRow, this.pageManager.techDomesticationElement
                    , this.pageManager.techMysticismElement, this.pageManager.techToolAgeElement],
                this.configManager, this.pageManager, this.eventManager)],

            // TODO finish the next 3 techs is the next age
            ["domestication", new Research(this.configManager.domesticationCost, null, [], this.configManager, this.pageManager, this.eventManager)],
            ["mysticism", new Research(this.configManager.mysticismCost, null, [], this.configManager, this.pageManager, this.eventManager)],
            ["tool age", new Research(this.configManager.toolAgeCost, null, [], this.configManager, this.pageManager, this.eventManager)],
        ]);
    }

    research(name) {
        this.researchMap.get(name).conductResearch();
    }
}

/**
 * For 1st research, it's separate due to specific resources to conduct the research.
 */
class ChangesResearch {
    constructor(configManager, pageManager, eventManager) {
        this.woodPrice = 10;
        this.stonePrice = 10;

        this.configManager = configManager;
        this.pageManager = pageManager;
        this.eventManager = eventManager;
    }

    conductResearch() {
        return this.tryToResearch();
    }

    tryToResearch() {
        let result = true;

        if (+this.configManager.wood >= this.woodPrice && +this.configManager.stone >= this.stonePrice) {
            this.configManager.wood.changeValue(-this.woodPrice);
            this.configManager.stone.changeValue(-this.stonePrice);

            this.eventManager.showAchievementToUser("First Research");

            this.pageManager.hideFirstShowSecond(this.pageManager.techChangesElement, [this.pageManager.emptyRowBeforeKnowledge, this.pageManager.knowledgeRow,
                this.pageManager.emptyRowBeforeJobScientist, this.pageManager.jobScientistRow, this.pageManager.emptyRowBeforeBuildKnowlegde, this.pageManager.buildCampfireRow,
                this.pageManager.techAgricultureElement, this.pageManager.techFuneralElement, this.pageManager.techArchitectureElement]);
        } else {
            this.eventManager.showEventMsgToUser("more resources");
            result = false;
        }

        return result;
    }
}

/**
 * Class base research
 */
class Research {
    constructor(price, elementToHide, elementToShowAr, configManager, pageManager, eventManager) {
        this.price = price;
        this.elementToHide = elementToHide;
        this.elementToShowAr = elementToShowAr;

        this.configManager = configManager;
        this.pageManager = pageManager;
        this.eventManager = eventManager;
    }

    conductResearch() {
        return this.tryToResearch();
    }

    tryToResearch() {
        let result = true;

        if (+this.configManager.knowledge >= this.price) {
            this.configManager.knowledge.changeValue(-this.price);
            if (this.elementToHide && this.elementToShowAr) {
                this.pageManager.hideFirstShowSecond(this.elementToHide, this.elementToShowAr);
            }
        } else {
            this.eventManager.showEventMsgToUser("more knowledge");
            result = false;
        }

        return result;
    }
}

/**
 * Example of "decorator" pattern
 */
class ResearchWithExtraLogic {
    constructor(research) {
        this.research = research;
    }

    conductResearch() {
        let result = this.research.conductResearch();
        if (result) {
            this.extraLogic();
        }
        return result;
    }

    extraLogic() {
    }
}

/**
 * Example of "template method" pattern
 */
class AgricultureResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.changeProduction("food", true);
        this.research.pageManager.checkProduction();
        this.research.pageManager.clickResourceFoodRow.addClass("highlight");
    }
}

class Agriculture2Research extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.changeProduction("food", true);
        this.research.eventManager.showAchievementToUser("More Food");
        this.research.pageManager.checkProduction();
        this.research.pageManager.clickResourceFoodRow.addClass("highlight");
    }
}

class HoeResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.foodIncreaseStep = 0.1;
        this.research.configManager.changeProduction("food", true);
        this.research.configManager.productivity.changeValue(6.25);
        this.research.pageManager.checkProduction();
        this.research.pageManager.productivityQuantityElement.addClass("highlight");
        this.research.pageManager.clickResourceFoodRow.addClass("highlight");
    }
}

class AxeResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.changeProduction("wood", true);
        this.research.configManager.productivity.changeValue(6.25);
        this.research.pageManager.checkProduction();
        this.research.pageManager.productivityQuantityElement.addClass("highlight");
        this.research.pageManager.clickResourceWoodRow.addClass("highlight");
    }
}

class PickAxeResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.changeProduction("stone", true);
        this.research.configManager.productivity.changeValue(6.25);
        this.research.pageManager.checkProduction();
        this.research.pageManager.productivityQuantityElement.addClass("highlight");
        this.research.pageManager.clickResourceStoneRow.addClass("highlight");
    }
}

class TwoSideScrollResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.knowledgeStorage.changeValue(+this.research.configManager.scroll * +this.research.configManager.knowledgeInScroll);
        this.research.configManager.knowledgeInScroll.changeValue(5);
        this.research.pageManager.gameManager.builderManager.buildingMap.get("scroll").resourceToChangeAr[1][1] = +this.research.configManager.knowledgeInScroll;

        this.research.pageManager.buildScrollButton.text("2-side scroll");
        this.research.pageManager.buildScrollDefinition.text("10");

        this.research.pageManager.buildScrollRow.addClass("highlight");
        this.research.pageManager.maxKnowledgeQuantityElement.addClass("highlight");
    }
}

class Architecture4Research extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.pageManager.hideElement([this.research.pageManager.buildGraveRow, this.research.pageManager.buildScrollRow, this.research.pageManager.buildTentRow, this.research.pageManager.buildCampfireRow]);
    }
}

class WheelResearch extends ResearchWithExtraLogic {
    constructor(props) {
        super(props);
    }

    extraLogic() {
        this.research.configManager.changeAllProduction(true);
        this.research.configManager.productivity.changeValue(25);

        this.research.pageManager.clickResourceFoodRow.addClass("highlight");
        this.research.pageManager.clickResourceWoodRow.addClass("highlight");
        this.research.pageManager.clickResourceStoneRow.addClass("highlight");
        this.research.pageManager.knowledgeRow.addClass("highlight");
        this.research.pageManager.productivityRowElement.addClass("highlight");
    }
}

class PackagingResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.configManager.foodStorage.changeValue(+this.research.configManager.granary * +this.research.configManager.resourcesInStorage);
        this.research.configManager.woodStorage.changeValue(+this.research.configManager.pit * +this.research.configManager.resourcesInStorage);
        this.research.configManager.stoneStorage.changeValue(+this.research.configManager.pit * +this.research.configManager.resourcesInStorage);

        this.research.configManager.resourcesInStorage.changeValue(50);

        this.research.pageManager.gameManager.builderManager.buildingMap.get("granary").resourceToChangeAr[1][1] = +this.research.configManager.resourcesInStorage;
        this.research.pageManager.gameManager.builderManager.buildingMap.get("pit").resourceToChangeAr[1][1] = +this.research.configManager.resourcesInStorage;
        this.research.pageManager.gameManager.builderManager.buildingMap.get("pit").resourceToChangeAr[1][2] = +this.research.configManager.resourcesInStorage;

        this.research.pageManager.resourceInStorageDefinition.text("100").addClass("highlight");
        this.research.pageManager.maxFoodQuantityElement.addClass("highlight");
        this.research.pageManager.maxWoodQuantityElement.addClass("highlight");
        this.research.pageManager.maxStoneQuantityElement.addClass("highlight");
    }
}

class Leadership2Research extends ResearchWithExtraLogic {

    constructor(research) {
        super(research);
    }


    extraLogic() {
        this.research.configManager.leaderPresent2ResearchFlag = true;
    }
}

class ScoutingResearch extends ResearchWithExtraLogic {
    constructor(research) {
        super(research);
    }

    extraLogic() {
        this.research.pageManager.changeUI();
        this.research.configManager.scoutingResearchFlag = true;
        this.research.pageManager.peopleProductivityTable.addClass("highlight");
        $("nav a").addClass("highlight");
    }
}

export default ScienceManager;