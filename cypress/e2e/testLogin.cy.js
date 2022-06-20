import main from "../pages.js/LoginPage";
import homeDashboard from "../pages.js/homePage";
import sessionFinished from "../pages.js/sessionFinishedPage";
import { should } from "chai";
/// <reference types = "cypress"/>


const faker = require('faker')
const serverDomain = 'xvifin8j.mailosaur.net'
const emailAddressPin = 'test.beu@' + serverDomain
const apiKey = 'WGm6w9QKScavcduN'

describe('Verificación de la home Dashboard', function ()  {

  const emailAddress = Cypress.env('MAILOSAUR_SERVER_DOMAIN')

  beforeEach(function(){
    cy.log(emailAddress)
        cy.visit(Cypress.env('baseUrl'));
        cy.get('[href="/auth/login"] > .sc-gsnTZi').click()
        cy.fixture('login').then(function (login) {
            this.login = login
        })
    } )
     
    it('Inicio de sesión, autenticación con pin y validaciones del dashboard', function ()  {
      
      const login = new main
      const profile = new homeDashboard
      const settings = new sessionFinished

        login.get_fieldemail().should("be.visible", "Escribe aquí tu correo electrónico").type(this.login.email)
        login.get_boton_Login().should("be.visible", "Iniciar sesión").click({force: true})
        cy.mailosaurGetMessage(Cypress.env('serverId'), {
          sentTo: emailAddress
        },{receivedAfter: new Date()}).then(message   => {
          
              const confirmationCode = message.html.codes[0]

                login.get_code_email1().type(confirmationCode.value)
                login.get_code_email2().type(confirmationCode.value[1])
                login.get_code_email3().type(confirmationCode.value[2])
                login.get_code_email4().type(confirmationCode.value[3])

                profile.get_profileName().should('be.visible', 'prueba01')
                profile.get_balance().should('be.visible').contains('$0 BEUSD')
                cy.url().should('eq', this.login.urlProfile)

                profile.get_profileName().should('be.visible', 'prueba01').click({force: true})
                settings.get_configurations().should('be.visible', 'Configuraciones').click({force: true})

                settings.get_logOut().should('be.visible', 'Cerrar sesión').click({force: true})
                cy.url().should('eq', this.login.urlLogin)

      })
    })

  })