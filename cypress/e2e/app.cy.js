//UTILIZA NPM
/*
  Pruebas automatizadas
  El objetivo es comprobar la funcionalidad de la aplicacion web
  Utiliza npm start en una terminal y en la otra haz
  npx cypress open
  Aqui puedes revisar todas las pruebas disponibles
 */


describe('Pruebas Automatizadas', () => {
  beforeEach(() => {
    // Visita la URL base configurada en Cypress
    cy.visit('http://localhost:4000');
  });

  // Caso de Prueba #6
  it('Acceder a Tema Feature Request and Ideas', () => {
    cy.get('a.f45h[href="board/refire-app-ideas"]').click(); // Selecciona el enlace Refire App Ideas
    cy.url().should('include', '/board/refire-app-ideas'); // Verifica que la URL contiene 'refire-app-ideas'
  });

  // Caso de Prueba #7
  it('Acceder a tema General', () => {
    cy.get('a.f45h[href="board/announcements"]').click(); // Selecciona el enlace Announcements
    cy.url().should('include', '/board/announcements'); // Verifica que la URL contiene 'announcements'
  });

  // Caso de Prueba #8
  it('Acceder a tema Support', () => {
    cy.get('a.f45h[href="board/refire-app-issues"]').click(); // Selecciona el enlace Refire App Issues
    cy.url().should('include', '/board/refire-app-issues'); // Verifica que la URL contiene 'refire-app-issues'
  });

  // Caso de Prueba #23
  it('Verifica de detalles de foro', () => {
    cy.visit('/board/refire-forum-issues/');

    // Verifica el enlace de la publicación
    cy.get('a.f1lnal71')
      .should('have.attr', 'href', '/board/refire-forum-issues/-Kjhhyc83eJTgEgA0bwP')
      .and('contain', 'hello'); // Verifica que el texto sea 'hello'

    // Verifica la imagen de perfil
    cy.get('img.f45qjc0')
      .should('have.attr', 'src', 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'); // Verifica la URL de la imagen

    // Verifica el número de comentarios
    cy.get('a.f10yn6ue .fsusaje')
      .should('contain', '2'); // Verifica que el número de comentarios sea '2'

    // Verifica que el ícono de comentarios está presente
    cy.get('a.f10yn6ue svg')
      .should('be.visible'); // Verifica que el icono esté visible

    // Verifica la fecha de la publicación
    cy.get('div.fbvovn2')
      .should('contain', '1d'); // Verifica que la fecha sea '1d'
  });

  // Caso de Prueba #24
  it('Verificar los comentarios', () => {
    cy.visit('/board/refire-forum-issues'); // Navega a la página de problemas del foro
    cy.get('a.f10yn6ue[href="/board/refire-forum-issues/-Kjhhyc83eJTgEgA0bwP"]').click(); // Hace clic en el enlace específico
  
    // Verifica que la URL es la correcta después de hacer clic en el enlace
    cy.url().should('eq', Cypress.config().baseUrl + '/board/refire-forum-issues/-Kjhhyc83eJTgEgA0bwP'); 
  });

  // Caso de Prueba #25
  it('Debería verificar el número de comentarios', () => {
    cy.visit('/board/refire-forum-issues');
    // Verifica que el primer 'span' con la clase 'fsusaje' tenga el texto '2'
    cy.get('span.fsusaje').first() 
      .should('have.text', '2'); // Verifica que el número es igual a 2
  });

  // Caso de Prueba #28
  it('Visualizar Información de Usuario', () => {
    cy.visit('board/refire-forum-ideas/-KCviujtTqvzeL3ZgUWZ');
    cy.get('div.f1kolisl a[href="/profile/google:102163232356568047221"]').first().click(); // Accede al perfil del usuario
    cy.url().should('include', '/profile/google:102163232356568047221'); // Verifica que la URL es la del perfil del usuario
  });

  // Caso de Prueba #29
  it('Verificar Estadísticas de Publicaciones y Threads', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('div.f1l8jkug').should('be.visible'); // Verifica que las estadísticas se muestran en el perfil
  });

  // Caso de Prueba #30
  it('Verificar Estado de Usuario', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('.fcmecz0').should('exist'); // Verifica que los foros creados se muestran en el perfil del usuario
  });

  // Caso de Prueba #31
  it('Navegar a la Página de Inicio', () => {
    cy.visit('/board/refire-forum-ideas/-KCvfFbXcTBC7WaakCbO');
    cy.get('a.fgb49wv[href="/"]').click(); // Hace clic en el título para regresar a la página principal
    cy.url().should('eq', Cypress.config().baseUrl + '/'); // Verifica que la URL es la de la página principal
  });

  // Caso de Prueba #32
  it('Navegar a GitHub desde el Footer', () => {
    cy.get('a[href="https://github.com/hoppula/refire-forum"]').then(enlace => {
      const href = enlace.prop('href'); // Verifica que el enlace lleva a la URL correcta
      expect(href).to.equal('https://github.com/hoppula/refire-forum');

      enlace.prop('target', '_blank'); // Abre el enlace en una nueva pestaña
      cy.wrap(enlace).click();
    });
  });

  // Caso de Prueba #33
  it('Persistencia del Título en Todas las Páginas', () => {
    cy.visit('/board/refire-forum-ideas');
    cy.get('a.fgb49wv[href="/"]').should('exist'); // Verifica que el enlace es visible
  });

  // Caso de Prueba #34
  it('Verificacion del contenido del footer', () => {
    cy.get('a[href="https://github.com/hoppula/refire-forum"]')
      .should('exist') // Verifica que el enlace existe
      .and('contain.text', 'refire-forum'); // Verifica que el texto del enlace contiene "refire-forum"
  });

  // Caso de Prueba #EXTRA
  it('Encontrar la imagen de perfil especificada', () => {
    cy.visit('/profile/google:102163232356568047221');
    cy.get('img.fdnmg1x[src*="https://lh3.googleusercontent.com/a-/AOh14Gj7tvXGV8VHu_VuIl6Ry7EO4HBucVRzds0ioVON=s96-c"]')
      .should('exist'); // Verifica que la imagen existe
  });


});

/*
Aqui estan las pruebas para realizar intentos de login
Ni uno de estos funciona y lleva a una ventana emergente
*/
describe('Intentos de login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  });

  // Caso de Prueba #1
  it('Iniciar Sesion Fallida con Google', () => {
    cy.get('.Dropdown-toggle').click(); // Abre el menú desplegable
    cy.get('.Dropdown-menu__item').contains('Google').click(); // Intenta hacer clic en "Google"

    //Simular el lanzamiento de una ventana
    cy.window().then(win => {
      cy.stub(win, 'open').throws(new Error('Ventana emergente bloqueada')); // Simula un error al abrir la ventana
    });

    // Verifica que se lanza el error esperado
    cy.window().then(win => {
      expect(win.open).to.throw('Ventana emergente bloqueada'); // Asegúrate de que se lanza el error
    });
  });

  // Caso de Prueba #2
  it('Iniciar Sesion Fallida con Facebook', () => {
    cy.get('.Dropdown-toggle').click(); // Abre el menú desplegable
    cy.get('.Dropdown-menu__item').contains('Facebook').click(); // Intenta hacer clic en "Facebook"

    //Simular el lanzamiento de una ventana
    cy.window().then(win => {
      cy.stub(win, 'open').throws(new Error('Ventana emergente bloqueada'));
    });

    // Verifica que se lanza el error esperado
    cy.window().then(win => {
      expect(win.open).to.throw('Ventana emergente bloqueada'); // Asegúrate de que se lanza el error
    });
  });

  // Caso de Prueba #3
  it('Iniciar Sesion Fallida con Github', () => {
    cy.get('.Dropdown-toggle').click(); // Abre el menú desplegable
    cy.get('.Dropdown-menu__item').contains('Github').click(); // Intenta hacer clic en "Github"

    //Simular el lanzamiento de una ventana
    cy.window().then(win => {
      cy.stub(win, 'open').throws(new Error('Ventana emergente bloqueada'));
    });

    // Verifica que se lanza el error esperado
    cy.window().then(win => {
      expect(win.open).to.throw('Ventana emergente bloqueada'); // Asegúrate de que se lanza el error
    });
  });

  // Caso de Prueba #4
  it('Iniciar Sesion Fallida con Twitter', () => {
    cy.get('.Dropdown-toggle').click(); // Abre el menú desplegable
    cy.get('.Dropdown-menu__item').contains('Twitter').click(); // Intenta hacer clic en "Twitter"

    //Simular el lanzamiento de una ventana
    cy.window().then(win => {
      cy.stub(win, 'open').throws(new Error('Ventana emergente bloqueada'));
    });

    // Verifica que se lanza el error esperado
    cy.window().then(win => {
      expect(win.open).to.throw('Ventana emergente bloqueada'); // Asegúrate de que se lanza el error
    });
  });
});


/*
Se intento otro metodo para la autenticacion, pero sin la configuracion es imposible 
Por lo tanto es imposible realizar alguna prueba que requiera tener un usuario
Es por esto que no hay casos relacionados, porque no hay manera de asumir si estan correctos o no
Ni siquiera se pueden acceder a las funcionalidades
*/
describe('Pruebas que requieren inicio de sesión (fallidas)', () =>{
  beforeEach(() =>{
    cy.visit('http://localhost:4000');

    // Interceptar la llamada a la API de Firebase para simular el inicio de sesión
    cy.intercept('POST', '**/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword*', {
      statusCode: 200,
      body: {
        idToken: 'fake-token',
        email: 'testuser@example.com',
        refreshToken: 'fake-refresh-token',
        expiresIn: '3600',
        localId: 'fake-local-id',
        // Otros datos que tu aplicación pueda necesitar
      },
    }).as('signIn');

    // Opcionalmente, si usas otras llamadas para cargar el estado del usuario, intercepta esas también
    cy.intercept('GET', '**/some-endpoint-to-get-user-info*', {
      statusCode: 200,
      body: {
        uid: 'fake-local-id',
        email: 'testuser@example.com',
        displayName: 'Test User',
        // Otros datos del perfil
      },
    }).as('getUserInfo');

    // Verifica que la aplicación responde correctamente
    cy.wait('@signIn'); // Espera la llamada simulada
    
    // Aquí puedes agregar verificaciones de elementos visibles solo para usuarios autenticados
    cy.get('.user-profile').should('be.visible'); // Verifica que el perfil de usuario esté visible
    cy.get('.welcome-message').should('contain', 'Bienvenido, Test User'); // Ejemplo de otro elemento
  })

  it('', () => {

  });
});