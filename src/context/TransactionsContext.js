import React, { createContext, useState } from "react";

const TransactionsContext = createContext();

export const TransactionsContextProvider = ({ children }) => {
    const [transactions, setTranactions] = useState([]);

    const addTransactionToList = () => {}

    const removeTransactionFromList = () => {}

    const contextValue = { transactions, addTransactionToList, removeTransactionFromList };

    return (
        <TransactionsContext.Provider value={ contextValue }>
            { children }
        </TransactionsContext.Provider>
    )
}
