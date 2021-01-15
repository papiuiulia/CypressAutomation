describe('MyTestSuite', function()
{
    it('Verify Title of the page! - positive test', function()
    {
        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Verify Title of the page!- negative test', function()
    {
        cy.visit('http://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce store')
    })
})
