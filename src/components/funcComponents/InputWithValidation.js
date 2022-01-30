import "./InputWithValidation.css";

import PropTypes from "prop-types";
import React from "react";

const InputWithValidation = (props) => {
	return (
		<div
			className={`input-with-validation__container ${props.classNameContainer} `}
		>
			<input
				className={`input-with-validation 
                ${props.error === "" ? "" : "input-with-validation--error"}
                ${props.classNameInput} `}
				style={props.style}
				type={props.type}
				value={props.value}
				onBlur={props.onBlur}
				onChange={props.onChange}
				onFocus={props.onFocus}
			/>
			<label
				className={`input-with-validation__label 
                input-with-validation
                ${
				// clear label when text is available
				props.value !== ""
					? "input-with-validation__label--not-empty"
					: "input-with-validation__label--empty"
			} 
            ${props.classNameLabel}`}
			>
				{props.placeholder}
			</label>
		</div>
	);
};

InputWithValidation.defaultProps = {
	classNameContainer: "",
	classNameInput: "",
	classNameLabel: "",
	error: "",
	onBlur: () => undefined,
	onChange: () => undefined,
	onFocus: () => undefined,
	placeholder: "",
	style: {},
	type: "text",
	value: "",
};

InputWithValidation.propTypes = {
	classNameContainer: PropTypes.string,
	classNameInput: PropTypes.string,
	classNameLabel: PropTypes.string,
	error: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	style: PropTypes.object,
	type: PropTypes.string,
	value: PropTypes.string,
};

export default InputWithValidation;
