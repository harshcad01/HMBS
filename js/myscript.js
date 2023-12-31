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