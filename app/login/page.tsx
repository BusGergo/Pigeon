'use client';
import AuthButton from '@/components/ui/AuthButton';
import { signIn } from 'next-auth/react';
import React from 'react';

const Login = () => {
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
};

export default Login;
