import "./Registration.css";

import Button from "../../components/funcComponents/Button/Button";
import InputWithValidation from "../../components/funcComponents/InputWithValidation";
import React from "react";
import users from "../../services/users";
import validation from "../../utils/validation";

// Note: keys must be equal to state.data and state.errors keys
// 2 Note: validations must return empty string if input is valid,
// string with error message if input is invalid

const Registration = () => {
	const [state, setState] = React.useState({
		data: { email: "", password: "" },
		errors: { email: "", password: "" },
	});

	const setValue = (key, value) => {
		let newState = Object.assign({}, state);
		// update value at `key` property
		newState.data[key] = value;

		setState(newState);
	};

	const validate = (key) => () => {
		let newState = Object.assign({}, state);
		// validate
		newState.errors[key] = validation.userData[key](newState.data[key]);

		setState(newState);
	};

	const resetValidate = (key) => () => {
		let newState = Object.assign({}, state);
		// validate
		newState.errors[key] = "";

		setState(newState);
	};

	const validateAll = () => {
		let newState = Object.assign({}, state);
		let isThereError = false;
		for (const key in newState.data) {
			if (
				Object.hasOwnProperty.call(newState.data, key) &&
				Object.hasOwnProperty.call(newState.errors, key) &&
				Object.hasOwnProperty.call(validation.userData, key)
			) {
				newState.errors[key] = validation.userData[key](
					newState.data[key]
				);

				if (newState.errors[key] !== "") {
					isThereError = true;
				}
			}
		}

		return { isThereError, newState };
	};

	const onChangeEmail = (e) => setValue("email", e.target.value);

	const onChangePsw = (e) => setValue("password", e.target.value);

	const onClick = (e) => {
		e.preventDefault();

		const validation = validateAll();

		// if no validation error occurred, try sign up
		if (!validation.isThereError) {
			// for now the only possible error in db is email already used
			// newState.errors.email = users.registerUser(
			// 	state.data
			// ).errorMessage;

			if (validation.newState.errors.email !== "") {
				validation.isThereError = true;
			}
		}

		// TODO: redirect

		setState(validation.newState);
	};

	return (
		<div className="registration-form-wrapper">
			<form className="registration-form">
				<h1>Registration</h1>
				<InputWithValidation
					error={state.errors.email}
					placeholder={"email"}
					type={"email"}
					value={state.data.email}
					onBlur={validate("email")}
					onChange={onChangeEmail}
					onFocus={resetValidate("email")}
				/>
				<InputWithValidation
					error={state.errors.password}
					placeholder={"password"}
					type={"password"}
					value={state.data.password}
					onBlur={validate("password")}
					onChange={onChangePsw}
					onFocus={resetValidate("password")}
				/>
				<Button
					classNames={"registration-form__submit"}
					text={"Sign Up"}
					onClick={onClick}
				/>
			</form>
		</div>
	);
};

export default Registration;
