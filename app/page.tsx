import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function IndexPage() {
	const session = await getServerSession();
	session ? redirect('/chat') : redirect('/login');
}
