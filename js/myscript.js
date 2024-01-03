function togglePassword() {
    var passwordInput = document.getElementById("pass");
    var confirmPasswordInput = document.getElementById("conpass");
    var toggleCheckbox = document.getElementById("check");
    var toggleCheckbox1 = document.getElementById("check1");

    // Check if the checkbox is checked
    if (toggleCheckbox.checked) {
      // If checked, change the type attribute to "text" for both password fields
      passwordInput.type = "text";
    } else {
      // If not checked, change it back to "password" for both password fields
      passwordInput.type = "password";
    }


  if (toggleCheckbox1.checked) {
    // If checked, change the type attribute to "text" for both password fields
    confirmPasswordInput.type = "text";
  } else {
    // If not checked, change it back to "password" for both password fields
    confirmPasswordInput.type = "password";
  }
}