'use client';
import { signIn } from 'next-auth/react';
import AuthButton from '@/components/ui/AuthButton';

function Login() {
	return (
		<div>
			<AuthButton
				onClick={() => {
					signIn('github', { callbackUrl: '/chat' });
				}}
			>
				Sign in with GitHub
			</AuthButton>
		</div>
	);
}

export default Login;
