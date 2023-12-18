const Button = ({ children, style, className, role, type, onClick }) => {
  return (
    <button
      style={style}
      className={className}
      role={role}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
