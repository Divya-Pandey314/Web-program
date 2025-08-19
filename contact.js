// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove, push } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_2RZfs2RwDICnl001-qzazbLh0SDLPvI",
  authDomain: "girlyme-c179d.firebaseapp.com",
  projectId: "girlyme-c179d",
  storageBucket: "girlyme-c179d.firebasestorage.app",
  messagingSenderId: "408533708240",
  appId: "1:408533708240:web:ffbddbd621ccba27f35dd5",
  measurementId: "G-LZCJBNY8MP"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

    
    console.log(db)
  
// Function to write user data to Firebase Realtime Database
// Function to write user data with unique ID
function writeUserData(name, email, subject, message) {
  // Create a reference to 'users' collection
  const usersRef = ref(db, 'user');

  // push() generates a unique key for the new child
  const newUserRef = push(usersRef);

  // set() stores the data at that unique location
  set(newUserRef, {
    name: name,
    email: email,
    subject: subject,
    message: message
  })
  .then(() => {
    console.log("User added successfully with ID:", newUserRef.key);
  })
  .catch((error) => {
    console.error("Error adding user:", error);
  });
}
window.writeUserData = writeUserData; // Example usage to add a user

// Function to read user data from Firebase Realtime Database
function readUserData(){
  const userRef = ref(db, 'user');

  get(userRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot.val());
      });
    });
  }
window.readUserData = readUserData;


function updateUserData(userId, updatedData) {
  const userRef = ref(db, 'user/' + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log('User data updated successfully');
    })
    .catch((error) => {
      console.error('Error updating user data:', error);
    });
  }
  //Example usage;
  window.updateUserData = updateUserData;




  function deleteUserData(userId) {
    const userRef = ref(db, 'user/' + userId);
    remove(userRef)
      .then(() => {
        console.log('User data deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting user data:', error);
      });
  }
  window.deleteUserData = deleteUserData; // Example usage to delete user with ID 1