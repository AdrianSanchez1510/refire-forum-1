// firebaseMock.js
import * as firebase from 'firebase/app';
import 'firebase/auth'; // Si estás usando autenticación
import 'firebase/firestore'; // Si estás usando Firestore
import { MockFirebase } from 'firebase-mock';

const mockFirebase = new MockFirebase();

const mockAuth = mockFirebase.auth();
const mockFirestore = mockFirebase.firestore();

mockAuth.autoFlush(); // Esto permite que las llamadas a la API se resuelvan inmediatamente

// Simular el usuario autenticado
const user = {
  uid: 'test-uid',
  email: 'testuser@example.com',
  displayName: 'Test User',
};

mockAuth.signInWithEmailAndPassword = jest.fn(() =>
  Promise.resolve({
    user: { ...user },
  })
);

mockAuth.currentUser = {
  ...user,
};

export { mockFirebase, mockAuth, mockFirestore };
