import { v4 as uuidv4 } from 'uuid';

export interface User {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	userid: string;
}
export interface Message {
	userId: string;
	timestamp: number;
	msg: string;
}
export const user: User = {
	id: uuidv4(),
	firstname: '',
	lastname: '',
	email: '',
	userid: '',
};
export const message: Message = {
	userId: user.id,
	timestamp: Date.now(),
	msg: '',
};
