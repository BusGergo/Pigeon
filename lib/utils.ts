import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatTimeStamp(date: string) {
	const now = new Date();
	const target = new Date(date);

	const isToday =
		now.getFullYear() === target.getFullYear() &&
		now.getMonth() === target.getMonth() &&
		now.getDate() === target.getDate();

	if (!isToday) {
		return target.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	} else {
		return target.toLocaleTimeString('hu-HU', {
			hour: 'numeric',
			minute: '2-digit',
		});
	}
}
