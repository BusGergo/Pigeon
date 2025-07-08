import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

export default async function IndexPage() {
	const session = await getServerSession();
	session ? redirect('/chat') : redirect('/login');
}
