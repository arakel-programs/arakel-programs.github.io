import EventManager from "./eventManager";
import ConfigManager from "./configManager";
import BuilderManager from "./builderManager";
import PageManager from "./pageManager";
import CitizenManager from "./citizenManager";
import ScienceManager from "./scienceManager";
import IntervalManager from "./intervalManager";
import WarManager from "./warManager";
import LoaderManager from "./loaderManager";

class GameManager {
    constructor() {
        this.pageManager = new PageManager();
        this.eventManager = new EventManager();
        this.configManager = new ConfigManager();
        this.builderManager = new BuilderManager();
        this.citizenManager = new CitizenManager();
        this.scienceManager = new ScienceManager();
        this.intervalManager = new IntervalManager();
        this.warManager = new WarManager();
        this.loaderManager = new LoaderManager();

        this.pageManager.initialization(this);
        this.eventManager.initialization(this);
        this.configManager.initialization(this);
        this.builderManager.initialization(this);
        this.citizenManager.initialization(this);
        this.scienceManager.initialization(this);
        this.intervalManager.initialization(this);
        this.warManager.initialization(this);
        this.loaderManager.initialization(this);
    }

    startGame() {
        this.loaderManager.checkSavedGame();

        // this.runMainMenuModal();
        this.pageManager.runMainMenuModal();
    }

    createWorker(quantity) {
        return this.citizenManager.tryToCreateCitizen(quantity);
    }

    setWorker(workType, quantity) {
        return this.citizenManager.setCitizenToWork(workType, quantity);
    }

    build(buildingType) {
        $("#audio-build")[0].play();
        return this.builderManager.buildNewBuilding(buildingType);
    }

    research(name) {
        $("#audio-tech")[0].play();
        return this.scienceManager.research(name);
    }
}

export default GameManager;