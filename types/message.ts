import type { Chat } from './chat';
import type { User } from './user';

export interface Message {
	id: string;
	content: string;
	sender: User;
	senderId: string;
	chat?: Chat;
	chatId?: string;
	timeSent: string;
}
