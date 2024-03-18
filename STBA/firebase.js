const firebaseConfig = {
  apiKey: "AIzaSyAu8wxZs79sLyQ-gxMfwKo_fTTFHEacvkw",
  authDomain: "student-teacher-appointm-7815e.firebaseapp.com",
  databaseURL: "https://student-teacher-appointm-7815e-default-rtdb.firebaseio.com",
  projectId: "student-teacher-appointm-7815e",
  storageBucket: "student-teacher-appointm-7815e.appspot.com",
  messagingSenderId: "938793624367",
  appId: "1:938793624367:web:835bfd8686da0f7829f7da",
  measurementId: "G-83ZMVXVNXL"
};
// initialize firebase
firebase.initializeApp(firebaseConfig)

//ref for my database
var Student_Teacher_AppointmentDB = firebase.database().ref('Student-Teacher-Appointment');
 
document.getElementById("Student-Teacher-Appointment").addEventListener("submit", submitForm);

function submitForm(event){
  event.preventDefault();

  var name = getElementById('name');
  var username=getElementById('username');
  var password=getElementById('password');

  console.log(name, username, password);
}
const getElementById = (id) =>{
  return document.getElementById(id).value;
};

function toggleForm() {
  var loginForm = document.getElementById("loginForm");
  var signUpForm = document.getElementById("signInForm");

  loginForm.classList.toggle("hidden");
  signUpForm.classList.toggle("hidden");
  
}