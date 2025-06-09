import TitlePage from '../components/TitlePage';
import InputSearch from './components/InputSearch';
import TableEvents from './components/TableEvents';
import styles from './styles.module.scss';
import { IoIosAdd } from 'react-icons/io';

export default function Eventos() {
    const eventos = [
        {
            id: 1,
            name: 'Clube do Laço Coração Pantaneiro',
            total_equipes: 10,
            status: true,
            data_inicio: '09/06/2025',
            data_fim: '11/06/2025',
        },
        {
            id: 2,
            name: 'Clube do Laço Coração Pantaneiro',
            total_equipes: 10,
            status: true,
            data_inicio: '09/06/2025',
            data_fim: '11/06/2025',
        },
    ];

    const nameEvents: string[] = [];

    eventos.forEach((evento) => {
        if (!nameEvents.includes(evento.name)) {
            nameEvents.push(evento.name);
        }
    });

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
                    <div className={styles.searchC}>
                        <InputSearch options={nameEvents} />
                    </div>
                    <div>
                        <button className={styles.buttonAddEvent}>
                            <IoIosAdd size={20} />
                            <span>Inserir Novo</span>
                        </button>
                    </div>
                </div>

                <TableEvents events={eventos} />
            </div>
        </main>
    );
}
