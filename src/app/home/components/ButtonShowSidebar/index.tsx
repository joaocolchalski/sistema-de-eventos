import { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';
import { FaBars } from 'react-icons/fa';

interface ComponentProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    show: boolean;
}

export default function ButtonShowSidebar({ setShow, show }: ComponentProps) {
    function handleShowSidebar() {
        setShow((prev) => !prev);
    }

    return (
        <button
            className={`${styles.button} ${show ? styles.sidebarShow : ''}`}
            onClick={handleShowSidebar}
        >
            <FaBars size={16} />
        </button>
    );
}
