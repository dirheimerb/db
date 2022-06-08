import { getDB } from 'api/connect';
import { User, user } from 'api/data.modal';
import { updateUser } from 'api/readDB';
import { updatedDB } from 'api/update';
import file from '../data/db.json';

const data = JSON.parse(JSON.stringify(file));
console.log(data);
const db = getDB;
const u: User = user;
const updateU = updateUser;
const updateDB = updatedDB;

db.then(function (response) {
	const data = response;
	return data;
});

updateDB.then(function (response) {
	const updatedData = response;
	return updatedData;
});

const use: User = {
	id: u.id,
	email: u.email,
	firstname: u.firstname,
	lastname: u.lastname,
	userid: u.userid,
};

const check = updateU(use);
console.log(check);
