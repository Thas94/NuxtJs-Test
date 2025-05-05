import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyDasV5GJ_6oh9CslF5RBlGYQt85DqFFzrU",
        authDomain: "habitstrackerapp-6520b.firebaseapp.com",
        projectId: "habitstrackerapp-6520b",
        storageBucket: "habitstrackerapp-6520b.firebasestorage.app",
        messagingSenderId: "976033956463",
        appId: "1:976033956463:web:56a002f7d3eef0061cc39a",
        measurementId: "G-WJG416LDBZ"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      return {
        provide: {
            firebaseApp: app,
            db
        }
      }
})