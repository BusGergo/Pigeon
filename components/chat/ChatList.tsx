'use client';
import { useEffect, useState } from 'react';
import type { Chat } from '@/types/chat';
import ChatListItem from './ChatListItem';

export default function ChatList() {
	const [chats, setChats] = useState<Chat[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchChats() {
			setLoading(true);
			setError(null);
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/chats`,
					{
						method: 'GET',
					},
				);

				console.log(res);

				if (!res.ok) {
					throw new Error('Failed to get chat list');
				}

				const data = await res.json();
				setChats(data);
			} catch (err: any) {
				setError(err.message || 'Unknown error');
			} finally {
				setLoading(false);
			}
		}

		fetchChats();
	}, []);

	if (loading) return <p>Loading chats...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<ul>
			{chats.map((chat) => (
				<ChatListItem chat={chat} key={chat.id} />
			))}
		</ul>
	);
}
