import { getServerSession } from 'next-auth';
import type { ReactNode } from 'react';
import SessionProvider from '../components/auth/SessionProvider';
import { StoreProvider } from './StoreProvider';

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
