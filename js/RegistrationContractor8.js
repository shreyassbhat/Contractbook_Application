// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
//  var config = {
//    apiKey: "AIzaSyA-OsXh94uLy7s_qe9TjO5KzwGgwO9-r-E",
//    authDomain: "sih2018-8f87f.firebaseapp.com",
//    databaseURL: "https://sih2018-8f87f.firebaseio.com",
//    projectId: "sih2018-8f87f",
//    storageBucket: "sih2018-8f87f.appspot.com",
//    messagingSenderId: "885370490713"
//  };
//  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('ContractorRegistration');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
//var selectedValue;
//function OnDropDownChange(dropDown) {
//         selectedValue = dropDown.options[dropDown.selectedIndex].value;
//      }




// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
    var repassword = getInputVal('repassword');
    var phone = getInputVal('phone');
    var zip = getInputVal('zip');
  var city = getInputVal('myInput');
  var lic = getInputVal('lic');
    var gst = getInputVal('gst');
    
    var str = lic; 
    console.log(lic);
    console.log(str);
//    var res = str.match(/NHAIGOV/g);
    
    
    var res = str.match(/KA(BK|BN|BR|BG|BL|BD|BJ|CJ|CK|CT|DK|DA|DH|GA|GU|HS|HV|KD|KL|KP|MA|MY|RA|SH|TU|UD|UK)|MH(AH|AK|AM|AU|BI|BH|BU|CH|DH|GA|GO|HI|JG|JN|KO|LA|MC|MU|NG|ND|NB|NS|OS|PA|PU|RG|RT|SN|ST|SI|SO|TH|WR|WS|YTL|PL)/g);

    if(!res)
    {
          alert(" not valid");
        return;
    }
    
    

   var errr; 
    if(errr)
            {
               console.log(errr);
        return; 
            }
    
    console.log(gst.length);
//    if(gst.length != 15)
//        {
//            alert("GST Service Task Number is not Valid");
//            return;
//        }
    
    var pat = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    
    if(pat.test(gst))
        {
            alert("valid no.");
            
        }
    else{
        alert("invalid");
    }
    
    
    
    if(password.length != repassword.length)
        {
            alert("password doest not match");
        }
    
    
    if(phone.length != 10)
        {
            alert("phone No Not Valid");
        }
    
    if(zip.length != 6){
        alert("ZipCode not valid");
    }
//  var district = getInputVal('district');
//  var pincode = getInputVal('pincode');
//  var address = getInputVal('address');


//  var message = getInputVal('message');

  // Save message
  

  // Show alert
  // document.querySelector('.alert').style.display = 'block';
  //
  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
       saveMessage(name ,email, password, repassword,phone,zip, city,lic,gst);
        document.getElementById('contactForm').reset();
        self.location = "Contractor1.html";
   })
 .catch(function (err) {
   // Handle errors
        alert(err);
        return err;
        
        
 });
  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name ,email, password, repassword,phone,zip,city,lic,gst){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
name : name,
    firstname:email,
//    lastname:lastname,
    password : password,

    repassword:repassword,
    phone : phone,
    zip : zip,
    city : city,
    lic : lic,
      gst : gst,
//    education : education,
//    description : description,
//    computer : computer,
//    message:message
  });
}
