'use client';
import { intervalDateString } from '@/app/lib/helper';
import styles from './styles.module.scss';
import DotStatus from '@/assets/dot_status.svg';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuPencil } from 'react-icons/lu';
import { Event } from '@/@types/global';

interface ComponentProps {
    events: Event[];
}

export default function TableEvents({ events }: ComponentProps) {
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Fecha se o clique não foi dentro de um botão/menu
            if (
                !target.closest('[data-menu]') &&
                !target.closest('[data-menu-trigger]')
            ) {
                setOpenMenuId(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleMenu = (id: number) => {
        setOpenMenuId((prev) => (prev === id ? null : id));
    };

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
                        <td className={styles.tableDataButton}>
                            <div className={styles.buttonOptionsContainer}>
                                <button
                                    data-menu-trigger
                                    type="button"
                                    className={styles.buttonOptions}
                                    onClick={() => toggleMenu(evento.id)}
                                >
                                    <HiOutlineDotsVertical size={17} />
                                </button>

                                {openMenuId === evento.id && (
                                    <div
                                        data-menu
                                        className={styles.menuOptions}
                                    >
                                        <button
                                            onClick={() =>
                                                toggleMenu(evento.id)
                                            }
                                            type="button"
                                            className={styles.menuItem}
                                        >
                                            <IoEyeOutline size={16} />
                                            <span>Visualizar</span>
                                        </button>
                                        <button
                                            onClick={() =>
                                                toggleMenu(evento.id)
                                            }
                                            type="button"
                                            className={styles.menuItem}
                                        >
                                            <LuPencil size={16} />
                                            <span>Editar</span>
                                        </button>
                                        <button
                                            onClick={() =>
                                                toggleMenu(evento.id)
                                            }
                                            type="button"
                                            className={styles.menuItemRemove}
                                        >
                                            <FaRegTrashAlt size={16} />
                                            <span>Excluir</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
