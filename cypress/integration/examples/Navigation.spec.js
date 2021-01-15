/// <reference types="cypress" />

describe('MyTestSuite', function()
{
    it('Navigations Test', function()
    {
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq', 'nopCommerce demo store')  // home page

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register') // Reg page

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store')  // Home

        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register') // Reg Page

        cy.go(-1) // back
        cy.title().should('eq','nopCommerce demo store') // Home

        cy.go(1) // forward
        cy.title().should('eq','nopCommerce demo store. Register') // Reg Page

        cy.reload()

    })
})