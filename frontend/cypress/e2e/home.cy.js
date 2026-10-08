describe('SN Enviro Live Website E2E Test', () => {
  it('Should successfully load the homepage and find the main logo/brand text', () => {
    // 1. Open a real browser and navigate to the live website
    cy.visit('/');

    // 2. Verify that the webpage actually loaded by checking the title
    cy.title().should('include', 'SN Enviro');

    // 3. Ensure the main header is visible
    cy.get('header').should('be.visible');
  });
});
