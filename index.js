<<<<<<< HEAD
<link rel="stylesheet" href="index.css" />
=======
function validateFields() {
  toggleButtonsDisable();
  toggleEmailErros();
}
function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErros() {
  const email = document.getElementById("email").value;
  if (!email) {
    document.getElementById("email-required-error").style.display = "block";
  } else {
    document.getElementById("email-required-error").style.display = "none";
  }

  if (validateEmail(email)) {
    document.getElementById("email-invalid-error").style.display = "none";
  } else {
    document.getElementById("email-required-error").style.display = "block";
  }
}

function togglePasswordErrors() {
  const password = document.getElementById("password").value;
  if (!password) {
    document.getElementById("password-required-error").style.display = "block";
  } else {
    document.getElementById("password-required-error").style.display = "none";
  }
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  document.getElementById("recover-password-button").disabled = !isEmailValid;

  const Passwordvalid = isPasswordvalid();
  document.getElementById("login-button").disabled =
    !isEmailValid || !isPasswordvalid;
}

function isPasswordvalid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\$+@\$+\.\$/.test(email);
}
>>>>>>> 87f8899 (Aula 05)
