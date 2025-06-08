'use client';
import styles from './page.module.scss';
import Logo from '@/assets/logo.svg';
import ImageDecoration from '@/assets/image_decoration.svg';
import { Loader } from './components/Loader';
import { useFormStatus } from 'react-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Home() {
    const { pending } = useFormStatus();
    const router = useRouter();
    const [typeInputPassword, setTypeInputPassword] = useState('password');

    function handleLogin(formData: FormData) {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (email.trim().length === 0 || password.trim().length === 0) {
            toast.warning('Preencha todos os campos!');
            return;
        }

        router.push('/home/eventos');
    }

    function modifyTypeInputPassword() {
        typeInputPassword === 'password'
            ? setTypeInputPassword('text')
            : setTypeInputPassword('password');
    }

    return (
        <div className={styles.containerPage}>
            <main className={styles.containerContent}>
                <div className={styles.leftContent}>
                    <Logo className={styles.logo} />

                    <h1 className={styles.title}>Bem-vindo de volta</h1>
                    <span className={styles.subtitle}>
                        Entre com sua conta para acessar o painel.
                    </span>

                    <form action={handleLogin}>
                        <div className={styles.inputContainer}>
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
                        </div>

                        <div className={styles.inputContainer}>
                            <label
                                htmlFor="password"
                                className={styles.labelInput}
                            >
                                Senha
                            </label>

                            <div className={styles.inputPasswordContainer}>
                                <input
                                    id="password"
                                    name="password"
                                    type={typeInputPassword}
                                    placeholder="Digite aqui"
                                    className={styles.inputPassword}
                                />
                                <button
                                    className={styles.buttonVisibilityPassword}
                                    onClick={modifyTypeInputPassword}
                                    type="button"
                                >
                                    <IoEyeOutline size={26} />
                                </button>
                            </div>
                        </div>

                        <button type="submit" className={styles.button}>
                            {pending ? <Loader /> : 'Enviar'}
                        </button>
                    </form>
                </div>
                <aside className={styles.rightContent}>
                    <ImageDecoration className={styles.imageDecoration} />
                    <div className={styles.boxDecoration}></div>
                </aside>
            </main>
        </div>
    );
}
