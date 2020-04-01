function signIn() {
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    let email = ["sam@gmail.com","munanura@gmail.com"];
    let paswrd = ["hhh", "ggg"];

    for(let i = 0; i < email.length; i++) {
        if (userEmail == email[i] && userPassword == paswrd[i]) {
            alert("Successfully logged in");
            window.location = "dashboard.html";
            return false;
        } else {
            alert("Invalid email or password");
        }
    }
}