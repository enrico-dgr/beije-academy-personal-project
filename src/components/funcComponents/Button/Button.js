import "./Button.css";

import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      className={`button-base ${props.classNames} `}
      style={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  classNames: "",
  style: {},
};

Button.propTypes = {
  classNames: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default Button;
