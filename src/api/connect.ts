import axios from 'axios';
import fs from 'fs';
import 'dotenv/config';

const apiKey = process.env.API_KEY;

const api = axios.create({});

export const config = {
	method: 'GET',
	url: 'https://api.jsonstorage.net/v1/json/45688467-5bcf-47d8-856a-30c88f11d668/98a6aa63-1284-415e-9098-b6f46603a56c',
	headers: {
		Authorization: `Bearer ${apiKey}`,
	},
};

export const getDB = api(config)
	.then(function (response) {
		const data = response.data;
		console.log(data);
		const jsonData = JSON.stringify(data);
		fs.writeFileSync('db.json', jsonData);
	})
	.catch(function (err) {
		console.error(err);
	});
