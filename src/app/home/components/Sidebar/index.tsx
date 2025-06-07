import Image from 'next/image';
import styles from './styles.module.scss';
import Logo from '/public/logo.svg';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import CalendarIcon from '/public/calendar_icon.svg';
import TeamIcon from '/public/team_icon.svg';
import InscriptionIcon from '/public/inscription_icon.svg';
import ImageUser from '/public/image_user.jpeg';
import UserIcon from '/public/user_icon.svg';
import { PiPowerLight } from 'react-icons/pi';

export default function Sidebar() {
    return (
        <main className={styles.sidebarContainer}>
            <Image
                src={Logo}
                alt="Logo da Empresa"
                className={styles.logo}
                quality={100}
                priority={true}
            />

            <span className={styles.titleMenu}>MENU</span>
            <section className={styles.navigationContainer}>
                <Link href={'/home'}>
                    <RxDashboard size={15} />
                    <span>Dashboard</span>
                </Link>
                <Link href={'/home/eventos'}>
                    <Image
                        src={CalendarIcon}
                        alt="Ícone de Calendário"
                        quality={100}
                        priority={true}
                    />
                    <span>Eventos</span>
                </Link>
                <Link href={'/home/equipes'}>
                    <Image
                        src={TeamIcon}
                        alt="Ícone de Equipe"
                        quality={100}
                        priority={true}
                    />
                    <span>Equipes</span>
                </Link>
                <Link href={'/home/inscricoes'}>
                    <Image
                        src={InscriptionIcon}
                        alt="Ícone de Inscrições"
                        quality={100}
                        priority={true}
                    />
                    <span>Dashboard</span>
                </Link>
            </section>

            <div className={styles.divider}></div>

            <section className={styles.userContainer}>
                <div className={styles.infosUserContainer}>
                    <Image
                        src={ImageUser}
                        alt="Imagem do Usuário"
                        quality={100}
                        priority={true}
                        className={styles.imageUser}
                    />

                    <div>
                        <span className={styles.nameUser}>Kaique Steck</span>
                        <span className={styles.positionUser}>
                            Administrador
                        </span>
                    </div>
                </div>

                <Link href={'/home/editUser'}>
                    <Image src={UserIcon} alt={'Ícone de Usuário'} />
                    <span>Alterar dados</span>
                </Link>

                <button type="button">
                    <PiPowerLight size={15} />
                    <span>Sair</span>
                </button>
            </section>
        </main>
    );
}
