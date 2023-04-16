import { useAtom } from 'jotai';
import { filterAtom } from '../store/pokimon';

export default function FilterInput() {
  const [filter, setFilter] = useAtom(filterAtom);
  return (
    <div>
      <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
    </div>
  );
}
