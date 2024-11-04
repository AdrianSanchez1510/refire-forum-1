describe('Pruebas Automatizadas', () => {
  beforeEach(() => {
    // Visita la URL base configurada en Cypress
    cy.visit('http://localhost:4000');
  });

  // Caso de Prueba #34, Contenido del footer
  it('debería tener un enlace al repositorio de GitHub', () => {
    cy.get('a[href="https://github.com/hoppula/refire-forum"]')
      .should('exist') // Verifica que el enlace existe
      .and('contain.text', 'refire-forum'); // Verifica que el texto del enlace contiene "refire-forum"
  });

  // Caso de Prueba #35, Navegar al repositorio de GitHub
  it('debería navegar al repositorio de GitHub cuando se hace clic en el enlace', () => {
    cy.get('a[href="https://github.com/hoppula/refire-forum"]').then(enlace => {
      const href = enlace.prop('href'); // Verifica que el enlace lleva a la URL correcta
      expect(href).to.equal('https://github.com/hoppula/refire-forum');

      enlace.prop('target', '_blank'); // Abre el enlace en una nueva pestaña para mantener la sesión si es necesario
      cy.wrap(enlace).click();
    });
  });

  // Caso de Prueba #36, Seleccionar el enlace para Refire App Issues
  it('Selecciona el enlace con la clase f45h para Refire App Issues', () => {
    cy.get('a.f45h[href="board/refire-app-issues"]').click(); // Encuentra y selecciona el enlace Refire App Issues
  });

  // Caso de Prueba #37, Seleccionar el enlace para Announcements
  it('Selecciona el enlace con la clase f45h para Announcements', () => {
    cy.get('a.f45h[href="board/announcements"]').click(); // Encuentra y selecciona el enlace Announcements
  });

  // Caso de Prueba #38, Seleccionar el enlace para Refire App Ideas
  it('Selecciona el enlace con la clase f45h para Refire App Ideas', () => {
    cy.get('a.f45h[href="board/refire-app-ideas"]').click(); // Encuentra y selecciona el enlace Refire App Ideas
  });

  // Caso de Prueba #39, Navegar a la pestaña principal al hacer clic en el título
  it('Click al titulo que te permite ir a la pestaña principal', () => {
    cy.visit('/board/refire-forum-ideas/-KCvfFbXcTBC7WaakCbO');
    cy.get('a.fgb49wv[href="/"]').click(); // Hace clic en el título para regresar a la página principal
  });

  // Caso de Prueba #40, Verificar que el header permite navegar a la pestaña principal
  it('Se mantiene el header que te permite ir a la pestaña principal', () => {
    cy.visit('/board/refire-forum-ideas');
    cy.get('a.fgb49wv[href="/"]'); // Verifica que el header tiene un enlace a la página principal
  });

  // Caso de Prueba #41, Inspeccionar el perfil de un usuario que publicó un hilo de foro
  it('Se inspecciona un perfil que publico un hilo de foro', () => {
    cy.visit('board/refire-forum-ideas/-KCviujtTqvzeL3ZgUWZ');
    cy.get('div.f1kolisl a[href="/profile/google:102163232356568047221"]').first().click(); // Accede al perfil del usuario
  });

  // Caso de Prueba #42, Verificar que se muestran las estadísticas en el perfil
  it('Se muestran las estadistica', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('div.f1l8jkug'); // Verifica que las estadísticas se muestran en el perfil
  });

  // Caso de Prueba #43, Verificar que se muestran los foros creados por el usuario
  it('Se muestran los foros creados', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('.fcmecz0'); // Verifica que los foros creados se muestran en el perfil del usuario
  });

  // Caso de Prueba #44, Seleccionar el primer hilo creado por el usuario
  it('Se selecciona el primer hilo creado por el usuario', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('.fcmecz0').first().click(); // Hace clic en el primer hilo creado por el usuario
  });

  // Caso de Prueba #43, Verificar que se muestran los foros creados por el usuario
  it('Se muestran los foros creados', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('.fcmecz0'); // Verifica que los foros creados se muestran en el perfil del usuario
  });

  // Caso de Prueba #45, Verificar que la imagen del perfil existe y tiene la URL correcta
  it('debería encontrar la imagen de perfil especificada', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('img.fdnmg1x[src*="https://lh3.googleusercontent.com/a-/AOh14Gj7tvXGV8VHu_VuIl6Ry7EO4HBucVRzds0ioVON=s96-c"]')
      .should('exist'); // Verifica que la imagen existe
  });
  

});

