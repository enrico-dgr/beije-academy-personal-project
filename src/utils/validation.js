const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const email = (text) => {
	let err = "";

	if (text.trim() === "") {
		err = "EmptyEmail";
	} else if (!EMAIL_REGEX.test(text)) {
		err = "InvalidEmail";
	}

	return err;
};

const password = (text) => {
	let err = "";

	if (text.trim() === "") {
		err = "EmptyPassword";
	} else if (!PASSWORD_REGEX.test(text)) {
		err = "InvalidPassword";
	}

	return err;
};

const userData = { email, password };

const validation = { userData };

export default validation;
