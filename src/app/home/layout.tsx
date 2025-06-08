import type { Metadata } from 'next';
import Sidebar from './components/Sidebar';
import styles from './styles.module.scss';

export const metadata: Metadata = {
    title: 'Home - Tropa Digital',
    description: 'Plataforma de Eventos da Tropa Digital',
    icons: {
        icon: '/logo.svg',
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className={styles.layoutContainer}>
            <Sidebar />
            <div className={styles.contentContainer}>{children}</div>
        </main>
    );
}
