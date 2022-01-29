import { decryptObject, encryptObject } from "../utils/crypto";

const getUsers = () => {
	// decrypt storage of users
	const encryptedUsers = localStorage.getItem("encryptedUsers");

	// if users are not stored, returns empty array
	let users = [];

	if (typeof encryptedUsers !== "string") {
		users = decryptObject(encryptedUsers);
	}

	return users;
};

/**
 * Overwrite users in local storage
 */
const setUsers = (users) => {
	// encrypted storage of users
	localStorage.setItem("encryptedUsers", encryptObject(users));
	// readable storage of users
	localStorage.setItem("readableUsers", JSON.stringify(users));
};

/**
 * If email is not used, save user in db and *return* `res = {}`,
 * otherwise *return* a `res = { errorMessage: '' }`
 */
const addUser = (user) => {
	let users = getUsers();

	let res = {
		errorMessage: undefined,
	};

	// if email is already used
	if (users.find((u) => u.email === user.email) !== undefined) {
		res.errorMessage = "EmailInUse";
	} else {
		// add user
		users.push(user);

		setUsers(users);
	}

	return res;
};

/**
 * If email and/or password are wrong, *return* a `res = { errorMessage: '' }`,
 * otherwise *return* a `res = { user: { ... } }`
 */
const authUser = ({ email, psw }) => {
	// begin query
	let users = getUsers()
		// then find users who satisfy credentials
		.filter((user) => user.email === email && user.password === psw)
		// if some is found,
		// hide password before saving data in variable
		.map((user) => ({ ...user, password: undefined }));

	let res = {
		errorMessage: undefined,
	};

	if (users.length < 1) {
		// no user match
		res.errorMessage = "WrongCredentials";
	} else {
		// one user has been found
		res.user = users[0];
	}

	return res;
};

export { addUser, authUser };
