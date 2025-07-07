import type { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import { getServerSession } from 'next-auth';
import SessionProvider from '../components/auth/SessionProvider';

import './styles/globals.css';
import styles from './styles/layout.module.css';

interface Props {
	readonly children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
	const session = await getServerSession();

	return (
		<StoreProvider>
			<html lang="en">
				<body>
					<section className={styles.container}>
						<SessionProvider session={session}>
							<main className={styles.main}>{children}</main>
						</SessionProvider>
					</section>
				</body>
			</html>
		</StoreProvider>
	);
}
