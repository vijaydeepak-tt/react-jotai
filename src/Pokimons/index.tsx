import { Suspense } from 'react';
import FilterInput from './FilterInput';
import PokimonsTable from './PokimonsTable';

export default function Pokimons() {
  return (
    <div>
      <FilterInput />
      <Suspense fallback={<div>Loading...</div>}>
        <PokimonsTable />
      </Suspense>
    </div>
  );
}
