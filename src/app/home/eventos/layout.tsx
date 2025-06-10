import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Eventos - Tropa Digital',
    description: 'Plataforma de Eventos da Tropa Digital',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}
