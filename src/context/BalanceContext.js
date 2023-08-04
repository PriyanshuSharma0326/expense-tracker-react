import React, { createContext, useState } from "react";

export const BalanceContext = createContext();

export const BalanceContextProvider = ({ children }) => {
    const [amounts, setAmounts] = useState({
        currentBalance: 0,
        incomeBalance: 0,
        expenseBalance: 0
    });

    const updateAmounts = (income, expense, current) => {
        setAmounts({
            incomeBalance: income,
            expenseBalance: expense,
            currentBalance: current
        });
    }

    const contextValue = { amounts, updateAmounts };

    return (
        <BalanceContext.Provider value={ contextValue }>
            { children }
        </BalanceContext.Provider>
    );
}