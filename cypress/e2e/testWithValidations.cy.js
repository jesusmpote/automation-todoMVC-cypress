import main from "../pages.js/LoginPage";
/// <reference types = "cypress"/>

const faker = require('faker')
//const serverId = 'xvifin8j'
const serverDomain = 'xvifin8j.mailosaur.net'
const emailAddressPin = 'test.beu@' + serverDomain
const apiKey = 'WGm6w9QKScavcduN'

describe('Authentication Suite', function ()  {

  const emailAddress = Cypress.env('MAILOSAUR_SERVER_DOMAIN')

  beforeEach(function(){
    cy.log("aquiiiiiiiAAAAA")
    cy.log(emailAddress)
        cy.visit(Cypress.env('baseUrl'));
        cy.get('[href="/auth/login"] > .sc-gsnTZi').click()
        cy.fixture('login').then(function (login) {
            this.login = login
        })
    } )
     
    it('Testing elements and asserts', function ()  {
      
      const login = new main

        login.get_fieldemail().should("be.visible", "Escribe aquí tu correo electrónico").type(this.login.email)
        login.get_boton_Login().should("be.visible", "Iniciar sesión").click({force: true})
        cy.mailosaurGetMessage(Cypress.env('serverId'), {
          sentTo: emailAddress
        }).then(email   => {
          const confirmationCode = email.html.body.match('([0-9]{4})')
          cy.log(confirmationCode)
          cy.wait(4000)
          login.get_code_email1().type(confirmationCode[0])
          login.get_code_email2().type(confirmationCode[1])
          login.get_code_email3().type(confirmationCode[2])
          login.get_code_email4().type(confirmationCode[3])

          //expect(email.subject).to.equal('Tu código es')

        })



        //login.get_container_pin().type('1')
        //}}
        //)
        //login.get_code_email1().type(1);
        //cy.get('.fa').click();
  
        // Should be on a new URL which includes 
        //cy.url().should('include', '/secure')
  
        // Get an input, type into it and verify that the value has been updated
        //cy.get('.icon-2x')
          //.should('contain', 'Logout')
    })
  })