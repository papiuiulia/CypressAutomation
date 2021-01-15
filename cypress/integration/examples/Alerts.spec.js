/// <reference types="Cypress" />

describe('Suite Name', function() {
    it('Alerts', function () {
        // cy.visit("https://mail.rediff.com/cgi-bin/login.cgi")

        // cy.get('input[type=submit]').click()

        //     cy.on('window:alert', (str) =>
        //     {
        //         expect(str).to.equal('Please enter a valid user name')
        //     }         
        // )

        cy.visit("https://testautomationpractive.blogspot.com/")
        cy.get("#HTML9 > div.widget-content > button").click()

        cy.on('window:confirm', (str) => 
        {
            expect(str).to.equal('Press a button!')
        })

    })
})