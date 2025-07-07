import ChatClient from '@/components/chat/ChatClient';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const Chat = async () => {
	const session = await getServerSession();
	if (!session) redirect('/login');

	return <ChatClient />;
};

export default Chat;
