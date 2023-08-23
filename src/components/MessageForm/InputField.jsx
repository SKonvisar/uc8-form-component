export const InputField = ({
  name,
  label,
  type,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
}) => {
  return (
    <label className="form-label">
      {label}:
      <input
        type={type}
        name={name}
        className="form-input"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && touched && <span className="error">{error}</span>}
    </label>
  );
};
