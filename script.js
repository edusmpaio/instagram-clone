const inputEmail = document.querySelector(".email-input");
const inputPassword = document.querySelector(".password-input");
const logInButton = document.querySelector(".login-button");

inputEmail.addEventListener("keyup", checkInputs);
inputPassword.addEventListener("keyup", checkInputs);

function checkInputs() {
  if (inputEmail.value.length > 0 && inputPassword.value.length > 5) {
    logInButton.removeAttribute("disabled");
  } else {
    logInButton.setAttribute("disabled", "disabled");
  }
}
