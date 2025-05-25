describe('Login', () => {
    
    beforeEach(() => {
      cy.viewport(1920, 1090)
      cy.visit('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account')
    })

    it('Scenario 1: Login with valid credentials', () => {
      cy.get('#email').type('assiriasmenezes@gmail.com')
      cy.get('#passwd').type('teste123')
      cy.get('#SubmitLogin').click()
      cy.url().should('eq','http://www.automationpractice.pl/index.php?controller=my-account')
    })

    it('Scenario 2: Login with e-mail empty field', () => {
      cy.get('#passwd').type('teste123')
      cy.get('#SubmitLogin').click()
      cy.contains('There is 1 error')
        .should('be.visible')
      cy.contains('An email address required.')
        .should('be.visible')

    })

    it('Scenario 3: Login with password empty field', () => {
      cy.get('#email').type('assiriasmenezes@gmail.com')
      cy.get('#SubmitLogin').click()
      cy.contains('There is 1 error')
        .should('be.visible')
      cy.contains('Password is required.')
        .should('be.visible')
    })

    it('Scenario 4: Login without invalid credentials', () => {
      cy.get('#email').type('assiriasmenezesS@gmail.com')
      cy.get('#passwd').type('teste123')
      cy.get('#SubmitLogin').click()
      cy.contains('There is 1 error')
        .should('be.visible')
      cy.contains('Authentication failed.')
        .should('be.visible')
    })
})