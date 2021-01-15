/// <reference types="Cypress" />

describe('UI Elements', function() 
{ 
    it('Verify Inputbox & Radio buttons', function () 
    {
        cy.visit("http://newtours.demoaut.com") // visit URL
        cy.url().should('incluse', 'newtours') // Verify URL should include 'newtours'

        cy.get('input[name="userName]').should('be.visible').should('be.enable').type("mercuty")
        cy.get('input[name="password]').should('be.visible').should('be.enable').type("mercuty")
        
        cy.get('input[name="login]').should('be.visible').click()   // sign in button

        
        cy.title().should('eq','Find a Flight: Mercury Tours:') // Title verification

        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')  // visibility checked status 
        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()  // visibility checked status
 
        cy.get('[name=findFlights]').should('be.visible').click()  //continue button

        cy.title().should('eq','Select a Flight: Mercury Tours') // Title Verification



    })

})