import { faker } from '@faker-js/faker'

describe('Register', () => {

    beforeEach(() => {
        cy.accessLoginpage()
    })

    it('Scenario 1: Create an account with e-mail empty field', () => {
        cy.get('#SubmitCreate').click()
        cy.contains('Invalid email address.').should('be.visible')
    })

    it('Scenario 2: Create an account with invalid e-mail', () => {
        cy.get('#email_create').type('assiria@')
        cy.get('#SubmitCreate').click()
        cy.contains('Invalid email address.').should('be.visible')
    })

    it('Scenario 3: Create an account with valid e-mail', () => {

        cy.get('#email_create').type(faker.internet.email())
        cy.get('#SubmitCreate').click()
        
        cy.selectRandomTitle()
        cy.get('#customer_firstname').type(faker.person.firstName())
        cy.get('#customer_lastname').type(faker.person.lastName())
        cy.get('#passwd').type('test1234')
        cy.selectRandomBirthDate()
        cy.get('#submitAccount > span').click()
        cy.contains(' Your account has been created.').should('be.visible')
    })   

    it('Scenario 4: Create an account with empty fields', () => {
        
        cy.get('#email_create').type(faker.internet.email())
        cy.get('#SubmitCreate').click()
        cy.get('#submitAccount > span').click()
        cy.contains('There are 3 errors').should('be.visible')
        cy.contains('lastname is required.').should('be.visible')
        cy.contains('firstname is required.').should('be.visible')
        cy.contains('passwd is required.').should('be.visible')
    })
})