// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
  



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

    var user = firebase.auth().currentUser;

    

      var email_id = user.email;
      var name = email_id.replace(/[!#$%^&*.@]/g, "");
      console.log(name);
      
   var messagesRef = firebase.database().ref(name);

    }





// Reference messages collection
//var messagesRef = firebase.database().ref(name);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
    var ContractorName = getInputVal('name');
  var Area = getInputVal('work');
  var Zipcode = getInputVal('zip');
  var CommenceDate = getInputVal('datein');
  var Completedate = getInputVal('dateout');
    
    if(!isNaN(name) )
        {
           alert("name not valid"); 
        }
    if(!isNaN(work))
        {
            alert("work not valid");
        }
    if(Zipcode.length != 6)
        {
            alert("Zi Code not valid");
        }
   
    
    
    
    
  

  // Save message
  saveMessage(ContractorName,Area,Zipcode, CommenceDate, Completedate);

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
function saveMessage(ContractorName,Area,Zipcode, CommenceDate, Completedate){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      Area: Area,
      CommenceDate:CommenceDate,
    Completedate:Completedate,
    ContractorName : ContractorName,
      
    Zipcode:Zipcode,
    
      
//    message:message
  });
}
    
    });