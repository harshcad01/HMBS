function togglePassword() {
    var passwordInput = document.getElementById("pass");
    var confirmPasswordInput = document.getElementById("conpass");
    var toggleCheckbox = document.getElementById("check");

    // Check if the checkbox is checked
    if (toggleCheckbox.checked) {
      // If checked, change the type attribute to "text" for both password fields
      passwordInput.type = "text";
      confirmPasswordInput.type = "text";
    } else {
      // If not checked, change it back to "password" for both password fields
      passwordInput.type = "password";
      confirmPasswordInput.type = "password";
    }
  }




  function registration(event){
    event.preventDefault();

    var uname = document.getElementsByName("username").value;
    var fname = document.getElementsByName("firstname").value;
    var lname = document.getElementsByName("lastname").value;
    var phnumber = document.getElementsByName("phone").value;
    var email = document.getElementsByName("email").value;

  }

  function register(){
    var uname = document.getElementsByName("username").value;
    var fname = document.getElementsByName("firstname").value;
    var lname = document.getElementsByName("lastname").value;
    var phnumber = document.getElementsByName("phone").value;
    var email = document.getElementsByName("email").value;

    uname=document.getElementById("username").innerHTML;
    fname=document.getElementById("firstname").innerHTML;
    lname=document.getElementById("lastname").innerHTML;
    phnumber=document.getElementById("phnumber").innerHTML;
    email=document.getElementById("email").innerHTML;

  }




