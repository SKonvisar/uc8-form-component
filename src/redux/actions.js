export const UPDATE_FORM = "UPDATE_FORM";

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  field,
  value,
});
