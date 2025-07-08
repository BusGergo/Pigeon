import type { Chat } from './chat';
import type { Message } from './message';

export interface User {
	id: string;
	username: string;
	email?: string;
	image?: string;
	messages: Message[];
	createdAt: string;
	updatedAt: string;
	chats: Chat[];
}
