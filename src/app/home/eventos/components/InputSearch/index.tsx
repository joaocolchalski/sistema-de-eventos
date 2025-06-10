'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.scss';
import { IoIosSearch } from 'react-icons/io';

interface ComponentProps {
    options: string[];
    setSearchEventValue: Dispatch<SetStateAction<string>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function InputSearch({
    options,
    setSearchEventValue,
    setCurrentPage,
}: ComponentProps) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
    );

    function handleSearch() {
        setCurrentPage(1);
        setSearchEventValue(inputValue);
    }

    return (
        <div className={styles.componentContainer}>
            <div
                className={`${styles.container} ${
                    isFocused ? styles.focused : ''
                }`}
            >
                <div className={styles.inputSearchContainer}>
                    <button
                        type="button"
                        className={styles.buttonSearch}
                        onClick={handleSearch}
                    >
                        <IoIosSearch size={20} />
                    </button>
                    <input
                        className={styles.inputSearch}
                        placeholder="Buscar eventos"
                        type="text"
                        name="searchEvent"
                        value={inputValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() =>
                            setTimeout(() => setIsFocused(false), 150)
                        }
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
        </div>
    );
}
