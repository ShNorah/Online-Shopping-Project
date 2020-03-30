//create account function
function createAccount(){
var uname = document.getElementById("names").value;
var uemail = document.getElementById("emailid").value;
var upassword = document.getElementById("password").value;
var ucpassword = document.getElementById("cpassword").value;

//validations for useremail, username and password
var password_expression = /^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters=/^[A-Za-z]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//conditions to check the validations
if (uname=""){
    alert("please enter your fullnames");
}else if(!letters.test(uname)){
    alert("please enter on characters");

}else if(uemail = ""){
    alert("please enter your email address");
}else if(!filter.test(uemail)){
    alert("your email is invalid")
}else if (upassword =""){
    alert("please enter your password")
}else if(!password_expression.test(upassword)){
    alert("upper case, lower case, special characters and numeric numbers are required in this fileld");
}else if(upassword!=ucpassword){
    alert("the passwords do not match");
}else if(document.getElementById("cpassword").value.length < 6){
    alert("a minimum length of 6 is required");
}else if (document.getElementById("cpassword").value.length > 12){
    alert("a maximum length of 12 is required")
}else {
    alert("create account successful");
}
window.location =" https://shnorah.github.io/Online-Shopping-Project/";

} 

