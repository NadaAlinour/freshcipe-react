import UserMock from "../data/userData.js";

const validateEmailFormat = (email) => {
  var validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validEmailRegex)) return false;

  return true;
};

export const validateLogin = (identifier, password) => {
  let errorFlags = {
    identifierError: false,
    passwordError: false,
  };

  if (identifier === "") errorFlags.identifierError = true;
  if (password === "") errorFlags.passwordError = true;

  

  return errorFlags;
};

// server validation mock (NOT client-side) - login
//will change a bit when we actually send req to server
export const mockValidate = (email, password) => {
  let errorMessages = {
    message: "",
    isValid: true,
  };

  if (email !== UserMock.email || password !== UserMock.password) {
    errorMessages.message = "Invalid login or password. Please try again.";
    errorMessages.isValid = false;
  }

  return errorMessages;
};


export const validateSignup = (username, email, password, phone) => {
  let errorFlags = {
    usernameError: false,
    emailError: false,
    passwordError: false,
    isNotValidEmail: false,
  };

  if (username === "") errorFlags.lastNameError = true;
  if (email === "") {
    errorFlags.emailError = true;
  } else {
    const isValidEmailFormat = validateEmailFormat(email);
    if (isValidEmailFormat === false) errorFlags.isNotValidEmail = true;
  }

  if (password === "") errorFlags.passwordError = true;
  if (phone === "") errorFlags.phone = true;

  return errorFlags;
};
