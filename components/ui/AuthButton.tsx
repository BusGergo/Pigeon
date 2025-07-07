import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'default' | 'outline' | 'destructive';
};

const baseStyles =
	'px-4 py-2 rounded font-medium transition-colors focus:outline-none';
const variants = {
	default: 'bg-blue-600 text-white hover:bg-blue-700',
	outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
	destructive: 'bg-red-600 text-white hover:bg-red-700',
};

const AuthButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className = '', variant = 'default', ...props }, ref) => {
		const combined = `${baseStyles} ${variants[variant]} ${className}`;
		return (
			<button ref={ref} className={combined} {...props}>
				{children}
			</button>
		);
	},
);

AuthButton.displayName = 'Button';

export default AuthButton;
