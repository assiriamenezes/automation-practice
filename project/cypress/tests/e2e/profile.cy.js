describe('Profile', () => {
    
    beforeEach(() => {
        cy.accessLoginpage()
        cy.authenticationFunc()
    })

    it('Scenario 1: Add a new address', () => {

        const randomId = Math.floor(Math.random() * 1000);

        cy.get('a[title="Addresses"]').click()
        cy.url().should('eq','http://www.automationpractice.pl/index.php?controller=addresses')
        cy.get('a[title="Add an address"]').click()
        cy.get('#address1').type(`Address test name, ${randomId}`)
        cy.get('#city').type('Los Angeles')
        cy.get('#id_state').invoke('attr','value',"3")
        cy.get('#postcode').type('90001')
        cy.get('#phone').type('992993895980')
        cy.get('#alias').clear().type(`Address test name ${randomId}`)
        cy.get('#submitAddress').click()
    })

    it('Scenario 2: Delete an address', () => {
        cy.get('a[title="Addresses"]').click()
        cy.get('div:nth-child(3)>div:nth-child(1)>ul:nth-child(1)>li:nth-child(9)>a[title="Delete"]').click()
        cy.on('window:confirm', () => true)
    })
    
})