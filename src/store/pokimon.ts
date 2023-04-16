import { atom } from 'jotai';
import { Pokimon } from '../types/pokimon';

const URL =
  'https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json';

export const filterAtom = atom('');

export const pokimonsAtom = atom<Pokimon[]>(async () => {
  const res = await fetch(URL);
  return await res.json();
});

export const filterdPokimons = atom(async (get) =>
  (await get(pokimonsAtom)).filter((poki) =>
    poki.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);
