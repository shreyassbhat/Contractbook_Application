// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
  

// Reference messages collection

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

    var user = firebase.auth().currentUser;

    

      var email_id = user.email;
      var name = email_id.replace(/[!#$%^&*.@]/g, "");
      console.log(name);
      
   var messagesRef = firebase.database().ref(name);

    }
    

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
var skillsSelect = document.getElementById("newSkill");
var selectedText = skillsSelect.options[skillsSelect.selectedIndex].text;
    
    
    var skillsSelect1 = document.getElementById("newSkill1");
var selectedText1 = skillsSelect1.options[skillsSelect1.selectedIndex].text;
    
    

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var WorkerName = getInputVal('WorkerName');
//  var Categories = getInputVal('Categories');
  var Expirence = getInputVal('Expirence');
    var Age = getInputVal('Age');
//    var Gender = getInputVal('Gender');
//    var Wages = getInputVal('Wages');
//  var village = getInputVal('village');
//  var state = getInputVal('state');
//  var district = getInputVal('district');
//  var pincode = getInputVal('pincode');
//  var address = getInputVal('address');


//  var message = getInputVal('message');

  // Save message
  saveMessage( WorkerName, selectedText ,Expirence , Age , selectedText1 );

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
function saveMessage(WorkerName, selectedText ,Expirence , Age , selectedText1 ){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
//contact : contact,
    WorkerName:WorkerName,
    selectedText:selectedText,
    Expirence : Expirence,

    Age:Age,
    selectedText1 : selectedText1,
//    Wages : Wages,
//    address : address,
//    selectedValue : selectedValue,
//    education : education,
//    description : description,
//    computer : computer,
//    message:message
  });
}
});