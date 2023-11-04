import { useState } from 'react';
import { nanoid } from 'nanoid'

import './App.css';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'Первая запись',
      date: '04/11/2023',
    },
    {
      id: nanoid(),
      title: 'Вторая запись',
      date: '04/11/2023',
    },
    {
      id: nanoid(),
      title: 'Третья запись',
      date: '04/11/2023',
    },
  ])

  return (
    <div className="App">
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
