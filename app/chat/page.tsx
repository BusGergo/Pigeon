import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import ChatClient from '@/components/chat/ChatClient';

const Chat = async () => {
	const session = await getServerSession();
	if (!session) redirect('/login');

	return <ChatClient />;
};

export default Chat;
