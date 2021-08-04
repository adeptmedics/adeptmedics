// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD2jcWCjka129LjGsoUkNTADmlY9PQP0QY",
  authDomain: "adept-medics.firebaseapp.com",
  databaseURL:
    "https://adept-medics-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adept-medics",
  storageBucket: "adept-medics.appspot.com",
  messagingSenderId: "63849326177",
  appId: "1:63849326177:web:9f95d034c7f06f61206c20",
  measurementId: "G-T8LQ88Y2GK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//   Reference message collection
var messagesRef = firebase.database().ref("contact-requests");
var newsletterRef = firebase.database().ref("newsletter-requests");

// Listen for submit
document.getElementById("enroll-form").addEventListener("submit", submitForm);

// Listen for Newsletter submit
document.getElementById("newsletterBtn").addEventListener("click", newsletterSubmit);

// Submit form
function submitForm(e) {
  e.preventDefault();
  var fullName = getInputValue("fullName");
  var phone = getInputValue("phone");
  var email = getInputValue("email");
  var query = getInputValue("query");
  var today = new Date();

  saveMessage(fullName, phone, email, query, "Sent on " + today);

  alert("Your Message has been Sent Successfully.!!");
}

function newsletterSubmit(e) {
    e.preventDefault();
    var nEmail = getInputValue("newsletterEmail")
    if (nEmail) {
        var today = new Date();
        saveNewsletter(nEmail, "Sent on "+today)
        alert("You've successfully signed up for Adept Medics Newsletter.!!")
    } else {
        alert("Enter a Valid Email ID.!")
    }
}

// Function to get form values
function getInputValue(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullName, phone, email, query, today) {
  var newMessageRef = messagesRef.push();
  // Save message
  newMessageRef.set({
    fullName: fullName,
    phone: phone,
    email: email,
    query: query,
    date: today,
  });
}

function saveNewsletter(email, today) {
    var newNewsletterRef = newsletterRef.push();
    newNewsletterRef.set({
        email: email,
        date: today,
    })
}