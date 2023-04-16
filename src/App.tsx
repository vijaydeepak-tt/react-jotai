import { useState } from 'react';
import './App.css';
import Pokimons from './Pokimons';
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

const fetchCountAtom = atom(
  (get) => get(countAtom),
  async (_get, set, value) => {
    set(countAtom, _get(countAtom) + (value as number));
  }
);

function App() {
  const [count, compute] = useAtom(fetchCountAtom);
  return (
    <div className="App">
      <button onClick={() => compute(1)}>compute ({count})</button>
      <Pokimons />
    </div>
  );
}

export default App;
