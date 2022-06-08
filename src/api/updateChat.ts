import axios from 'axios';
import fs from 'fs';
import 'dotenv/config'
const apiKey = process.env.API_KEY
const data = JSON.stringify({
	users: {
		user: {
			id: 1,
			firstname: 'admin',
			lastname: 'account',
			email: '',
			userId: 1,
		},
	},
	message: {
		user: {
			userId: '',
			msg: '',
			timestamp: Date.now(),
		},
	},
});

const config = {
	method: 'PUT',
	url: 'https://api.jsonstorage.net/v1/json/45688467-5bcf-47d8-856a-30c88f11d668/98a6aa63-1284-415e-9098-b6f46603a56c?apiKey=f5332669-c121-4e21-a148-77df0aaaed84',
	headers: {
		Authorization: `Bearer ${apiKey}`,
		'Content-Type': 'application/json',
	},
	data: data,
};

const api = axios.create({});
export const updatedDB = api(config)
	.then(function (response) {
		const data = response.data;
		console.log(data);
		const jsonData = JSON.stringify(data);
		fs.writeFileSync('db.json', jsonData);
	})
	.catch(function (err) {
		console.error(err);
	});
