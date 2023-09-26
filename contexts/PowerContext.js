"use client"
import { createContext, useContext, useState } from 'react';

const PowerContext = createContext();

export const usePower = () => {
    return useContext(PowerContext);
};

export const PowerProvider = ({ children }) => {
    const [power, setPower] = useState(1);
    const [inputValue, setInputValue] = useState(0);
    return (
        <PowerContext.Provider>
            {children}
        </PowerContext.Provider>
    );
};
