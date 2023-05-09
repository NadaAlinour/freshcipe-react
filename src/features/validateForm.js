import * as userMock from "../data/userMock.json";

// client-side form validations
export const validateLogin = (email, password) => {
  /* empty fields, invalid email format, i think this is good for now (or forever :D) */
  let errorMessages = {
    emailError: "",
    passwordError: "",
    anyErr: false,
  };

  var validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (password == "")
    errorMessages.passwordError = "Please enter your password.";

  if (email != "") {
    if (!email.match(validEmailRegex))
      errorMessages.emailError = "Please enter a valid email format.";
  } else errorMessages.emailError = "Please enter your email.";

  if (errorMessages.emailError || errorMessages.passwordError !== "")
    errorMessages.anyErr = true;

  return errorMessages;
};

// server validation mock (NOT client-side) - login
export const mockValidate = (email, password) => {
  let errorMessages = {
    message: "",
    isValid: true,
  };

  if (email !== userMock.email && password !== userMock.password) {
    errorMessages.message = "Invalid login or password. Please try again.";
    errorMessages.isValid = false;
  }

  return errorMessages;
  

};

export const validateSignup = () => {};
