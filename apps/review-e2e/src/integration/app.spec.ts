describe('review', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Board Game Hoard: Review');

    cy.contains('a', 'Settlers in the Can').within(() => {
      cy.contains('/5');
      cy.contains('£35.00');
    });
    cy.contains('a', 'Chess Pie').within(() => {
      cy.contains('/5');
      cy.contains('£15.00');
    });
    cy.contains('a', 'Purrfection').within(() => {
      cy.contains('/5');
      cy.contains('£45.00');
    });
  });
});
