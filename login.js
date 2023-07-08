const firebaseConfig = {
  apiKey: "AIzaSyDZN6BcXe19RtUxIPPcqp_bsOh7AgtwY7o",
  authDomain: "minorproject-5c3c1.firebaseapp.com",
  databaseURL: "https://minorproject-5c3c1-default-rtdb.firebaseio.com",
  projectId: "minorproject-5c3c1",
  storageBucket: "minorproject-5c3c1.appspot.com",
  messagingSenderId: "291923781111",
  appId: "1:291923781111:web:8b1d6374770f9827473af2"
};

  //initilize
  firebase.initializeApp(firebaseConfig);
 const contactFormDB= firebase.database().ref('MinorProject')
 document.getElementById("contactForm").addEventListener("submit", submitForm);
 
 function submitForm(e) {
    e.preventDefault();
 
    var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

 }


 const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };