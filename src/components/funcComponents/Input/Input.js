import "./input.css";

import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      className={`input-base ${props.classNames} `}
      placeholder={props.placeholder}
      style={props.style}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

Input.defaultProps = {
  classNames: "",
  onChange: () => undefined,
  placeholder: "",
  style: {},
  type: "text",
  value: "",
};

Input.propTypes = {
  classNames: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
