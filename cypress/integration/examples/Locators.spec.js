/// <reference types="cypress" />
describe ('Locating Elements', function()
{
    it('Verify types of locators', function()
    {
        cy.visit("http://demo.nopcommerce.com/") // open the URL

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")  //search box

        cy.get("[type='submit']").click() // click on Search button

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

           cy.get("#addtocart_4_EnteredQuantity").clear().type('2')  // quantity
           cy.wait(3000)

           cy.get("#add-to-cart-button-4").click() // Add to cart button after providing quantity

           cy.wait(5000)

           cy.get("#topcartlink > a > span.cart-label").click() // shopping cart link
           cy.wait(3000)

           cy.get(".product-unit-price").contains('$1,800.00')  // validating point
    }
    
    
    )

})