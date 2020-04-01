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
    disp();
    createAccount();
    }
function disp() {
  window.location = "dashboard.html";
  alert("Successfully signed up");
}

function myFilter() {
        document.getElementById("Dropdown").classList.toggle("show");
      }
      
      function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("Dropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }
 function signIn() {
        let userEmail = document.getElementById("email").value;
        let userPassword = document.getElementById("password").value;
    
        let email = ["sam@gmail.com","munanura@gmail.com"];
        let paswrd = ["hhh", "ggg"];
    
        for(let i = 0; i < email.length; i++) {
            if (userEmail == email[i] && userPassword == paswrd[i]) {
                alert("Successfully logged in");
                window.location = "signed in user.html";
                return false;
            } else {
                alert("Invalid email or password");
            }
        }
    }