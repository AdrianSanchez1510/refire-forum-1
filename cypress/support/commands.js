// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js
// Optional: Keep the command but modify its purpose
describe('AuthenticationMenu', () => {
    beforeEach(() => {
      // Visita la URL base configurada en Cypress
      cy.visit('http://localhost:4000');
    });
  
    it('should simulate Google login without showing the popup', () => {
      // Intercepta la solicitud de verificación de Firebase
      cy.intercept('POST', `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyAssertion?key=*`, {
        statusCode: 200,
        body: {
          idToken: 'mockIdToken', // Simula el token
          email: 'test-google@mockemail.com',
          localId: 'mockUserId',
          displayName: 'Mock User',
          photoUrl: 'https://example.com/photo.jpg',
        },
      }).as('firebaseOAuth');
  
      // Simula la autenticación directamente
      // Aquí puedes agregar cualquier lógica que simule el estado de autenticación,
      // como una función de autenticación personalizada en tu aplicación.
      
      // Verifica que la UI ha cambiado indicando que el usuario está autenticado
      cy.wait('@firebaseOAuth'); // Espera la solicitud
      cy.get('.Dropdown-toggle').should('contain', 'Logout'); // Verifica que ahora hay un botón de Logout
    });
  });
  