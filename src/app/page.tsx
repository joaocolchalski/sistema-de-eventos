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
                    <label htmlFor="email" className={styles.labelInput}>
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Digite aqui"
                        className={styles.input}
                    />

                    <label htmlFor="password" className={styles.labelInput}>
                        Senha
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Digite aqui"
                        className={styles.input}
                    />
                </form>
            </main>
        </div>
    );
}
