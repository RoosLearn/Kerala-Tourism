

// Email validation
const email = document.getElementById("form3Example97");
email.addEventListener("input", function () {
  const error = document.getElementById("error1");
  const emailValue = email.value;
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailRegEx.test(emailValue)) {
    error.textContent = "Valid format";
    error.style.color = "green";
  } else {
    error.textContent = "Error";
    error.style.color = "red";
  }
});




// Phone number validation


const phoneField = document.getElementById("phone-number");
const errorMessage = document.getElementById("error-message");

phoneField.addEventListener("input", () => {
  let phoneNum = phoneField.value;

  // Remove any non-digit characters from the phone number
  phoneNum = phoneNum.replace(/\D/g, "");

  // Check if the phone number is exactly 10 digits
  if (phoneNum.length !== 10) {
    errorMessage.textContent = "Phone number should contain exactly 10 digits";
    errorMessage.style.color = "red";
    phoneField.classList.add("error");
    return;
  }

  // Check if the phone number matches one of the allowed formats
  const phoneNumRegex = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
  if (!phoneNumRegex.test(phoneNum)) {
    errorMessage.textContent = "Phone number should be in the format XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX";
    errorMessage.style.color = "red";
    phoneField.classList.add("error");
    return;
  }

  // If the phone number is valid, clear any previous error messages
  errorMessage.textContent = "Valid Format";
  errorMessage.style.color = "green";
  phoneField.classList.remove("error");
});







































// Password validation



const passwordField = document.getElementById("password");
const strengthIndicator = document.getElementById("strength-indicator");

passwordField.addEventListener("input", () => {
  const password = passwordField.value;

  // Check if the password meets the minimum requirements
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password.length >= 8;

  // Calculate the password strength score
  let strength = 0;
  if (hasUppercase) strength++;
  if (hasLowercase) strength++;
  if (hasNumber) strength++;
  if (isLongEnough) strength++;

  // Update the strength indicator color and text
  if (strength === 4) {
    strengthIndicator.style.color = "green";
    strengthIndicator.textContent = "Strong";
  } else if (strength >= 2) {
    strengthIndicator.style.color = "orange";
    strengthIndicator.textContent = "Medium";
  } else {
    strengthIndicator.style.color = "red";
    strengthIndicator.textContent = "Poor";
  }
});









































// Repeat password validation
// const repeatPassword = document.getElementById("form3Example97");
// repeatPassword.addEventListener("input", function () {
//   const error = document.getElementById("error3");
//   const passwordValue = password.value;
//   const repeatPasswordValue = repeatPassword.value;
//   if (passwordValue === repeatPasswordValue) {
//     error.textContent = "Valid format";
//     error.style.color = "green";
//   } else {
//     error.textContent = "Error";
//     error.style.color = "red";
//   }
// });

const passwordFields = document.getElementById("password");
const repeatPasswordField = document.getElementById("repeat-password");
const strengthIndicators = document.getElementById("strength-indicator");
const errorField = document.getElementById("error-messages");

function checkPasswordStrength(password) {
  // Check if the password meets the minimum requirements
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password.length >= 8;

  // Calculate the password strength score
  let strength = 0;
  if (hasUppercase) strength++;
  if (hasLowercase) strength++;
  if (hasNumber) strength++;
  if (isLongEnough) strength++;

  // Return the password strength score
  return strength;
}

function updateStrengthIndicator(strength) {
  // Update the strength indicator color and text
  if (strength === 4) {
    strengthIndicators.style.color = "green";
    strengthIndicators.textContent = "Strong";
  } else if (strength >= 2) {
    strengthIndicators.style.color = "orange";
    strengthIndicators.textContent = "Medium";
  } else {
    strengthIndicators.style.color = "red";
    strengthIndicators.textContent = "Poor";
  }
}

function validatePasswords() {
  const password = passwordFields.value;
  const repeatPassword = repeatPasswordField.value;

  // Check if the passwords match
  if (password !== repeatPassword) {
    errorField.textContent = "Passwords do not match";
    return;
  } else {
    errorField.textContent = "";
  }

  // Check the strength of the password and repeat password
  const passwordStrength = checkPasswordStrength(password);
  const repeatPasswordStrength = checkPasswordStrength(repeatPassword);

  // Update the strength indicator for the password and repeat password
  updateStrengthIndicator(passwordStrength);
  updateStrengthIndicator(repeatPasswordStrength);
}

// Add event listeners for the password and repeat password fields
passwordFields.addEventListener("input", validatePasswords);
repeatPasswordField.addEventListener("input", validatePasswords);
