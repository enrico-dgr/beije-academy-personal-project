import "./Modal.css";

import PropTypes from "prop-types";
import React from "react";

const Modal = (props) => {
  return (
    <div className={"modal-base__container"}>
      <div className={`modal-base ${props.classNames}`} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  classNames: "",
  style: {},
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  style: PropTypes.object,
};

export default Modal;
