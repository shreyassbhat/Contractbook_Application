// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-OsXh94uLy7s_qe9TjO5KzwGgwO9-r-E",
    authDomain: "sih2018-8f87f.firebaseapp.com",
    databaseURL: "https://sih2018-8f87f.firebaseio.com",
    projectId: "sih2018-8f87f",
    storageBucket: "sih2018-8f87f.appspot.com",
    messagingSenderId: "885370490713"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contacts2');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
var selectedValue;
function OnDropDownChange(dropDown) {
         selectedValue = dropDown.options[dropDown.selectedIndex].value;
      }

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var contact = getInputVal('contact');
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
    var education = getInputVal('education');
    var computer = getInputVal('computer');
    var description = getInputVal('description');
  var village = getInputVal('village');
  var state = getInputVal('state');
  var district = getInputVal('district');
  var pincode = getInputVal('pincode');
  var address = getInputVal('address');


//  var message = getInputVal('message');

  // Save message
  saveMessage(contact ,firstname, lastname, village,state,district,pincode ,address,selectedValue,education,description,computer);

  // Show alert
  // document.querySelector('.alert').style.display = 'block';
  //
  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(contact ,firstname, lastname, village,state,district,pincode ,address,selectedValue, education,description,computer){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
contact : contact,
    firstname:firstname,
    lastname:lastname,
    village : village,

    state:state,
    district : district,
    pincode : pincode,
    address : address,
    selectedValue : selectedValue,
    education : education,
    description : description,
    computer : computer,
//    message:message
  });
}
