// Set cookie function
function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // cookie expiration
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Get cookie function
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Check if user is already logged in using cookies
  $(document).ready(function() {
    var loggedInUser = getCookie("user_email");
  
    if (loggedInUser) {
      alert("Welcome back, " + loggedInUser + "!");
      // Hide login section if the user is already logged in
      $("#login-section").hide();
    }
  });
  
  // When the user clicks submit on the login form
  $("#login-form").submit(function(event) {
    event.preventDefault();  // Prevent form from submitting normally
  
    var email = $("#email").val();
    var password = $("#password").val();
    var rememberMe = $("#remember-me").is(":checked");
  
    // Basic validation (simple check)
    if (email && password) {
      if (rememberMe) {
        setCookie("user_email", email, 7);  // Cookie will expire in 7 days
      }
  
      alert("Welcome, " + email.split('@')[0] + "! You are now logged in.");
      $("#login-error").hide();
      $("#email").val('');
      $("#password").val('');
      $("#login-section").hide();
    } else {
      $("#login-error").show();
    }
  });
  