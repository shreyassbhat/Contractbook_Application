










firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

    var user = firebase.auth().currentUser;

    

      var email_id = user.email;
      var name = email_id.replace(/[!#$%^&*.@]/g, "");
      console.log(name);
      
   var messagesRef = firebase.database().ref(name+'/' + 'Work');

    }
});