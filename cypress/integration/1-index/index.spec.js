describe('Index Page', () => {
  context('Desktop 1080p', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
    describe('When you visit home', () => {
      it('Should visit home page', () => {
        cy.visit('/');
      });
      it('should have a title', () => {
        cy.get('[data-cy=blog-title]').contains('Blog.');
      });
    });
  });
});
