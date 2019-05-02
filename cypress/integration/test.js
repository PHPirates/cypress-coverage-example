context('coverage', function() {
  specify('cover the tested code', function() {
    cy.visit('http://localhost:3000/');
    cy.get('button').click();
  });
});
