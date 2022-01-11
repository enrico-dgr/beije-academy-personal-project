import "./Select.css";

import PropTypes from "prop-types";

const Select = (props) => {
  const Option = (opt, i) => {
    return (
      <option
        key={i + "_" + props.name + "_" + opt.value + "_" + opt.text}
        value={opt.value}
      >
        {opt.text}
      </option>
    );
  };

  return (
    <select
      className={`select-base ${props.classNames} `}
      style={props.style}
      name="done"
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map(Option)}
    </select>
  );
};

Select.defaultProps = {
  classNames: "",
  name: "",
  onChange: () => undefined,
  options: [{ value: "", text: "" }],
  style: {},
  value: "",
};

Select.propTypes = {
  classNames: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  style: PropTypes.object,
  value: PropTypes.string,
};

export default Select;
