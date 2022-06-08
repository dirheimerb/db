import file from '../data/db.json';

const parsedData = JSON.parse(JSON.stringify(file));

console.log(parsedData);

export const { users } = parsedData;

interface User {
	users: {
		user: {
			id: number;
			firstname: string;
			lastname: string;
			email: string;
			updatedAt: any;
		};
	};
}

const id = parsedData.users.user.id;
const firstname = parsedData.users.user.firstname;
const lastname = parsedData.users.user.lastname;
const email = parsedData.users.user.email;

console.log(id, firstname, lastname, email);
export const u = [id, firstname, lastname, email];
console.log(u);

let user: User = {
	users: {
		user: {
			id: 0,
			firstname: '',
			lastname: '',
			email: '',
			updatedAt: '',
		},
	},
};
let stringU = JSON.stringify(user);
export function updateUser(u: any) {
	let stringUser = stringU;
	let use = JSON.stringify(u);
	for (stringUser in parsedData) {
		if (user.users.user.firstname !== parsedData.users.user.firstName) {
			user.users.user.firstname = parsedData.users.user.firsname;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.lastname !== parsedData.users.user.lastName) {
			user.users.user.lastname = parsedData.users.user.lastname;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.id !== parsedData.users.user.id) {
			user.users.user.id = parsedData.users.user.id;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.email !== parsedData.users.user.email) {
			user.users.user.email = parsedData.users.user.email;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
	}
	for (use in parsedData) {
		if (user.users.user.firstname !== parsedData.users.user.firstName) {
			user.users.user.firstname = parsedData.users.user.firsname;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.lastname !== parsedData.users.user.lastName) {
			user.users.user.lastname = parsedData.users.user.lastname;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.id !== parsedData.users.user.id) {
			user.users.user.id = parsedData.users.user.id;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
		if (user.users.user.email !== parsedData.users.user.email) {
			user.users.user.email = parsedData.users.user.email;
			user.users.user.updatedAt = Date.now().toLocaleString;
		}
	}
}
