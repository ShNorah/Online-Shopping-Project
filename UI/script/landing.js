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


function myFilter() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("Input");
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