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



  function register() {

    var usname = document.getElementById("username").value;
    document.getElementById("tblusername").innerHTML = usname;
  
    var fname = document.getElementById("firstname").value;
    document.getElementById("tblfirstname").innerHTML = fname;
  
    var lname = document.getElementById("lastname").value;
    document.getElementById("tbllastname").innerHTML = lname;
  
    var phnum = document.getElementById("phnumber").value;
    document.getElementById("tblphnumber").innerHTML = phnum;
  
    var email = document.getElementById("email").value;
    document.getElementById("tblemail").innerHTML = email;
  
    var dob = document.getElementById("dob").value;
    document.getElementById("tbldob").innerHTML = dob;
  
    if (document.getElementById('male').checked) {
      gender_male = document.getElementById('male').value;
      document.getElementById("tblgender").innerHTML = gender_male;
    }
  
    if (document.getElementById('female').checked) {
      gender_female = document.getElementById('female').value;
      document.getElementById("tblgender").innerHTML = gender_female;
    }
  }
  
  



