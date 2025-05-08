function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled = !isEmailValid;

    const Passwordvalid = isPasswordvalid();
    document.getElementById('login-button').disabled = !isEmailValid || !isPasswordvalid;
  }

  function isEmailValid() {
    const email = document.getElementById('email').value;
    if (!email) {
      return false;
    }
      return validateEmail(email);
    }
  function isPasswordvalid() {
    const password = document.getElementById('password').value;
    if (!password) {
      return false;
    } 
    return true; 
  }

  function validateEmail(email) {
      return /\$+@\$+\.\$/.test(email);
  
  }