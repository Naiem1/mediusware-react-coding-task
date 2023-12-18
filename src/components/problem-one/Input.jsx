const Input = ({
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  id,
  required,
  ariaDescribedby,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      aria-describedby={ariaDescribedby}
      id={id}
    />
  );
};

export default Input;
