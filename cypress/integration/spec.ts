describe('App simple test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('#en').should('have.class', 'button pressed is-outlined');
    cy.contains('NGX-TRANSLATE Test');
    cy.contains('The Tempest is a great plane');
  });

  it('Click the Spanish language button', () => {
    cy.visit('/');
    cy.get('#es').click();
    cy.get('#es').should('have.class', 'button pressed is-outlined');
    cy.contains('El Tempest es un avión fascinante');
  });
  
  it('Click the Portuguese language button', () => {
    cy.visit('/');
    cy.get('#br').click();
    cy.get('#br').should('have.class', 'button pressed');
    cy.contains('A Tempest é um grande avião');
  });
});
