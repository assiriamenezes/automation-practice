// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';


Cypress.Commands.add('proceedtoCheckout', () => {
  cy.get('.cart_navigation > .button > span')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('authenticationFunc', () => {
      cy.get('#email').type('assiriasmenezes@gmail.com')
      cy.get('#passwd').type('teste123')
      cy.get('#SubmitLogin').click()
      cy.url().should('eq','http://www.automationpractice.pl/index.php?controller=my-account')  
})

Cypress.Commands.add('accessLoginpage', () => {
      cy.viewport(1920, 1090)
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')  
})

Cypress.Commands.add('generateFirstName', () => {
      return faker.person.firstName()
})

Cypress.Commands.add('generateFakeEmail', () => {
      return faker.internet.email()
})

Cypress.Commands.add('generateLastName', () => {
      return faker.person.lastName()
})

Cypress.Commands.add('selectRandomBirthDate', () => {


      const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
      const day = birthDate.getDate()
      const month = birthDate.getMonth() + 1
      const year = birthDate.getFullYear()

      cy.get('#days').select(day.toString())
      cy.get('#months').select(month.toString())
      cy.get('#years').select(year.toString())
})

Cypress.Commands.add('selectRandomTitle', () => {
  const titles = ['Mr', 'Mrs']
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]
  
  cy.get(`#id_gender${randomTitle === 'Mr' ? '1' : '2'}`).check()
})