// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCJnN5WjzMdwp1uSmQOk_2MFB9LG_84oY",
  authDomain: "ade-portfolio-6e141.firebaseapp.com",
  projectId: "ade-portfolio-6e141",
  storageBucket: "ade-portfolio-6e141.appspot.com",
  messagingSenderId: "99454661604",
  appId: "1:99454661604:web:2735aa9cd47bb788570df1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//get submit button
const submitBtn = document.getElementById("submit");

//add event listener to submit button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //get form values
  const name = document.querySelector(".names").value;
  const email = document.querySelector(".emails").value.toLowerCase();
  const subject = document.querySelector(".subjects").value;
  const message = document.querySelector(".messages").value;
  const id = (Math.random() * 1000 + "ade").toString().replace(".", "");

  //save data to firebase
  set(ref(db, "users/" + id), {
    name: name,
    email: email,
    subject: subject,
    message: message,
  });

  //reset form
  document.querySelector(".contact-form").reset();

  //show alert
  alert("Message sent successfully");
});
