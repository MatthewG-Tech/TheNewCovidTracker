context('Home Page Test', () => {
    it('US nav link works', () => {
        cy.visit('/')
        cy.findByText("United States").click();
        cy.findByText('This is the United States').click();
    })
})