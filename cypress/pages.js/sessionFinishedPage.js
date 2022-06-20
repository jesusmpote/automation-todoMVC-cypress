class sessionFinished{

    settings = ".OptionsPrivateProfile__Container-sc-16eiakg-0 > :nth-child(3)"

    get_configurations(){
        return cy.get(this.settings)
    }

    logOut = ".ListItem__Container-sc-l6j6ku-0 > :nth-child(7)"

    get_logOut(){
        return cy.get(this.logOut)
    }

}

export default sessionFinished