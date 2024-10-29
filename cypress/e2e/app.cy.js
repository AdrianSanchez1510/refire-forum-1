describe('AuthenticationMenu', () => {
  beforeEach(() => {
    // Visita la URL base configurada en Cypress
    cy.visit('http://localhost:4000');
  });

  it('should simulate Google login without showing the popup', () => {
    // Intercepta la llamada de Firebase
    cy.intercept('POST', `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyAssertion?key=*`, {
      statusCode: 200,
      body: {
        idToken: 'mockIdToken',
        email: 'test-google@mockemail.com',
        localId: 'mockUserId',
        displayName: 'Mock User',
        photoUrl: 'https://example.com/photo.jpg',
      },
    }).as('firebaseOAuth');

    // Abre el menú desplegable
    cy.get('.Dropdown-toggle').click();

    // Intercepta el clic en el botón de Google
    cy.contains('Google').click({ force: true }); // Usa force para asegurarte de que el clic se registra

    // Simula el éxito del login sin abrir el popup
    cy.wait('@firebaseOAuth');

    // Verifica que el usuario está autenticado
    cy.get('.Dropdown-toggle').should('contain', 'Logout'); // Verifica que ahora hay un botón de Logout
  });
});
