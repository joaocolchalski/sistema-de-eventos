'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { PiPowerLight } from 'react-icons/pi';
import Logo from '@/assets/logo.svg';
import TeamIcon from '@/assets/team_icon.svg';
import CalendarIcon from '@/assets/calendar_icon.svg';
import InscriptionIcon from '@/assets/inscription_icon.svg';
import ImageUser from '@/assets/image_user.png';
import UserIcon from '@/assets/user_icon.svg';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    function handleLogOut() {
        router.push('/');
    }

    return (
        <main className={styles.sidebarContainer}>
            <Logo className={styles.logo} />

            <span className={styles.titleMenu}>MENU</span>
            <nav className={styles.navigationContainer}>
                <Link
                    href={'/home'}
                    className={`${
                        pathname === '/home' ? styles.actualRoute : ''
                    }`}
                >
                    <RxDashboard size={15} />
                    <span>Dashboard</span>
                </Link>
                <Link
                    href={'/home/eventos'}
                    className={`${
                        pathname === '/home/eventos' ? styles.actualRoute : ''
                    }`}
                >
                    <CalendarIcon />
                    <span>Eventos</span>
                </Link>
                <Link
                    href={'/home/equipes'}
                    className={`${
                        pathname === '/home/equipes' ? styles.actualRoute : ''
                    }`}
                >
                    <TeamIcon />
                    <span>Equipes</span>
                </Link>
                <Link
                    href={'/home/inscricoes'}
                    className={`${
                        pathname === '/home/inscricoes'
                            ? styles.actualRoute
                            : ''
                    }`}
                >
                    <InscriptionIcon />
                    <span>Inscrições</span>
                </Link>
            </nav>

            <div className={styles.divider}></div>

            <div className={styles.userContainer}>
                <div className={styles.infosUserContainer}>
                    <Image
                        src={ImageUser}
                        alt="Imagem do Usuário"
                        quality={100}
                        priority={true}
                        className={styles.imageUser}
                    />

                    <div className={styles.infosUser}>
                        <span className={styles.nameUser}>Kaique Steck</span>
                        <span className={styles.positionUser}>
                            Administrador
                        </span>
                    </div>
                </div>

                <Link
                    href={'/home/edituser'}
                    className={`${
                        pathname === '/home/edituser' ? styles.actualRoute : ''
                    }`}
                >
                    <UserIcon />
                    <span>Alterar dados</span>
                </Link>

                <button type="button" onClick={handleLogOut}>
                    <PiPowerLight size={15} />
                    <span>Sair</span>
                </button>
            </div>
        </main>
    );
}
