/// <reference types="cypress" />

describe('CustomSuite', function () {
    it('CustomTest', function() 
    {
        cy.login('admin@yourstore.com','admin') //valid
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin12') //invalid
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com','admin') //valid
        cy.title().should('be.equal','Your store. Login')

    })

    it('Add customer', function() 
    {
        // Login script
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type('admin@yourstore.com')
        cy.get('input[name=Password]').type('admin')
        cy.get('input[type=submit]').click()

        // Script for adding new customer
        cy.log('Adding customer.........')
    })

    it('Edit customer', function() 
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type('admin@yourstore.com')
        cy.get('input[name=Password]').type('admin')
        cy.get('input[type=submit]').click()

        //script for editing customer
        cy.log('EDITING customer.......')
    })

})