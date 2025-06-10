import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import { Toaster } from 'sonner';

const roboto = Roboto({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Login - Tropa Digital',
    description: 'Plataforma de Eventos da Tropa Digital',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <Toaster position="top-right" richColors />
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
