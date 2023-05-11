import UserMock from "../data/userData.js";

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

export const validateSignup = (formData) => {
  const { firstName, lastName, email, password, cpassword } = formData;
  // no empty fields, valid email format, passwords match
  var validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let errorMessages = {
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
    cpasswordError: "", //for both field is empty and passwords do not match
    anyErr: false,
  };

  if (firstName == "")
    errorMessages.firstnameError = "Please enter your first name.";
  if (lastName == "")
    errorMessages.lastnameError = "Please enter your last name.";
  if (email != "") {
    if (!email.match(validEmailRegex))
      errorMessages.emailError = "Please enter a valid email format.";
  } else errorMessages.emailError = "Please enter your email.";
  if (password !== "") {
    if (password !== cpassword)
      errorMessages.cpasswordError = "Passwords do not match.";
  } else {
    errorMessages.passwordError = "Please enter a password.";
    errorMessages.cpasswordError = "Passwords do not match."
  }

  if (
    errorMessages.firstnameError ||
    errorMessages.lastnameError ||
    errorMessages.emailError ||
    errorMessages.passwordError ||
    errorMessages.cpasswordError !== ""
  )
    errorMessages.anyErr = true;
  return errorMessages;
};
