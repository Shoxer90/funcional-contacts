import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Component from './Components';

import './App.css';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div><Component /></div>
    </DndProvider>
  );
};

export default App;
