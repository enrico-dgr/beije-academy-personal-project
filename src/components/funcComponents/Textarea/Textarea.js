import "./Textarea.css";

import PropTypes from "prop-types";

const Textarea = (props) => {
  return (
    <textarea
      className={`textarea-base ${props.classNames} `}
      style={props.style}
      value={props.text}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

Textarea.defaultProps = {
  classNames: "",
  onChange: () => undefined,
  onKeyDown: () => undefined,
  style: {},
  text: "",
};

Textarea.propTypes = {
  classNames: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.string,
};

export default Textarea;
