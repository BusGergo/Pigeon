import type { Message } from './message';
import type { User } from './user';

export interface Chat {
	id: string;
	name?: string;
	isGroup: boolean;
	users: User[];
	messages: Message[];
	createdAt: string;
	updatedAt: string;
}
