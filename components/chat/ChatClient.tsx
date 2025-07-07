'use client';
import React from 'react';
import AuthButton from '../ui/AuthButton';
import { signOut } from 'next-auth/react';

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
