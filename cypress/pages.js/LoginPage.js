//import { eq } from "cypress/types/lodash";
const MailosaurClient = require('mailosaur')
const mailosaur = new MailosaurClient('WGm6w9QKScavcduN')

class main{

    fieldEmail = ".sc-ksZaOG";
    placeholderEmail = ".sc-ksZaOG";

    get_fieldemail(){
        return cy.get(this.fieldEmail)
    }

    buttonLogin = ".Layout__CTAContainer-sc-11pefzq-8 > .sc-gsnTZi";
    placeholderLogin = ".sc-gsnTZi eZTDWi"

    get_boton_Login(){
        return cy.get(this.buttonLogin)
    }

    codeEmail = ":nth-child(1) > .Inputs__Input-sc-1tok937-3"

    get_code_email1(){
        return cy.get(this.codeEmail)
    }

    codeEmail_two = ":nth-child(2) > .Inputs__Input-sc-1tok937-3"

    get_code_email2(){

        return cy.get(this.codeEmail_two)
    }

    codeEmail_three = ":nth-child(3) > .Inputs__Input-sc-1tok937-3"

    get_code_email3(){

        return cy.get(this.codeEmail_three)
    }

    codeEmail_for = ":nth-child(4) > .Inputs__Input-sc-1tok937-3"

    get_code_email4(){

        return cy.get(this.codeEmail_for)
    }

    containerPin = ".Inputs__Container-sc-1tok937-1"

    get_container_pin(){

        return cy.get(this.containerPin)
    }

}

export default main