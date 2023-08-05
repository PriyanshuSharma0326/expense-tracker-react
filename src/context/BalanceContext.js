import React, { createContext, useContext, useEffect, useState } from "react";
import { TransactionsContext } from "./TransactionsContext";

export const BalanceContext = createContext();

export const BalanceContextProvider = ({ children }) => {
    const { transactions } = useContext(TransactionsContext);
    
    const [amounts, setAmounts] = useState({
        currentBalance: 0,
        incomeBalance: 0,
        expenseBalance: 0
    });

    useEffect(() => {
        const updateBalance = () => {
            let incomeAmount = transactions?.filter(transaction => 
                transaction.transactionType === 'income'
            ).reduce((prev, curr) => 
                prev + Number(curr.amount)
            , 0);
    
            let expenseAmount = transactions?.filter(transaction => 
                transaction.transactionType === 'expense'
            ).reduce((prev, curr) => 
                prev + Number(curr.amount)
            , 0);
    
            let currentAmount = incomeAmount - expenseAmount;
            
            setAmounts({
                incomeBalance: incomeAmount,
                expenseBalance: expenseAmount,
                currentBalance: currentAmount
            });
        }

        updateBalance();
    }, [transactions]);

    const contextValue = { amounts };

    return (
        <BalanceContext.Provider value={ contextValue }>
            { children }
        </BalanceContext.Provider>
    );
}