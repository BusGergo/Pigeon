import Link from 'next/link';
import { formatTimeStamp } from '@/lib/utils';
import type { Chat } from '@/types/chat';

export default function ChatListItem({ chat }: { chat: Chat }) {
	const formattedDate = formatTimeStamp(chat.updatedAt);

	return (
		<div className="border-2 rounded-md p-3">
			<Link href={`/chat/${chat.id}`}>
				<h2>{chat.name}</h2>
				<h2>{formattedDate}</h2>
			</Link>
		</div>
	);
}
