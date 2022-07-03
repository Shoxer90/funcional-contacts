import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ShowContacts from './Components/Context/Context';

import './index.css';
const Main = () => {
    const [contacts, fillContacts] = useState([]);
    
    return (
        <ShowContacts.Provider value={{contacts, fillContacts}}>
           <App />
        </ShowContacts.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Main/>);
