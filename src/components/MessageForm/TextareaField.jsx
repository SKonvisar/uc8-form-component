export const TextareaField = ({
  name,
  label,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <label className="form-label">
      {label}:
      <textarea
        name={name}
        className="form-textarea"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched && <span className="error">{error}</span>}
    </label>
  );
};
