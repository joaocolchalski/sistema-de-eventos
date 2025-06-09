'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ComponentProps {
    route: string;
    icon: any;
    nameRoute: string;
}

export default function LinkRoute({ route, icon, nameRoute }: ComponentProps) {
    const pathname = usePathname();

    return (
        <Link
            href={route}
            className={`${styles.link} ${
                pathname === route ? styles.actualRoute : ''
            }`}
        >
            {icon}
            <span>{nameRoute}</span>
        </Link>
    );
}
