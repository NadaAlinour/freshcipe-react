import { body } from "express-validator";

// validate data (initial)
const emailErr = "must have valid format.";
const passwordErr = "must be at least 8 characters long.";
const requiredErr = "required.";

export const validateUser = [
  body("username").trim().notEmpty().withMessage(`Username is ${requiredErr}`),
  body("email").trim().isEmail().withMessage(`Email ${emailErr}`),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage(`Password ${passwordErr}`),
  body("phone").trim(),
];

