import validator from "validator";

export const validateFirstName = (value) => {
  let error = null;

  if (validator.isEmpty(value)) {
    error = "First name is required";
  }

  return error;
};

export const validateLastName = (value) => {
  let error = null;

  if (validator.isEmpty(value)) {
    error = "Last name is required";
  }

  return error;
};

export const validateEmail = (value) => {
  let error = null;

  if (validator.isEmpty(value)) {
    error = "Email is required";
  } else if (!validator.isEmail(value)) {
    error = "Invalid email address";
  }

  return error;
};

export const validateMessage = (value) => {
  let error = null;

  const minChar = 10;

  if (!validator.isLength(value, { min: minChar })) {
    error = `Message should be at least ${minChar} characters`;
  }

  return error;
};
