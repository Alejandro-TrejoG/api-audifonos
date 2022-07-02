// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGdZdUWlCB3d0xuugHIkJR98rrS1qME0",
  authDomain: "api-audifonos.firebaseapp.com",
  projectId: "api-audifonos",
  storageBucket: "api-audifonos.appspot.com",
  messagingSenderId: "845246462385",
  appId: "1:845246462385:web:b873cac42cf3a811bda590",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class AudifonosService {
  async getDataUsers() {
    try {
      const usuarios = collection(db, "usuarios");
      const response = await getDocs(usuarios);
      const ids = response.docs.map((doc) => doc.id);
      const data = response.docs.map((doc) => doc.data());
      let result = [];
      for (let i = 0; i < data.length; i++) {
        result.push({ id: ids[i], ...data[i] });
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getDataAudifonos(id) {
    try {
      const audifonos = collection(db, "audifonos");
      const response = await getDocs(audifonos);
      const ids = response.docs.map((doc) => doc.id);
      const data = response.docs.map((doc) => doc.data());
      let result = [];
      for (let i = 0; i < data.length; i++) {
        result.push({ id: ids[i], ...data[i] });
        if (data[i].usuario != id) {
          result.splice(i, 1);
        }
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async registerUser(body) {
    try {
      const usuarios = collection(db, "usuarios");
      await addDoc(usuarios, body);
    } catch (error) {
      throw error;
    }
  }

  async registerAudifonos(body) {
    try {
      const audifonos = collection(db, "audifonos");
      await addDoc(audifonos, body);
    } catch (error) {
      throw error;
    }
  }

  async updateAudifonos(id, body) {
    try {
      console.log(body);
      const audifonos = doc(db, "audifonos", id);
      await updateDoc(audifonos, body);
    } catch (error) {
      throw error;
    }
  }

  async deleteAudifonos(id) {
    try {
      const audifonos = doc(db, "audifonos", id);
      await deleteDoc(audifonos);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AudifonosService;
