import Link from 'next/link';
import type { Chat } from '@/types/chat';

export default function ChatListItem({ chat }: { chat: Chat }) {
	return (
		<Link href={`/chat/${chat.id}`}>
			<h2>{chat.name}</h2>
		</Link>
	);
}
