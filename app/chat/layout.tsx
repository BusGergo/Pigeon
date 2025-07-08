import type { ReactNode } from 'react';
import ChatList from '@/components/chat/ChatList';

function ChatLayout({ children }: { readonly children: ReactNode }) {
	return (
		<div className="flex flex-row w-full">
			<aside className="bg-amber-300 p-4">
				<ChatList />
			</aside>
			<main>{children}</main>
		</div>
	);
}

export default ChatLayout;
