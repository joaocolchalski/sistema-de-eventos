import TitlePage from '../components/TitlePage';
import styles from './styles.module.scss';
import { IoIosAdd, IoIosSearch } from 'react-icons/io';

export default function Eventos() {
    return (
        <main>
            <div className={styles.greetingContainer}>
                <span className={styles.greetingText}>
                    Bem vindo de volta, <strong>Kaique Steck</strong>
                </span>
                <TitlePage name="Todos eventos" />
            </div>

            <div className={styles.eventsContainer}>
                <div className={styles.searchAndAddEventContainer}>
                    <div className={styles.inputSearchContainer}>
                        <input
                            className={styles.inputSearch}
                            placeholder="Buscar eventos"
                            type="text"
                            name="searchEvent"
                        />
                        <button type="button" className={styles.buttonSearch}>
                            <IoIosSearch size={20} />
                        </button>
                    </div>

                    <button className={styles.buttonAddEvent}>
                        <IoIosAdd size={26} />
                        <span>Inserir Novo</span>
                    </button>
                </div>

                {/* <table className={styles.tableContainer}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                </table> */}
            </div>
        </main>
    );
}
