"use strict";

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("sign-up-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //
  if (usernameValue === "") {
    setErrorFor(username, "username cannot be blank");
  } else if (usernameValue.length > 20 || usernameValue.length < 4) {
    setErrorFor(username, "invalid username");
  } else {
    setSuccessFor(username);
  }

  //
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
  }

  //
  if (passwordValue === "") {
    setErrorFor(password, "Email cannot be blank");
  } else {
    setSuccessFor(password);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
};

//
const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
};

//
