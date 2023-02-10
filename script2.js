

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
const phone = document.getElementById("form3Example99");
phone.addEventListener("input", function () {
  const error = document.getElementById("error");
  const phoneValue = phone.value;
  const phoneRegEx = /^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}.\d{3}.\d{4}$|^\d{3} \d{3} \d{4}$/;
  if (phoneRegEx.test(phoneValue)) {
    error.textContent = "Valid format";
    error.style.color = "green";
  } else {
    error.textContent = "Error";
    error.style.color = "red";
  }
});

// Password validation
const password = document.getElementById("form3Example97");
password.addEventListener("input", function () {
  const error = document.getElementById("error2");
  const passwordValue = password.value;
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (passwordRegEx.test(passwordValue)) {
    error.textContent = "Strong";
    error.style.color = "green";
  } else if (passwordValue.length >= 8) {
    error.textContent = "Medium";
    error.style.color = "orange";
  } else {
    error.textContent = "Poor";
    error.style.color = "red";
  }
});

// Repeat password validation
const repeatPassword = document.getElementById("form3Example97");
repeatPassword.addEventListener("input", function () {
  const error = document.getElementById("error3");
  const passwordValue = password.value;
  const repeatPasswordValue = repeatPassword.value;
  if (passwordValue === repeatPasswordValue) {
    error.textContent = "Valid format";
    error.style.color = "green";
  } else {
    error.textContent = "Error";
    error.style.color = "red";
  }
});

