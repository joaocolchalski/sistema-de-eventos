import styles from './styles.module.scss';

interface ComponentProps {
    name: string;
}

export default function TitlePage({ name }: ComponentProps) {
    return <span className={styles.titlePage}>{name}</span>;
}
