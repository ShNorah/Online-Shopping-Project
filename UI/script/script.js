//create account function
function createAccount(){
var uname = document.getElementById("names").value;
var uemail = document.getElementById("emailid").value;  
var upassword = document.getElementById("password").value;
var ucpassword = document.getElementById("cpassword").value;

//validations for useremail

function validateEmail(){  
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!validEmail.test(uemail)){
        alert("you have entered an invalid email");
    }
}
//validate userpaname
function validateUsername(){
    let letters = /^[A-Za-z]+$/;
    if (!letters.test(uname)){
         alert("enter alphabet characters only");
    
}
}
//validate user password
function validatePassword(){
    let passs =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if(!passs.test(upassword)){
        alert("upper case, lower case and a special character is required");
    }else if (upassword!=ucpassword){
        alert("passwords dont match");
    }else{
        alert("create account successful");
    window.location.href ="/index.html";
    }
}

}
const myArray =[];
    function addTo(){
        myArray.push(document.getElementById("names").value);
        myArray.push(document.getElementById("emailid").value);
        myArray.push(document.getElementById("password").value);
    
    }

