function validate() {
    let userName = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (uname.length < 4 ) {
        alert("Invalid Username");
        return false;
    } else if (email.length < 4 ) {
        alert("Invalid email");
        return false;
    } else if (password.length < 6) {
        alert("Password should be aleast 6 characters");
        return false;
    } else {
        return true;
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
                return true;
            } else {
                alert("Invalid email or password");
                return false;
            }
        }
    }
