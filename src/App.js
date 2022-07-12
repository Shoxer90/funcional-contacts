import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ShowContacts from './Components/Context/Context';

import Container from './Components/Container';

import './App.css';

const App = () => {
  const [contacts, fillContacts] = useState([]);

  return (
    <ShowContacts.Provider value={{contacts, fillContacts}}>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </ShowContacts.Provider>
  );
};

export default App;
