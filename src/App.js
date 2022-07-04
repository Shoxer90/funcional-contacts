import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Component from './Components';

import './App.css';

const App = () => (
    <DndProvider backend={HTML5Backend}>
      <Component/>
    </DndProvider>
  );

export default App;
