'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import LinkRoute from './components/LinkRoute';
import { redirect } from 'next/navigation';
import { RxDashboard } from 'react-icons/rx';
import { PiPowerLight } from 'react-icons/pi';
import Logo from '@/assets/logo.svg';
import TeamIcon from '@/assets/team_icon.svg';
import CalendarIcon from '@/assets/calendar_icon.svg';
import InscriptionIcon from '@/assets/inscription_icon.svg';
import ImageUser from '@/assets/image_user.png';
import UserIcon from '@/assets/user_icon.svg';

export default function Sidebar() {
    function handleLogOut() {
        redirect('/');
    }

    return (
        <main className={styles.sidebarContainer}>
            <Logo className={styles.logo} />

            <span className={styles.titleMenu}>MENU</span>
            <nav className={styles.navigationContainer}>
                <LinkRoute
                    route="/home"
                    icon={<RxDashboard size={15} />}
                    nameRoute="Dashboard"
                />
                <LinkRoute
                    route="/home/eventos"
                    icon={<CalendarIcon />}
                    nameRoute="Eventos"
                />
                <LinkRoute
                    route="/home/equipes"
                    icon={<TeamIcon />}
                    nameRoute="Equipes"
                />
                <LinkRoute
                    route="/home/inscricoes"
                    icon={<InscriptionIcon />}
                    nameRoute="Inscrições"
                />
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

                <LinkRoute
                    route="/home/edituser"
                    icon={<UserIcon />}
                    nameRoute="Alterar dados"
                />

                <button type="button" onClick={handleLogOut}>
                    <PiPowerLight size={15} />
                    <span>Sair</span>
                </button>
            </div>
        </main>
    );
}
