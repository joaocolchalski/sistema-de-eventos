'use client';
import { useState } from 'react';
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
        {
            id: 3,
            name: 'Clube do Laço Tradição Campeira',
            total_equipes: 5,
            status: true,
            data_inicio: '13/06/2025',
            data_fim: '25/06/2025',
        },
        {
            id: 4,
            name: 'Clube do Laço Tradição Gaúcha',
            total_equipes: 6,
            status: true,
            data_inicio: '25/06/2025',
            data_fim: '01/07/2025',
        },
        {
            id: 5,
            name: 'Clube do Laço Gaúchos em Ação',
            total_equipes: 8,
            status: true,
            data_inicio: '13/07/2025',
            data_fim: '16/07/2025',
        },
    ];

    const nameEvents: string[] = [];

    eventos.forEach((evento) => {
        if (!nameEvents.includes(evento.name)) {
            nameEvents.push(evento.name);
        }
    });

    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedEvents = eventos.slice(startIndex, endIndex);

    const totalPages = Math.ceil(eventos.length / itemsPerPage);

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

                <TableEvents events={paginatedEvents} />

                <div className={styles.navigationEvents}>
                    <button
                        className={styles.buttonPrevious}
                        type="button"
                        onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                    >
                        Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`${styles.pageButton} ${
                                currentPage === index + 1
                                    ? styles.activePageButton
                                    : ''
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className={styles.buttonNext}
                        type="button"
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </main>
    );
}
