export const SUBMIT_FORM = "SUBMIT_FORM";

export const submitFormAction = (formData) => {
  return {
    type: SUBMIT_FORM,
    payload: formData,
  };
};
