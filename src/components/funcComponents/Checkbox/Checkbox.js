import "./Checkbox.css";

import PropTypes from "prop-types";
import React from "react";

const Checkbox = (props) => {
  const onClick = () => {
    props.onClick(!props.checked);
  };

  return (
    <div
      className={`checkbox-base ${props.classNames}`}
      style={props.style}
      onClick={onClick}
    >
      {props.checked ? "X" : ""}
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  classNames: "",
  onClick: () => undefined,
  style: {},
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Checkbox;
