'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import Logo from '/public/logo.svg';
import ImageDecoration from '/public/image_decoration.svg';
import { Loader } from './components/Loader';
import { useFormStatus } from 'react-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';

export default function Home() {
    const { pending } = useFormStatus();
    const [typeInputPassword, setTypeInputPassword] = useState('password');

    function modifyTypeInputPassword() {
        typeInputPassword === 'password'
            ? setTypeInputPassword('text')
            : setTypeInputPassword('password');
    }

    return (
        <div className={styles.containerPage}>
            <main className={styles.containerContent}>
                <section className={styles.leftContent}>
                    <Image
                        src={Logo}
                        alt="Logo da empresa"
                        priority={true}
                        quality={100}
                        className={styles.logo}
                    />

                    <h1 className={styles.title}>Bem-vindo de volta</h1>
                    <span className={styles.subtitle}>
                        Entre com sua conta para acessar o painel.
                    </span>

                    <form action="">
                        <section className={styles.inputContainer}>
                            <label
                                htmlFor="email"
                                className={styles.labelInput}
                            >
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="seuemail@seuservidor.com"
                                className={styles.input}
                            />
                        </section>

                        <section className={styles.inputContainer}>
                            <label
                                htmlFor="password"
                                className={styles.labelInput}
                            >
                                Senha
                            </label>

                            <div className={styles.inputWithIconContainer}>
                                <input
                                    id="password"
                                    name="password"
                                    type={typeInputPassword}
                                    placeholder="Digite aqui"
                                    className={styles.inputWithIcon}
                                />
                                <button
                                    className={styles.buttonVisibilityPassword}
                                    onClick={modifyTypeInputPassword}
                                    type="button"
                                >
                                    <IoEyeOutline size={26} />
                                </button>
                            </div>
                        </section>

                        <button type="submit" className={styles.button}>
                            {pending ? <Loader /> : 'Enviar'}
                        </button>
                    </form>
                </section>
                <section className={styles.rightContent}>
                    <Image
                        src={ImageDecoration}
                        alt="Imagem decorativa"
                        className={styles.imageDecoration}
                        priority={true}
                        quality={100}
                    />
                    <div className={styles.boxDecoration}></div>
                </section>
            </main>
        </div>
    );
}
