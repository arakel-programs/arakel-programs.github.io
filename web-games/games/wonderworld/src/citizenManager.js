/**
 * Manage people
 */
class CitizenManager {
    initialization(gameManager) {
        this.gameManager = gameManager;
        this.configManager = this.gameManager.configManager;
        this.eventManager = this.gameManager.eventManager;
        this.pageManager = this.gameManager.pageManager;
    }

    tryToCreateCitizen(quantity) {
        let result = false;

        if (this.checkCitizenCost(quantity) && this.checkFreeHouses(quantity)) {
            this.configManager.food.changeValue(-this.configManager.citizenCost * quantity);
            this.addCitizen(quantity);

            this.setHappyPeople();
            this.setHealthyPeople();

            this.pageManager.checkProduction();
            this.pageManager.checkOverpopulated();
            result = true;
        }

        return result;
    }

    checkCitizenCost(quantity) {
        let result = true;
        if (+this.configManager.food < this.configManager.citizenCost * quantity) {
            result = false;
            this.eventManager.showEventMsgToUser("not enough food");
        }
        return result;
    }

    checkFreeHouses(quantity) {
        let result = true;
        if ((+this.configManager.currentPopulation + quantity) > +this.configManager.populationStorage) {
            result = false;
            this.eventManager.showEventMsgToUser("not enough houses");
        }
        return result;
    }

    /**
     * Just add new citizen
     * @param quantity - how many
     */
    addCitizen(quantity) {
        let previousValue = +this.configManager.currentPopulation.storage;
        this.configManager.currentPopulation.storage.setValue(Number.MAX_SAFE_INTEGER);
        this.configManager.currentPopulation.changeValue(quantity);
        // It allows to pass current population storage limit
        this.configManager.currentPopulation.storage.setValue(previousValue);

        this.configManager.lazybones.changeValue(quantity);
        this.configManager.foodTotalProduction.changeValue(-quantity);
    }

    setHappyPeople() {
        if (+this.configManager.currentPopulation <= +this.configManager.dj * this.configManager.spaceForPeopleInClub) {
            this.configManager.currentHappyPeople.setValue(+this.configManager.currentPopulation);
        }
    }

    setHealthyPeople() {
        if (+this.configManager.currentPopulation <= +this.configManager.instructor * this.configManager.spaceForPeopleInClub) {
            this.configManager.currentHealthyPeople.setValue(+this.configManager.currentPopulation);
        }
    }

    setCitizenToWork(workType, quantity) {
        let result = this.checkOpportunityToSetCitizen(workType, quantity);
        if (result) {
            this.setWorker(workType, quantity);
            this.pageManager.checkLeaderPresence(result, workType);
            this.pageManager.checkLeaderPresence2(result, workType);
        }
        return result;
    }

    checkOpportunityToSetCitizen(workType, quantity) {
        let result = false;

        // add worker
        if (quantity > 0) {
            if (this.checkLazybonesPresence()) {
                if (+this.configManager.lazybones >= quantity) {
                    // check enough buildings
                    if (workType === this.configManager.scientist && this.configManager.scientist.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more campfires");
                        return result;
                    } else if (workType === this.configManager.writer && this.configManager.writer.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more libraries");
                        return result;
                    } else if (workType === this.configManager.dj && this.configManager.dj.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more music clubs");
                        return result;
                    } else if (workType === this.configManager.instructor && this.configManager.instructor.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more yoga clubs");
                        return result;
                    } else if (workType === this.configManager.weaponMaster && this.configManager.weaponMaster.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more armory");
                        return result;
                    } else if (workType === this.configManager.warrior && this.configManager.warrior.isMaxStorage()) {
                        this.eventManager.showEventMsgToUser("more barrack");
                        return result;
                    } else if (workType === this.configManager.warrior && quantity > +this.configManager.weapon) {
                        this.eventManager.showEventMsgToUser("weapon lack");
                        return result;
                    }

                    // for funeral
                } else {
                    this.eventManager.showEventMsgToUser("1 funeral process needs 2 workers");
                    return result;
                }

                result = true;
            }

            // remove worker
        } else if (+workType) {
            result = true;
        }

        return result;
    }

    checkLazybonesPresence() {
        let result = true;
        if (!+this.configManager.lazybones) {
            this.eventManager.showEventMsgToUser("lack of lazybones");
            result = false;
        }

        return result;
    }

    setWorker(workType, quantity) {
        this.configManager.lazybones.changeValue(-quantity);
        workType.changeValue(quantity);

        if (workType === this.configManager.farmer) {
            this.configManager.foodTotalProduction.changeValue(this.configManager.farmerProduction * quantity);
        } else if (workType === this.configManager.woodman) {
            this.configManager.woodTotalProduction.changeValue(this.configManager.woodmanProduction * quantity);
        } else if (workType === this.configManager.miner) {
            this.configManager.stoneTotalProduction.changeValue(this.configManager.minerProduction * quantity);
        } else if (workType === this.configManager.scientist) {
            this.configManager.knowledgeTotalProduction.changeValue(this.configManager.scientistProduction * quantity);
        } else if (workType === this.configManager.writer) {
            this.configManager.scrollTotalProduction.changeValue(0.2 * quantity);
        } else if (workType === this.configManager.weaponMaster) {
            this.configManager.weaponTotalProduction.changeValue(this.configManager.weaponMasterProduction * quantity);
            this.configManager.woodTotalProduction.changeValue(-0.2 * quantity);
            this.configManager.stoneTotalProduction.changeValue(-0.2 * quantity);
        } else if (workType === this.configManager.warrior) {
            this.configManager.weapon.changeValue(-quantity);
        } else if (workType === this.configManager.dj) {
            let peopleAmount = +this.configManager.currentPopulation;
            let totalAvailableSpaceInClub = +this.configManager.dj * this.configManager.spaceForPeopleInClub;
            let curHappyPeople = peopleAmount <= totalAvailableSpaceInClub ? peopleAmount : totalAvailableSpaceInClub;
            this.configManager.currentHappyPeople.setValue(curHappyPeople);

            if (!this.configManager.djProductivityFlag) {
                this.configManager.changeAllProduction(true);
                this.configManager.djProductivityFlag = true;
            }
        } else if (workType === this.configManager.instructor) {
            let peopleAmount = +this.configManager.currentPopulation;
            let totalAvailableSpaceInClub = +this.configManager.instructor * this.configManager.spaceForPeopleInClub;
            let curHealthyPeople = peopleAmount <= totalAvailableSpaceInClub ? peopleAmount : totalAvailableSpaceInClub;
            this.configManager.currentHealthyPeople.setValue(curHealthyPeople);

            if (!this.configManager.instructorProductivityFlag) {
                this.configManager.changeAllProduction(true);
                this.configManager.instructorProductivityFlag = true;
            }
        }

        this.pageManager.checkProduction();
    }

    // TODO Try to refactor this part in the next time (create new classes for citizens, for jobs, extend from Resource)
    findPersonToKill() {
        $("#audio-no")[0].play();

        let withDecrease = true;
        if (+this.configManager.lazybones) {
            withDecrease = false;
            this.killLazybone();
        } else if (+this.configManager.woodman) {
            withDecrease = false;
            this.killWoodcutter();
        } else if (+this.configManager.miner) {
            withDecrease = false;
            this.killMiner();
        } else if (+this.configManager.funeral) {
            this.configManager.funeral.changeValue(-2);
            this.configManager.lazybones.changeValue(1);
        } else if (+this.configManager.scientist) {
            withDecrease = false;
            this.killScientist();
        } else if (+this.configManager.dj) {
            this.configManager.dj.changeValue(-1);
            this.configManager.currentHappyPeople.changeValue(-(+this.configManager.currentPopulation <= this.configManager.spaceForPeopleInClub ? +this.configManager.currentPopulation
                : (this.configManager.spaceForPeopleInClub - 1)));
            if (!+this.configManager.dj) {
                this.configManager.changeAllProduction(false);
                this.configManager.djProductivityFlag = false;
            }
        } else if (+this.configManager.instructor) {
            this.configManager.instructor.changeValue(-1);
            this.configManager.currentHealthyPeople.changeValue(-(+this.configManager.currentPopulation <= this.configManager.spaceForPeopleInClub ? +this.configManager.currentPopulation
                : (this.configManager.spaceForPeopleInClub - 1)));
            if (!+this.configManager.instructor) {
                this.configManager.changeAllProduction(false);
                this.configManager.instructorPresentFlag = false;
            }
        } else if (+this.configManager.leader) {
            this.configManager.leader.changeValue(-1);
            if (!this.configManager.leaderPresent2ResearchFlag && this.pageManager.addLeaderButton.css("display") === "none") {
                this.pageManager.addLeaderButton.show("slow");
            }
            if (+this.configManager.leader < 10 && this.configManager.leaderPresent2Flag) {
                // this.pageManager.hideElement([this.pageManager.maxWorkTd]);
                this.pageManager.maxWorkTd.slideUp("slow");
                this.pageManager.workTableEmptyTd.attr("colspan", "7");
                this.configManager.leaderPresent2Flag = false;
            }
            if (!+this.configManager.leader && this.configManager.leaderPresentFlag) {
                // this.pageManager.hideElement([this.pageManager.tenWorkTd]);
                this.pageManager.tenWorkTd.slideUp("slow");
                this.pageManager.workTableEmptyTd.attr("colspan", "5");
                this.configManager.leaderPresentFlag = false;
            }
        } else if (+this.configManager.writer) {
            withDecrease = false;
            this.killWorker(this.configManager.writer);
        } else if (+this.configManager.weaponMaster) {
            withDecrease = false;
            this.killWorker(this.configManager.weaponMaster);
        } else if (+this.configManager.scout) {
            withDecrease = false;
            this.killWorker(this.configManager.scout);
        } else if (+this.configManager.warrior) {
            withDecrease = false;
            this.killWarrior();
        } else if (+this.configManager.farmer) {
            withDecrease = false;
            this.killFarmer();
        }

        if (withDecrease) {
            this.decreasePopulation();
        }

        this.pageManager.checkProduction();
        this.pageManager.checkOverpopulated();
    }

    killLazybone() {
        this.decreasePopulation();
        this.configManager.lazybones.changeValue(-1);
    }

    killWarrior() {
        this.decreasePopulation();
        this.configManager.warrior.changeValue(-1);
    }

    killFarmer() {
        this.killWorker(this.configManager.farmer, this.configManager.foodTotalProduction, this.configManager.farmerProduction);
    }

    killWoodcutter() {
        this.killWorker(this.configManager.woodman, this.configManager.woodTotalProduction, this.configManager.woodmanProduction);
    }

    killMiner() {
        this.killWorker(this.configManager.miner, this.configManager.stoneTotalProduction, this.configManager.minerProduction);
    }

    killScientist() {
        this.killWorker(this.configManager.scientist, this.configManager.knowledgeTotalProduction, this.configManager.scientistProduction);
    }

    // killWorker(workerType, totalProduction, curUnitProduction) {
    //     this.decreasePopulation();
    //
    //     workerType.changeValue(-1);
    //     totalProduction.changeValue(-curUnitProduction);
    // }

    killWorker(workerType) {
        this.setCitizenToWork(workerType, -1);
        this.killLazybone();
    }

    decreasePopulation() {
        this.configManager.currentPopulation.changeValue(-1);
        this.configManager.foodTotalProduction.changeValue(1);

        this.checkCorpseVisibility();
        this.configManager.corpse.changeValue(1);
    }

    checkCorpseVisibility() {
        if (!this.configManager.corpsePresenceFlag) {
            this.pageManager.showElement([this.pageManager.corpseRow]);
            this.configManager.corpsePresenceFlag = true;
        }
    }
}

export default CitizenManager;