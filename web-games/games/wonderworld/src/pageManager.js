class PageManager {
    constructor() {
        // System variables
        this.userNameElement = $("#user-name");
        // Buttons
        this.pauseButton = $("#pause-button");
        this.saveButton = $("#save-button");
        this.loadButton = $("#in-game-load-button");
        this.mainMenuLoadButton = $("#main-menu-load-button");
        this.startAgainButton = $("#start-again-button");
        this.getFullButton = $("#getFullButton");
        // Others
        this.starvationWarning = $("#starvation-warning");
        this.notAchievement = $("#not-achievement");
        // Scouting
        this.scoutRadioButtons = $(".form-check-input");
        this.unknownRadioButton = $("#unknown-radio-div");
        this.elfRadioButton = $("#elf-radio-div");
        this.dwarfRadioButton = $("#dwarf-radio-div");
        this.ufoRadioButton = $("#ufo-radio-div");
        this.dragonRadioButton = $("#dragon-radio-div");
        this.humanRadioButton = $("#human-radio-div");
        this.amazonRadioButton = $("#amazon-radio-div");
        this.spartaRadioButton = $("#sparta-radio-div");
        this.orcRadioButton = $("#orc-radio-div");
        this.scoutProgressBar = $("#scout-progress");
        // Attack
        this.attackDiv = $("#attack-div");
        this.totalPowerSpan = $("#total-power-span");
        this.attackI = $("#attack-i");
        this.yourPowerProgressBar = $("#your-power-progress-bar");
        this.enemyPowerProgressBar = $("#enemy-power-progress-bar");
        this.attackProgressBarSection = $("#attack-section");
        // Click resources
        // Food
        this.clickResourceFoodRow = $("#click-resource-food-row");
        this.foodQuantityElement = $("#food-quantity");
        this.maxFoodQuantityElement = $("#max-food-quantity-span");
        this.foodClickButton = $("#food-click-button");
        this.foodProductionElement = $("#food-production-quantity");
        // Wood
        this.clickResourceWoodRow = $("#click-resource-wood-row");
        this.woodQuantityElement = $("#wood-quantity");
        this.maxWoodQuantityElement = $("#max-wood-quantity-span");
        this.woodClickButton = $("#wood-click-button");
        this.woodProductionElement = $("#wood-production-quantity");
        // Stone
        this.clickResourceStoneRow = $("#click-resource-stone-row");
        this.stoneQuantityElement = $("#stone-quantity");
        this.maxStoneQuantityElement = $("#max-stone-quantity-span");
        this.stoneClickButton = $("#stone-click-button");
        this.stoneProductionElement = $("#stone-production-quantity");
        // Knowledge
        this.emptyRowBeforeKnowledge = $("#empty-row-before-knowledge");
        this.knowledgeRow = $("#knowledge-row");
        this.knowledgeQuantityElement = $("#knowledge-quantity");
        this.maxKnowledgeQuantityElement = $("#max-knowledge-quantity-span");
        this.knowledgeProductionElement = $("#knowledge-production-quantity");
        this.scrollRow = $("#scroll-row");
        this.scrollProductionElement = $("#scroll-production-quantity");
        // Weapon
        this.emptyRowBeforeWeapon = $("#empty-row-before-weapon");
        this.weaponRow = $("#weapon-row");
        this.weaponQuantityElement = $("#weapon-quantity");
        this.weaponProductionElement = $("#weapon-production-quantity");

        // Table People - Productivity
        this.peopleProductivityTable = $("#people-productivity-table");
        this.curPopulationElement = $("#current-population");
        this.maxPopulationElement = $("#max-population");
        this.createCitizenButton = $("#create-worker-button");
        this.create10CitizenButton = $("#create-10-worker-button");
        this.createMaxCitizenButton = $("#create-max-worker-button");

        this.corpseRow = $("#corpse-row");
        this.corpseQuantityElement = $("#corpse-quantity");

        this.inGravesRow = $("#in-graves-row");
        this.inGraveQuantityElement = $("#in-graves-quantity");
        this.maxInGravesQuantityElement = $("#max-in-graves-quantity");

        this.emptyRowBeforHappinessRowElement = $("#empty-row-before-happiness");
        this.happinessRowElement = $("#happiness-row");
        this.curHappyPeopleElement = $("#current-happy-people");
        this.maxHappyPeopleElement = $("#max-happy-people");
        this.healthRowElement = $("#health-row");
        this.curHealthyPeopleElement = $("#current-healthy-people");
        this.maxHealthyPeopleElement = $("#max-healthy-people");

        this.emptyRowBeforProductivityRowElement = $("#empty-row-before-productivity");
        this.productivityRowElement = $("#productivity-row");
        this.productivityQuantityElement = $("#productivity-quantity");

        // Pet
        this.petTable = $("#pets-table");
        this.dragonRowElement = $("#dragon-row-element");
        this.curDragonElement = $("#dragon-quantity-element");
        this.dragonConsumptionElement = $("#dragon-consumption-element");
        this.catRowElement = $("#cat-row-element");
        this.curCatElement = $("#cat-quantity-element");
        this.catConsumptionElement = $("#cat-consumption-element");

        // Table Jobs
        this.workTable = $("#work-table");
        this.tenWorkTd = $(".ten-work-td");
        this.maxWorkTd = $(".max-work-td");
        this.workTableEmptyTd = $("#work-table .empty-row td, #world-table .empty-row td");
        // Lazybones
        this.curLazybonesElement = $(".lazybone-quantity");
        // Farmer
        this.removeAllFarmerButton = $("#remove-all-farmer-button");
        this.remove10FarmerButton = $("#remove-10-farmer-button");
        this.removeFarmerButton = $("#remove-farmer-button");
        this.farmerQuantityElement = $("#farmer-quantity");
        this.addFarmerButton = $("#add-farmer-button");
        this.add10FarmerButton = $("#add-10-farmer-button");
        this.addMaxFarmerButton = $("#add-max-farmer-button");
        // Woodman
        this.removeAllWoodmanButton = $("#remove-all-woodcutter-button");
        this.remove10WoodmanButton = $("#remove-10-woodcutter-button");
        this.removeWoodmanButton = $("#remove-woodcutter-button");
        this.woodmenQuantityElement = $("#woodcutter-quantity");
        this.addWoodmanButton = $("#add-woodcutter-button");
        this.add10WoodmanButton = $("#add-10-woodcutter-button");
        this.addMaxWoodmanButton = $("#add-max-woodcutter-button");
        // Miner
        this.removeAllMinerButton = $("#remove-all-miner-button");
        this.remove10MinerButton = $("#remove-10-miner-button");
        this.removeMinerButton = $("#remove-miner-button");
        this.minerQuantityElement = $("#miner-quantity");
        this.addMinerButton = $("#add-miner-button");
        this.add10MinerButton = $("#add-10-miner-button");
        this.addMaxMinerButton = $("#add-max-miner-button");
        // Scientist
        this.emptyRowBeforeJobScientist = $("#empty-row-before-job-scientist");
        this.jobScientistRow = $("#job-scientist-row");
        this.removeAllScientistButton = $("#remove-all-scientist-button");
        this.remove10ScientistButton = $("#remove-10-scientist-button");
        this.removeScientistButton = $("#remove-scientist-button");
        this.curScientistQuantityElement = $("#scientist-quantity");
        this.maxScientistQuantityElement = $("#max-scientist-quantity");
        this.addScientistButton = $("#add-scientist-button");
        this.add10ScientistButton = $("#add-10-scientist-button");
        this.addMaxScientistButton = $("#add-max-scientist-button");
        // Writer
        this.jobWriterRow = $("#job-writer-row");
        this.curWriterQuantityElement = $("#writer-quantity");
        this.maxWriterQuantityElement = $("#max-writer-quantity");
        this.addWriterButton = $("#add-writer-button");
        // Funeral
        this.emptyRowBeforeJobFuneral = $("#empty-row-before-job-funeral");
        this.jobFuneralRow = $("#job-funeral-process-row");
        this.removeFuneralButton = $("#remove-funeral-button");
        this.funeralQuantityElement = $("#funeral-process-quantity");
        this.addFuneralButton = $("#add-funeral-button");
        this.funeralProcessImg = $("#funeral-process-img");
        // Music club
        this.emptyRowBeforeJobInClubElement = $("#empty-row-before-job-in-club");
        this.jobDjRowElement = $("#job-dj-row");
        this.djQuantityElement = $("#dj-quantity");
        this.maxDjQuantityElement = $("#max-dj-quantity");
        this.addDjButton = $("#add-dj-button");
        // Sport club
        this.jobInstructorRowElement = $("#job-instructor-row");
        this.instructorQuantityElement = $("#instructor-quantity");
        this.maxInstructorQuantityElement = $("#max-instructor-quantity");
        this.addInstructorButton = $("#add-instructor-button");
        // Leader
        this.emptyRowBeforeJobLeader = $("#empty-row-before-job-leader");
        this.leaderRow = $("#job-leader-row");
        this.leaderQuantityElement = $("#leader-quantity");
        this.addLeaderButton = $("#add-leader-button");
        // Scout
        this.removeAllScoutButton = $("#remove-all-scout-button");
        this.remove10ScoutButton = $("#remove-10-scout-button");
        this.removeScoutButton = $("#remove-scout-button");
        this.scoutQuantityElement = $("#scout-quantity");
        this.addScoutButton = $("#add-scout-button");
        this.add10ScoutButton = $("#add-10-scout-button");
        this.addMaxScoutButton = $("#add-max-scout-button");
        // Warrior
        this.jobWarriorRow = $("#job-warrior-row");
        this.warriorQuantityElement = $("#warrior-quantity");
        this.maxWarriorQuantityElement = $("#max-warrior-quantity");
        this.addWarriorButton = $("#add-warrior-button");
        // Weapon Master
        this.emptyRowBeforeJobMaster = $("#empty-row-before-job-master");
        this.jobWeaponMasterRom = $("#job-weapon-master-row");
        this.removeWeaponMasterButton = $("#remove-weapon-master-button");
        this.weaponMasterQuantityElement = $("#weapon-master-quantity");
        this.maxWeaponMasterQuantityElement = $("#max-weapon-master-quantity");
        this.addWeaponMasterButton = $("#add-weapon-master-button");

        // Table buildings
        this.buildingTable = $("#building-table");
        // Storage
        this.buildGraveRow = $("#build-grave-row");
        this.graveQuantityElement = $("#grave-quantity");
        this.buildGraveButton = $("#build-grave-button");
        this.buildGraveyardRow = $("#build-graveyard-row");
        this.graveyardQuantityElement = $("#graveyard-quantity");
        this.buildGraveyardButton = $("#build-graveyard-button");
        this.buildScrollRow = $("#build-scroll-row");
        this.scrollQuantityElement = $(".scroll-quantity");
        this.buildScrollButton = $("#build-scroll-button");
        this.buildScrollDefinition = $("#build-scroll-definition");
        this.buildGranaryRow = $("#build-storage-granary-row");
        this.granaryQuantityElement = $("#granary-quantity");
        this.buildGranaryButton = $("#build-storage-granary-button");
        this.buildPitRow = $("#build-storage-pit-row");
        this.pitQuantityElement = $("#pit-quantity");
        this.buildPitButton = $("#build-storage-pit-button");
        this.resourceInStorageDefinition = $(".build-resources-in-storage-definition");
        // Houses
        this.emptyRowBeforePopulationBuilding = $("#empty-row-before-population-building");
        this.buildTentRow = $("#build-population-tent-row");
        this.tentQuantityElement = $("#tent-quantity");
        this.buildTentButton = $("#build-tent-button");
        this.buildHutRow = $("#build-population-hut-row");
        this.hutQuantityElement = $("#hut-quantity");
        this.buildHutButton = $("#build-hut-button");
        this.buildDuplexRow = $("#build-population-duplex-row");
        this.duplexQuantityElement = $("#duplex-quantity");
        this.buildDuplexButton = $("#build-duplex-button");
        // Science buildings
        this.emptyRowBeforeBuildKnowlegde = $("#empty-row-before-knowledge-building");
        this.buildCampfireRow = $("#build-knowledge-campfire-row");
        this.campfireQuantityElement = $("#campfire-quantity");
        this.buildCampfireButton = $("#build-campfire-button");
        this.buildDolmenRow = $("#build-knowledge-dolmen-row");
        this.dolmenQuantityElement = $("#dolmen-quantity");
        this.buildDolmenButton = $("#build-dolmen-button");
        this.buildParthenonRow = $("#build-knowledge-parthenon-row");
        this.parthenonQuantityElement = $("#parthenon-quantity");
        this.buildParthenonButton = $("#build-parthenon-button");
        this.buildLibraryRow = $("#build-library-row");
        this.libraryQuantityElement = $("#library-quantity");
        this.buildLibraryButton = $("#build-library-button");
        // Health/Happiness
        this.emptyRowBeforeBuildEfficiency = $("#empty-row-before-build-club");
        this.buildMusicClubRow = $("#build-music-club-row");
        this.musicClubQuantityElement = $("#music-club-quantity");
        this.buildMusicClubButton = $("#build-music-club-button");
        this.buildYogaClubRow = $("#build-yoga-club-row");
        this.yogaClubQuantityElement = $("#yoga-club-quantity");
        this.buildYogaClubButton = $("#build-yoga-club-button");
        this.buildPalaceRow = $("#build-palace-row");
        this.palaceQuantityElement = $("#palace-quantity");
        this.buildPalaceButton = $("#build-palace-button");
        // War buildings
        this.emptyRowbeforeBuildWar = $("#empty-row-before-build-war");
        this.buildBarrackRow = $("#build-war-barrack-row");
        this.barrackQuantityElement = $("#barrack-quantity");
        this.buildBarrackButton = $("#build-barrack-button");
        this.buildArmoryRow = $("#build-war-armory-row");
        this.armoryQuantityElement = $("#armory-quantity");
        this.buildArmoryButton = $("#build-armory-button");

        // Events
        this.eventDiv = $("#events-section span");
        // Achievements
        this.achievementSection = $("#achievement-section");
        this.gotAchievementQuantitySpan = $("#got-achievement-quantity-span");
        this.ufoAchievement = $("<img alt='alien img' src='res/img/achievement/alien.png' title='Player is an alien'/>");
        this.palaceAchievement = $("<img alt='palace ach img' src='res/img/stone%20age/palace.png' title='Build a palace'/>");
        this.firstResearchAchievement = $("<img alt='first research img' src='res/img/achievement/knowledge.png' title='First research'/>");
        this.hungerAchievement = $("<img alt='starving img' src='res/img/common/death.png' title='Death from hunger'/>");
        this.productivityAchievement = $("<img alt='productivity img' src='res/img/achievement/speedometer.png' title='Achieve high productivity (more than 190%)'/>");
        this.moreFoodAchievement = $("<img alt='farmer production img' src='res/img/achievement/food.png' title='Even more food, hurray!!! :)'/>");

        // Table Technologies
        this.technologyTable = $("#technology-table");
        // Changes
        this.techChangesElement = $("#tech-changes-row");
        this.researchChangesButton = $("#tech-changes-button");
        this.techAgricultureElement = $("#tech-agriculture-row");
        this.researchAgricultureButton = $("#tech-agriculture-button");
        this.techArchitectureElement = $("#tech-architecture-row");
        this.researchArchitectureButton = $("#tech-architecture-button");
        this.techFuneralElement = $("#tech-funeral-row");
        this.researchFuneralButton = $("#tech-funeral-button");
        // Changes2
        this.techChanges2Element = $("#tech-changes2-row");
        this.researchChanges2Button = $("#tech-changes2-button");
        this.techLeadershipElement = $("#tech-leadership-row");
        this.researchLeadershipButton = $("#tech-leadership-button");
        this.techAgriculture2Element = $("#tech-agriculture-2-row");
        this.researchAgriculture2Button = $("#tech-agriculture-2-button");
        this.techArchitecture2Element = $("#tech-architecture-2-row");
        this.researchArchitecture2Button = $("#tech-architecture-2-button");
        // Stone age
        this.techStoneAgeElement = $("#tech-stone-age-row");
        this.researchStoneAgeButton = $("#tech-stone-age-button");
        this.techArchitecture3Element = $("#tech-architecture-3-row");
        this.researchArchitecture3Button = $("#tech-architecture-3-button");
        this.techMusicElement = $("#tech-music-row");
        this.researchMusicButton = $("#tech-music-button");
        this.techSportElement = $("#tech-sport-row");
        this.researchSportButton = $("#tech-sport-button");
        this.techToolElement = $("#tech-tools-row");
        this.researchToolButton = $("#tech-tools-button");
        this.techAncientWeaponElement = $("#tech-weapon-row");
        this.researchWeaponButton = $("#tech-ancient-weapon-button");
        this.techHoeElement = $("#tech-hoe-row");
        this.researchHoeButton = $("#tech-hoe-button");
        this.techAxeElement = $("#tech-axe-row");
        this.researchAxeButton = $("#tech-axe-button");
        this.techPickaxeElement = $("#tech-pickaxe-row");
        this.researchPickaxeButton = $("#tech-pickaxe-button");
        this.tech2sideScrollElement = $("#tech-2-side-scroll-row");
        this.research2sideScrollButton = $("#tech-2-side-scroll-button");
        // Bronze age
        this.techBronzeAgeElement = $("#tech-bronze-age-row");
        this.researchBronzeAgeButton = $("#tech-bronze-age-button");
        this.techArchitecture4Element = $("#tech-architecture-4-row");
        this.researchArchitecture4Button = $("#tech-architecture-4-button");
        this.techWheelElement = $("#tech-wheel-row");
        this.researchWheelButton = $("#tech-wheel-button");

        this.techAgriculture3Element = $("#tech-agriculture-3-row");
        this.researchAgriculture3Button = $("#tech-agriculture-3-button");
        this.techLeadership2Element = $("#tech-leadership-2-row");
        this.researchLeadership2Button = $("#tech-leadership-2-button");
        this.techPackagingElement = $("#tech-packaging-row");
        this.researchPackagingButton = $("#tech-packaging-button");
        this.techScoutElement = $("#tech-scouting-row");
        this.researchScoutButton = $("#tech-scouting-button");

        this.techWeaponElement = $("#tech-weapon-row");
        this.researchWeaponButton = $("#tech-ancient-weapon-button");

        this.techArchitecture5Element = $("#tech-architecture-5-row");
        this.researchArchitecture5Button = $("#tech-architecture-5-button");

        this.techDomesticationElement = $("#tech-domestication-row");
        this.researchDomesticationButton = $("#tech-domestication-button");
        this.techMysticismElement = $("#tech-mysticism-row");
        this.researchMysticismButton = $("#tech-mysticism-button");
        this.techToolAgeElement = $("#tech-tool-age-row");
        this.researchToolAgeButton = $("#tech-tool-age-button");
    }

    initialization(gameManager) {
        this.gameManager = gameManager;
        this.eventManager = this.gameManager.eventManager;
        this.configManager = this.gameManager.configManager;

        // for saving/loading
        this.showElementArray = [
            "build-population-tent-row",
            "tech-changes-row",
        ];
        this.hideElementArray = [
            // "in-game-load-button",
            // "pause-button",
            // "save-button",
            // "start-again-button",
            "create-10-worker-button",

            "click-resource-wood-row",
            "click-resource-stone-row",
            "empty-row-before-knowledge",
            "knowledge-row",
            "scroll-row",
            "empty-row-before-weapon",
            "weapon-row",

            "people-productivity-table",
            "corpse-row",
            "in-graves-row",
            "empty-row-before-happiness",
            "happiness-row",
            "health-row",
            "empty-row-before-productivity",
            "productivity-row",

            "pets-table",

            "work-table",
            "empty-row-before-job-leader",
            "job-leader-row",
            "empty-row-before-job-scientist",
            "job-scientist-row",
            "job-writer-row",
            "empty-row-before-job-funeral",
            "job-funeral-process-row",
            "empty-row-before-job-in-club",
            "job-dj-row",
            "job-instructor-row",
            "empty-row-before-job-master",
            "job-weapon-master-row",
            "job-warrior-row",

            "building-table",
            "build-grave-row",
            "build-graveyard-row",
            "build-population-tent-row",
            "build-scroll-row",
            "build-storage-granary-row",
            "build-storage-pit-row",
            "empty-row-before-population-building",
            "build-population-hut-row",
            "build-population-duplex-row",
            "build-knowledge-campfire-row",
            "build-knowledge-dolmen-row",
            "empty-row-before-knowledge-building",
            "build-knowledge-parthenon-row",
            "build-library-row",
            "empty-row-before-build-club",
            "build-music-club-row",
            "build-yoga-club-row",
            "build-palace-row",
            "empty-row-before-build-war",
            "build-war-armory-row",
            "build-war-barrack-row",

            "technology-table",
            "tech-agriculture-row",
            "tech-architecture-row",
            "tech-funeral-row",
            "tech-changes2-row",
            "tech-leadership-row",
            "tech-agriculture-2-row",
            "tech-architecture-2-row",
            "tech-stone-age-row",
            "tech-architecture-3-row",
            "tech-music-row",
            "tech-sport-row",
            "tech-tools-row",
            "tech-hoe-row",
            "tech-axe-row",
            "tech-pickaxe-row",
            "tech-2-side-scroll-row",
            "tech-bronze-age-row",
            "tech-architecture-4-row",
            "tech-wheel-row",
            "tech-agriculture-3-row",
            "tech-leadership-2-row",
            "tech-packaging-row",
            "tech-scouting-row",
            "tech-weapon-row",
            "tech-architecture-5-row",
            "tech-domestication-row",
            "tech-mysticism-row",
            "tech-tool-age-row"
        ];
    }

    hideElement(ar) {
        ar.forEach((item) => {
            item.hide("slow");
            let index = this.showElementArray.indexOf(item.attr("id"));
            if (index !== -1) {
                this.showElementArray.splice(index, 1);
                this.hideElementArray.push(item.attr("id"));
            }
        });
    }

    showElement(ar) {
        ar.forEach((item) => {
            item.show("slow");
            let index = this.hideElementArray.indexOf(item.attr("id"));
            if (index !== -1) {
                this.hideElementArray.splice(index, 1);
                this.showElementArray.push(item.attr("id"));

                item.addClass("highlight");
            }
        });
    }

    hideFirstShowSecond(firstElementToHide, newElementArToShow) {
        firstElementToHide.hide("slow", () => this.showElement(newElementArToShow));

        let index = this.showElementArray.indexOf(firstElementToHide.attr("id"));
        if (index !== -1) {
            this.showElementArray.splice(index, 1);
            this.hideElementArray.push(firstElementToHide.attr("id"));
        }
    }

    static reloadSite() {
        document.location.reload(true);
    }

    pause() {
        $("body").css({"opacity": "0.1"});
        setTimeout(() => {
            alert("...pause. ");
        }, 100);
        setTimeout(() => {
            $("body").css({"opacity": "1"});
        }, 300);
    }

    checkProduction() {
        this.changeColor(+this.configManager.foodTotalProduction, this.foodProductionElement, this.addFarmerButton);
        this.changeColor(+this.configManager.woodTotalProduction, this.woodProductionElement);
        this.changeColor(+this.configManager.stoneTotalProduction, this.stoneProductionElement);
        this.changeColor(+this.configManager.knowledgeTotalProduction, this.knowledgeProductionElement);
        this.changeColor(+this.configManager.lazybones, this.curLazybonesElement);

        this.changeColor(+this.configManager.scrollTotalProduction, this.scrollProductionElement);
        this.changeColor(+this.configManager.weaponTotalProduction, this.weaponProductionElement);
    }

    checkOverpopulated() {
        this.changeColor(+this.configManager.populationStorage - +this.configManager.currentPopulation - 1, this.maxPopulationElement);
    }

    changeColor(checkQuantity, target, button) {
        if (checkQuantity > 0) {
            target.css({"background-color": "#28a745", "border-color": "#28a745", "color": "white"});
            if (!!button) {
                button.css({"background-color": "#28a745", "border-color": "#28a745", "color": "white"});
            }
        } else if (checkQuantity === 0) {
            target.css({"background-color": "", "color": "white"});
        } else {
            target.css({"background-color": "red", "color": "white"});
            if (!!button) {
                button.css({"background-color": "green", "border-color": "red"});
            }
        }
    }

    changeUI() {
        $("#audio-change-ui")[0].play();
        $("#nav-tab").show("slow");

        this.peopleProductivityTable.hide("slow", () => {
            this.moveTable("people-productivity-table", "nav-people", true);
        });
        this.peopleProductivityTable.slideDown("slow");
        this.moveTable("work-table", "nav-work", true);
    }

    unChangeUI() {
        $("#nav-tab").hide("slow");

        this.peopleProductivityTable.hide("slow", () => {
            this.moveTable("people-productivity-table", "click-resource-table", false);
        });
        this.peopleProductivityTable.slideDown("slow");
        this.moveTable("work-table", "nav-tabContent", false);
    }

    moveTable(table, to, append) {
        if (append) {
            $("#" + table + " caption").hide("slow");
        } else {
            $("#" + table + " caption").show("slow");
        }

        let element = $("#" + table);
        element.detach();
        if (append) {
            $("#" + to).append(element);
        } else {
            $("#" + to).after(element);
        }
    }

    runMainMenuModal() {
        try {
            $("#audio-modal")[0].play();
        } catch (e) {
            console.log("Audio modal isn't loaded...");
        }
        $('#main-menu-modal').on('shown.bs.modal', () => {
            $('#user-name-input').trigger('focus')
        });
        $('#main-menu-modal').modal();

        $("#user-name-input").on('keyup', (e) => {
            if (e.key === "Enter") {
                this.getUserNameFromModal();
                $('#main-menu-modal').modal('toggle');
                $('#get-food-modal').modal();
                $("#audio-modal")[0].play();
            }
        });

        $("#main-menu-new-game-button").on("click", () => {
            localStorage.clear();
            this.getUserNameFromModal();
            $('#main-menu-modal').modal('toggle');
            $('#get-food-modal').modal();
            $("#audio-modal")[0].play();
        });
    }

    getUserNameFromModal() {
        let userName = $("#user-name-input").val().trim();
        userName = userName || "No named";
        if (userName === "UFO Alien") {
            this.eventManager.showAchievementToUser("UFO Alien");
        }
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
        this.configManager.userName = userName;

        localStorage.setItem(this.configManager.userKey, userName);
        this.userNameElement.text(userName);

        this.gameManager.intervalManager.runInterval();
        this.runTooltips();
    }

    runTooltips() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    clickResourceButton(resourceType, quantity) {
        resourceType.changeValue(quantity);
    }

    checkLeaderPresence(result, workType) {
        if (!this.configManager.leaderPresentFlag && result && workType === this.configManager.leader) {
            this.workTableEmptyTd.attr("colspan", "7");
            // this.showElement([this.tenWorkTd]);
            this.tenWorkTd.slideDown("slow");

            this.configManager.leaderPresentFlag = true;
        }

        if (!this.configManager.leaderPresent2ResearchFlag && +this.configManager.leader === 9) {
            this.addLeaderButton.blur().prop("disabled", true).tooltip("hide");
            this.addLeaderButton.hide("slow", () => {
                this.addLeaderButton.prop("disabled", false);
            });
        }
    }

    checkLeaderPresence2(result, workType) {
        if (!this.configManager.leaderPresent2Flag && workType === this.configManager.leader && result && +this.configManager.leader > 9) {
            this.workTableEmptyTd.attr("colspan", "9");
            // this.showElement([this.maxWorkTd]);
            this.maxWorkTd.slideDown("slow");

            this.configManager.leaderPresent2Flag = true;
        }
    }

    checkHiddenTables() {
        if (!this.configManager.showPeopleTableFlag && +this.configManager.food > 5) {
            this.showElement([this.peopleProductivityTable]);
            this.configManager.showPeopleTableFlag = true;
            $("#audio-modal")[0].play();
            $('#citizen-modal').modal();
        }
        if (!this.configManager.showWorkTableFlag && +this.configManager.currentPopulation > 0) {
            this.showElement([this.workTable, this.clickResourceWoodRow, this.clickResourceStoneRow]);
            this.configManager.showWorkTableFlag = true;
        }
        if (!this.configManager.showBuildingTableFlag && +this.configManager.currentPopulation === +this.configManager.populationStorage) {
            this.showElement([this.buildingTable]);
            this.configManager.showBuildingTableFlag = true;
            $("#audio-modal")[0].play();
            $('#building-modal').modal();
        }
        if (!this.configManager.showTechnologyTableFlag && +this.configManager.wood > 14) {
            this.showElement([this.technologyTable]);
            this.configManager.showTechnologyTableFlag = true;
            $("#audio-modal")[0].play();
            $('#technology-modal').modal();
        }

        if (!this.configManager.showPetTableFlag && (+this.configManager.dragon || +this.configManager.cat)) {
            this.showElement([this.petTable]);
            this.configManager.showPetTableFlag = true;
        }
    }
}

export default PageManager;