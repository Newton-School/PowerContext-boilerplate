"use client"
import { usePower } from '../contexts/PowerContext';

const LanguageSwitcher = () => {
    const { power, setPower, inputValue, setInputValue } = usePower();

    return (
        <div>

            <select >
                <option value="1">normal</option>
                <option value="2">Square</option>
                <option value="3">Cube</option>

            </select>
            <input />
        </div>
    );
};

export default LanguageSwitcher;
