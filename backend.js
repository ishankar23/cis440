    
    // fire up database 
    console.log("STARTING DB CONNECTION");
    // Your web app's Firebase configuration
    firebase.initializeApp({
    apiKey: "AIzaSyBHPV6k7TkSCmRvu3aPnaExWZZaaBQuY6g",
    authDomain: "cis440-capstone.firebaseapp.com",
    projectId: "cis440-capstone",
    storageBucket: "cis440-capstone.appspot.com",
    messagingSenderId: "949879801088",
    appId: "1:949879801088:web:9df9adc21bb46f2f195fe5"
    });
    console.log("INITIALIZED FIREBASE");

    // Initialize Database
    var db = firebase.firestore();


    var pass_length = 4;



    // create users to add to db 
    function writeUserData(uName, pWord) {
            var successful; 
            if (uName != null && pWord.length >= pass_length) {
            db.collection("users").add({
            username: uName,
            password: pWord,
            role: "user"
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    window.location.replace("./rate.html"); 
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            }  
    }
    
    
    
    function readLogin(user, pass) {
        var verified;  
        var curr_user;
        var not_null;   
        var credentials = document.getElementById('loginForm') || null; 
        if(credentials) {
        db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.get("username") == user) {
                verified = true;
            }

            if (user != null && pass != null) {
                not_null = true; 
                
            }

            if (doc.get("password") == pass && verified == true) {
                curr_user = true; 
            
            {
                console.log(doc.id);
                if (doc.get("username") == user && doc.get("password") == pass && user != null && pass != null) 
                {
                    window.location.replace("rate.html?uid=" + doc.id);
                }
                 
                
            
            }}
            
            // changing to error page too quickly! need to figure out how to make it wait
            /* else {
                window.location.href = "loginError.html";
            } */
        

        });
        if (not_null == true) {
            if (verified) {
                console.log("Correct user.")
                if (pass.length >= pass_length && !curr_user) {
                    window.location.href = "loginError.html"; 
            }
            
            
            
        }}
    });
    
    }
    
    
    }

function addABathroom() {
    // after clicking add 
    document.getElementById("add_message").innerHTML =
    '<div>Add Message<br>Title: <input type="text"><br>Text: <input type="text" id="message"><br><br></div>';
    }
