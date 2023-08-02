import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.js';
import { TransactionsContextProvider } from './context/TransactionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <TransactionsContextProvider>
            <App />
        </TransactionsContextProvider>
    </React.StrictMode>
);
