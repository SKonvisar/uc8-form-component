import { useState, useEffect } from "react";

export const useFormState = ({ initialValues, validators }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      let newErrors = {};

      Object.keys(formData).forEach((key) => {
        const validate = validators[key] ?? (() => null);
        const fieldValue = formData[key];

        const validationError = validate(fieldValue);
        if (validationError) {
          newErrors[key] = validationError;
        }
      });

      setErrors(newErrors);
      setIsValid(Object.keys(newErrors).length === 0);
    };

    validateForm();
  }, [formData, validators, touched]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevState) => ({ ...prevState, [name]: true }));
  };

  return {
    formData,
    setFormData,
    errors,
    touched,
    isValid,
    handleInputChange,
    handleBlur,
  };
};
