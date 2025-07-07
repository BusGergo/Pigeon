'use client';
import { signOut } from 'next-auth/react';
import AuthButton from '../ui/AuthButton';

function ChatClient() {
	return (
		<div>
			<AuthButton
				onClick={() => {
					signOut({ callbackUrl: '/login' });
				}}
			>
				Sign Out
			</AuthButton>
		</div>
	);
}

export default ChatClient;
