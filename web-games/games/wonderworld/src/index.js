import GameManager from './gameManager';
import PageManager from "./pageManager";

$(function () {
    "use strict";
    let gameManager = new GameManager();
    let pageManager = gameManager.pageManager;

    initClickEvent();

    $('#change-ui-button').on("click", ()=>{
        pageManager.changeUI();
    });
    $('#unchange-ui-button').on("click", ()=>{
        pageManager.unChangeUI();
    });

    $('*').hover(
        function () {
            $(this).removeClass('highlight');
        }
    );

    gameManager.startGame();

    $("#get-warriors-button").on("click", () => {
        gameManager.configManager.warrior.changeValue(50);
    });

    $("button").on("click", (e)=> {
        e.target.blur();
    });

    function initClickEvent() {
        $("#get-100-w").on("click", ()=>{
            gameManager.configManager.warriorStorage.changeValue(100);
            gameManager.configManager.warrior.changeValue(100);
        });
        $("#get-1k-n").on("click", ()=>{
            gameManager.configManager.knowledgeStorage.changeValue(1000);
            gameManager.configManager.knowledge.changeValue(1000);
        });
        initResourceClickEvent();
        initSettingsClickEvent();
        initCreateCitizenClickEvent();
        initBuildingClickEvent();
        initJobClickEvent();
        // SCOUT
        pageManager.scoutRadioButtons.on("click", () => {
            pageManager.scoutProgressBar.css("width", 0 + "%").attr('aria-valuenow', 0);
        });
        // ATTACK
        pageManager.attackDiv.on("click", (event) => gameManager.warManager.attackEvent(event));

        initClickResearchButtonEvent();
    }

    function initResourceClickEvent() {
        pageManager.foodClickButton.on("click", () => pageManager.clickResourceButton(gameManager.configManager.food, gameManager.configManager.clickEfficiency));
        pageManager.woodClickButton.on("click", () => pageManager.clickResourceButton(gameManager.configManager.wood, gameManager.configManager.clickEfficiency));
        pageManager.stoneClickButton.on("click", () => pageManager.clickResourceButton(gameManager.configManager.stone, gameManager.configManager.clickEfficiency));
    }

    function initSettingsClickEvent() {
        pageManager.getFullButton.on("click", () => gameManager.configManager.getFullResources());
        pageManager.startAgainButton.on("click", () => PageManager.reloadSite());
        pageManager.pauseButton.on("click", () => pageManager.pause());

        pageManager.mainMenuLoadButton.on("click", () => gameManager.loaderManager.loadGameFromMenu());
        pageManager.loadButton.on("click", () => gameManager.loaderManager.loadGame());
        pageManager.saveButton.on("click", () => gameManager.loaderManager.saveGame());
    }

    function initCreateCitizenClickEvent() {
        pageManager.createCitizenButton.on("click", () => gameManager.createWorker(1));
        pageManager.create10CitizenButton.on("click", () => {
            for (let i = 0; i < 10; i++) {
                if (!gameManager.createWorker(1)) {
                    break;
                }
            }
        });
        pageManager.createMaxCitizenButton.on("click", () => {
            for (let i = 0, quantity = Math.floor(gameManager.configManager.food / gameManager.configManager.citizenCost); i < quantity; i++) {
                if (!gameManager.createWorker(1)) {
                    break;
                }
            }
        });
    }

    function initBuildingClickEvent() {
        // Storage
        pageManager.buildGraveButton.on("click", () => gameManager.build("grave"));
        pageManager.buildGraveyardButton.on("click", () => gameManager.build("graveyard"));
        pageManager.buildScrollButton.on("click", () => gameManager.build("scroll"));
        pageManager.buildGranaryButton.on("click", () => gameManager.build("granary"));
        pageManager.buildPitButton.on("click", () => gameManager.build("pit"));
        // Houses
        pageManager.buildTentButton.on("click", () => gameManager.build("tent"));
        pageManager.buildHutButton.on("click", () => gameManager.build("hut"));
        pageManager.buildDuplexButton.on("click", () => gameManager.build("duplex"));
        // Science
        pageManager.buildCampfireButton.on("click", () => gameManager.build("campfire"));
        pageManager.buildDolmenButton.on("click", () => gameManager.build("dolmen"));
        pageManager.buildParthenonButton.on("click", () => gameManager.build("parthenon"));
        pageManager.buildLibraryButton.on("click", () => gameManager.build("library"));
        // Health/Happiness
        pageManager.buildMusicClubButton.on("click", () => gameManager.build("music-club"));
        pageManager.buildYogaClubButton.on("click", () => gameManager.build("yoga-club"));
        pageManager.buildPalaceButton.on("click", () => gameManager.build("palace"));
        // War
        pageManager.buildArmoryButton.on("click", () => gameManager.build("armory"));
        pageManager.buildBarrackButton.on("click", () => gameManager.build("barrack"));
    }

    function initJobClickEvent() {
        // LEADER
        pageManager.addLeaderButton.on("click", () => gameManager.setWorker(gameManager.configManager.leader, 1));
        // FARMER
        pageManager.removeAllFarmerButton.on("click", () => repeatSetWorker(+gameManager.configManager.farmer, gameManager.configManager.farmer, false));
        pageManager.remove10FarmerButton.on("click", () => repeatSetWorker(10, gameManager.configManager.farmer, false));
        pageManager.removeFarmerButton.on("click", () => gameManager.setWorker(gameManager.configManager.farmer, -1));
        pageManager.addFarmerButton.on("click", () => gameManager.setWorker(gameManager.configManager.farmer, 1));
        pageManager.add10FarmerButton.on("click", () => repeatSetWorker(10, gameManager.configManager.farmer, true));
        pageManager.addMaxFarmerButton.on("click", () => repeatSetWorker(+gameManager.configManager.lazybones, gameManager.configManager.farmer, true));
        // WOODCUTTER
        pageManager.removeAllWoodmanButton.on("click", () => repeatSetWorker(+gameManager.configManager.woodman, gameManager.configManager.woodman, false));
        pageManager.remove10WoodmanButton.on("click", () => repeatSetWorker(10, gameManager.configManager.woodman, false));
        pageManager.removeWoodmanButton.on("click", () => gameManager.setWorker(gameManager.configManager.woodman, -1));
        pageManager.addWoodmanButton.on("click", () => gameManager.setWorker(gameManager.configManager.woodman, 1));
        pageManager.add10WoodmanButton.on("click", () => repeatSetWorker(10, gameManager.configManager.woodman, true));
        pageManager.addMaxWoodmanButton.on("click", () => repeatSetWorker(+gameManager.configManager.lazybones, gameManager.configManager.woodman, true));
        // MINER
        pageManager.removeAllMinerButton.on("click", () => repeatSetWorker(+gameManager.configManager.miner, gameManager.configManager.miner, false));
        pageManager.remove10MinerButton.on("click", () => repeatSetWorker(10, gameManager.configManager.miner, false));
        pageManager.removeMinerButton.on("click", () => gameManager.setWorker(gameManager.configManager.miner, -1));
        pageManager.addMinerButton.on("click", () => gameManager.setWorker(gameManager.configManager.miner, 1));
        pageManager.add10MinerButton.on("click", () => repeatSetWorker(10, gameManager.configManager.miner, true));
        pageManager.addMaxMinerButton.on("click", () => repeatSetWorker(+gameManager.configManager.lazybones, gameManager.configManager.miner, true));
        // SCIENTIST
        pageManager.removeAllScientistButton.on("click", () => repeatSetWorker(+gameManager.configManager.scientist, gameManager.configManager.scientist, false));
        pageManager.remove10ScientistButton.on("click", () => repeatSetWorker(10, gameManager.configManager.scientist, false));
        pageManager.removeScientistButton.on("click", () => gameManager.setWorker(gameManager.configManager.scientist, -1));
        pageManager.addScientistButton.on("click", () => gameManager.setWorker(gameManager.configManager.scientist, 1));
        pageManager.add10ScientistButton.on("click", () => repeatSetWorker(10, gameManager.configManager.scientist, true));
        pageManager.addMaxScientistButton.on("click", () => repeatSetWorker(+gameManager.configManager.lazybones, gameManager.configManager.scientist, true));
        // Writer
        pageManager.addWriterButton.on("click", () => gameManager.setWorker(gameManager.configManager.writer, 1));
        // FUNERAL
        pageManager.removeFuneralButton.on("click", () => gameManager.setWorker(gameManager.configManager.funeral, -2));
        pageManager.addFuneralButton.on("click", () => gameManager.setWorker(gameManager.configManager.funeral, 2));
        // Dj
        pageManager.addDjButton.on("click", () => gameManager.setWorker(gameManager.configManager.dj, 1));
        // Instructor
        pageManager.addInstructorButton.on("click", () => gameManager.setWorker(gameManager.configManager.instructor, 1));
        // Weapon master
        pageManager.removeWeaponMasterButton.on("click", () => gameManager.setWorker(gameManager.configManager.weaponMaster, -1));
        pageManager.addWeaponMasterButton.on("click", () => gameManager.setWorker(gameManager.configManager.weaponMaster, 1));
        // SCOUT
        pageManager.removeAllScoutButton.on("click", () => repeatSetWorker(+gameManager.configManager.scout, gameManager.configManager.scout, false));
        pageManager.remove10ScoutButton.on("click", () => repeatSetWorker(10, gameManager.configManager.scout, false));
        pageManager.removeScoutButton.on("click", () => gameManager.setWorker(gameManager.configManager.scout, -1));
        pageManager.addScoutButton.on("click", () => gameManager.setWorker(gameManager.configManager.scout, 1));
        pageManager.add10ScoutButton.on("click", () => repeatSetWorker(10, gameManager.configManager.scout, true));
        pageManager.addMaxScoutButton.on("click", () => repeatSetWorker(+gameManager.configManager.lazybones, gameManager.configManager.scout, true));
        // WARRIOR
        pageManager.addWarriorButton.on("click", () => gameManager.setWorker(gameManager.configManager.warrior, 1));

        function repeatSetWorker(repeatAmount, workerType, increase) {
            let quantity = increase ? 1 : -1;
            for (let i = 0; i < repeatAmount; i++) {
                if (!gameManager.setWorker(workerType, quantity)) {
                    break;
                }
            }
        }
    }

    function initClickResearchButtonEvent() {
        // BEGINNING
        pageManager.researchChangesButton.on("click", () => gameManager.research("changes"));
        // CHANGES 1
        pageManager.researchAgricultureButton.on("click", () => gameManager.research("agriculture"));
        pageManager.researchArchitectureButton.on("click", () => gameManager.research("architecture"));
        pageManager.researchFuneralButton.on("click", () => gameManager.research("funeral"));
        // CHANGES 2
        pageManager.researchChanges2Button.on("click", () => gameManager.research("changes2"));
        pageManager.researchLeadershipButton.on("click", () => gameManager.research("leadership"));
        pageManager.researchAgriculture2Button.on("click", () => gameManager.research("agriculture2"));
        pageManager.researchArchitecture2Button.on("click", () => gameManager.research("architecture2"));
        // STONE AGE
        pageManager.researchStoneAgeButton.on("click", () => gameManager.research("stone age"));
        pageManager.researchArchitecture3Button.on("click", () => gameManager.research("architecture3"));
        pageManager.researchMusicButton.on("click", () => gameManager.research("music"));
        pageManager.researchSportButton.on("click", () => gameManager.research("sport"));
        pageManager.researchToolButton.on("click", () => gameManager.research("tool"));
        pageManager.researchWeaponButton.on("click", () => gameManager.research("weapon"));
        pageManager.researchHoeButton.on("click", () => gameManager.research("hoe"));
        pageManager.researchAxeButton.on("click", () => gameManager.research("axe"));
        pageManager.researchPickaxeButton.on("click", () => gameManager.research("pickaxe"));
        pageManager.research2sideScrollButton.on("click", () => gameManager.research("2 side scroll"));
        pageManager.researchArchitecture4Button.on("click", () => gameManager.research("architecture4"));
        // BRONZE AGE
        pageManager.researchBronzeAgeButton.on("click", () => gameManager.research("bronze age"));
        pageManager.researchWheelButton.on("click", () => gameManager.research("wheel"));
        pageManager.researchAgriculture3Button.on("click", () => gameManager.research("agriculture3"));
        pageManager.researchLeadership2Button.on("click", () => gameManager.research("leadership2"));
        // TODO finish this part
        pageManager.researchPackagingButton.on("click", () => gameManager.research("packaging"));
        pageManager.researchScoutButton.on("click", () => gameManager.research("scouting"));
        pageManager.researchArchitecture5Button.on("click", () => gameManager.research("architecture5"));
        // TODO finish this part in the next age
        pageManager.researchDomesticationButton.on("click", () => gameManager.research("domestication"));
        pageManager.researchMysticismButton.on("click", () => gameManager.research("mysticism"));
        pageManager.researchToolAgeButton.on("click", () => gameManager.research("tool age"));
    }
});