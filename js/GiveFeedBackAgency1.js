// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCsdP_eRVqXCj1b6pl1HchKOsBa9YPXBUg",
    authDomain: "sih2018-c5f85.firebaseapp.com",
    databaseURL: "https://sih2018-c5f85.firebaseio.com",
    projectId: "sih2018-c5f85",
    storageBucket: "sih2018-c5f85.appspot.com",
    messagingSenderId: "482251589"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('FeedBackToAgency');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var phone = getInputVal('phone');
//  var message = getInputVal('message');
//  var datein = getInputVal('datein');
//  var dateout = getInputVal('dateout');
  var message = getInputVal('message');

  // Save message
  saveMessage(phone , message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    phone: phone,
    message: message,
//    datein:datein,
//    dateout:dateout,
//    message:message
  });
}
