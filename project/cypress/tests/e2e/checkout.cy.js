import '@testing-library/cypress/add-commands'

describe('Checkout', () => {
    
    beforeEach(() => {
      cy.accessLoginpage()
      cy.authenticationFunc()
    })

    it('Scenario 1: Change the address in the checkout flow', () => {

        const randomId = Math.floor(Math.random() * 1000);

        cy.findByRole("link",{"name":"Dresses"}).click()
        cy.contains('Printed Summer Dress').click()
        cy.get('select#group_1')
          .should('exist')
          .select('2', { force: true })
        cy.get('#add_to_cart').click()  
        cy.contains('Product successfully added to your shopping cart')
        cy.contains('Continue shopping').click()

        cy.get('span:nth-child(1)>a[title="Women"]').click()
        cy.get('h5:nth-child(1)>a[title="Blouse"]').click()
        cy.get('select#group_1')
          .should('exist')
          .select('2', { force: true })
        cy.get('#color_8').click()
        cy.get('#add_to_cart').click()  
        cy.contains('Product successfully added to your shopping cart')
        
        cy.contains('Proceed to checkout').click()
        cy.proceedtoCheckout()
        cy.get('#address_delivery > .address_update > .button > span').click()

        cy.get('#address1').clear().type(`Address test name, ${randomId}`)
        cy.get('#city').clear().type('Los Angeles')
        cy.get('#id_state').invoke('attr','value',"4")
        cy.get('#postcode').clear().type('90002')
        cy.get('#phone').clear().type('992993895989')
        cy.get('#alias').clear().type(`Address test name ${randomId}`)
        cy.get('#submitAddress').click()
        cy.proceedtoCheckout()

        cy.get('#uniform-cgv').click()
        cy.proceedtoCheckout()

        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()

        cy.contains('Your order on My Shop is complete.')
          .should('be.visible')
    })
})