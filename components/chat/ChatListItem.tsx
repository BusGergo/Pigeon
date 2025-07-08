import type { Chat } from '@/types/chat';
import Link from 'next/link';

function ChatListItem({ chat }: { chat: Chat }) {
	return (
		<Link href={`/chat/${chat.id}`}>
			<h2>{chat.name}</h2>
		</Link>
	);
}

export default ChatListItem;
