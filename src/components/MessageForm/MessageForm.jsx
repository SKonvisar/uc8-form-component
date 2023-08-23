import React from "react";
import { useDispatch } from "react-redux";

import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";
import { useFormState } from "./useFormState";

import { submitFormAction } from "../../redux/actions";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateMessage,
} from "../../helpers/validators";

import "./MessageForm.css";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  message: "",
};

const validators = {
  first_name: validateFirstName,
  last_name: validateLastName,
  email: validateEmail,
  message: validateMessage,
};

export const MessageForm = () => {
  const {
    formData,
    errors,
    touched,
    isValid,
    handleInputChange,
    handleBlur,
    resetForm,
  } = useFormState({ initialValues, validators });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Send API request with data: ${JSON.stringify(formData, null, 2)}`);
    dispatch(submitFormAction(formData));
    resetForm();
  };

  const submitDisabled = !isValid;

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <InputField
        name="first_name"
        label="First Name"
        type="text"
        value={formData.first_name}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        error={errors.first_name}
        touched={touched.first_name}
      />
      <InputField
        name="last_name"
        label="Last Name"
        type="text"
        value={formData.last_name}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        error={errors.last_name}
        touched={touched.last_name}
      />
      <InputField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
      <TextareaField
        name="message"
        label="Message"
        value={formData.message}
        handleChange={handleInputChange}
        handleBlur={handleBlur}
        error={errors.message}
        touched={touched.message}
      />
      <button
        type="submit"
        className="form-submit-button"
        disabled={submitDisabled}
      >
        Submit
      </button>
    </form>
  );
};
