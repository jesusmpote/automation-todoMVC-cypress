class homeDashboard{

    profileName = ".user-data";

    get_profileName(){
        return cy.get(this.profileName)
    }

    balance = ".StatisticsProfile__Container-sc-1hf2ti5-0"

    get_balance(){
        return cy.get(this.balance)
    }

}

export default homeDashboard