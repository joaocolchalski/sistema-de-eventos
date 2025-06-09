import { intervalDateString } from '@/app/lib/helper';
import styles from './styles.module.scss';
import DotStatus from '@/assets/dot_status.svg';
import { HiOutlineDotsVertical } from 'react-icons/hi';

interface Event {
    id: number;
    name: string;
    total_equipes: number;
    status: boolean;
    data_inicio: string;
    data_fim: string;
}

interface ComponentProps {
    events: Event[];
}

export default function TableEvents({ events }: ComponentProps) {
    return (
        <table className={styles.tableContainer}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                    <th className={styles.tableHeader}>Nome do evento</th>
                    <th className={styles.tableHeader}> Total de equipes</th>
                    <th className={styles.tableHeader}> Status</th>
                    <th className={styles.tableHeader}> Data</th>
                    <th className={styles.tableHeader}> </th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {events.map((evento) => (
                    <tr className={styles.tableRow} key={evento.id}>
                        <td className={styles.tableData}>{evento.name}</td>
                        <td className={styles.tableData}>
                            {evento.total_equipes}
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.statusContainer}>
                                <DotStatus
                                    className={`${
                                        evento.status
                                            ? styles.activeDot
                                            : styles.inactiveDot
                                    }`}
                                />
                                <span className={styles.statusText}>
                                    {evento.status ? 'Ativo' : 'Inativo'}
                                </span>
                            </div>
                        </td>
                        <td className={styles.tableData}>
                            {intervalDateString({
                                data_inicio: evento.data_inicio,
                                data_fim: evento.data_fim,
                            })}
                        </td>
                        <td className={styles.tableData}>
                            <div className={styles.buttonOptionsContainer}>
                                <button
                                    type="button"
                                    className={styles.buttonOptions}
                                >
                                    <HiOutlineDotsVertical size={17} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
