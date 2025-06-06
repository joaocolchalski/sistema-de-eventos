import Image from 'next/image';
import styles from './page.module.scss';
import Logo from '/public/logo.svg';

export default function Home() {
    return (
        <div className={styles.containerPage}>
            <main className={styles.containerContent}>
                <Image
                    src={Logo}
                    alt="Logo da empresa"
                    priority={true}
                    quality={100}
                    className={styles.logo}
                />

                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" />

                    <label htmlFor="">Senha</label>
                    <input type="text" />
                </form>
            </main>
        </div>
    );
}
