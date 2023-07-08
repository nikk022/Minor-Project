const firebaseConfig = {
    apiKey: "AIzaSyDZN6BcXe19RtUxIPPcqp_bsOh7AgtwY7o",
    authDomain: "minorproject-5c3c1.firebaseapp.com",
    databaseURL: "https://minorproject-5c3c1-default-rtdb.firebaseio.com",
    projectId: "minorproject-5c3c1",
    storageBucket: "minorproject-5c3c1.appspot.com",
    messagingSenderId: "291923781111",
    appId: "1:291923781111:web:9262ecbcc4eeeca3473af2"
  };
  firebase.initializeApp(firebaseConfig);

  const contactFormDB= firebase.database().ref('MinorProject')
  document.getElementById(" registerForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
     e.preventDefault();
  
     var firstname = getElementVal("firstname");
     var lastname = getElementVal("lastname");
     var username = getElementVal("username");


   var emailid = getElementVal("emailid");
   var password = getElementVal("passsword");

   //var msgContent = getElementVal("msgContent");
 
   saveMessages(firstname,lastname,username, emailid, password);
 
  }
  const saveMessages = (firstname,lastname,username, emailid, password) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
    //   name: name,
    //   emailid: emailid,
    //   msgContent: msgContent,
      firstname:firstname,
      lastname:lastname,
      username:username,
      emailid:emailid,
      password:password,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };