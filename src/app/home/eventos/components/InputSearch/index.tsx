'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import { IoIosSearch } from 'react-icons/io';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface ComponentProps {
    options: string[];
}

export default function InputSearch({ options }: ComponentProps) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <div
            className={`${styles.container} ${isFocused ? styles.focused : ''}`}
        >
            <div className={styles.inputSearchContainer}>
                <button type="button" className={styles.buttonSearch}>
                    <IoIosSearch size={20} />
                </button>
                <input
                    className={styles.inputSearch}
                    placeholder="Buscar eventos"
                    type="text"
                    name="searchEvent"
                    value={inputValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            {isFocused && filteredOptions.length > 0 && (
                <ul className={styles.dropdown}>
                    <div className={styles.dropdownContent}>
                        {filteredOptions.map((option) => (
                            <li
                                key={option}
                                onClick={() => {
                                    setInputValue(option);
                                    setIsFocused(false);
                                }}
                                className={styles.option}
                            >
                                {option}
                            </li>
                        ))}
                    </div>
                </ul>
            )}

            {isFocused && filteredOptions.length === 0 && (
                <ul className={styles.dropdown}>
                    <li key={1} className={styles.emptyOption}>
                        Não há eventos...
                    </li>
                </ul>
            )}
        </div>
    );
}
