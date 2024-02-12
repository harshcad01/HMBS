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


function updateRealTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.toDateString();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;


  document.getElementById("show-time").innerHTML = hours + ":" + minutes + ":" + seconds + " on " + day ;
}
setInterval(updateRealTime, 1000);
updateRealTime();

 // Add custom JavaScript logic here
 $(document).ready(function() {
  // Search functionality
  $('#searchInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('.card-body > div').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});