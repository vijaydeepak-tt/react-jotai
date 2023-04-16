import { useAtom } from 'jotai';
import { filterdPokimons } from '../store/pokimon';

export default function PokimonsTable() {
  const [pokimons] = useAtom(filterdPokimons);
  return (
    <table style={{ width: '400px' }}>
      <thead>
        <tr>
          <th>Name (English)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokimons.map((poki) => (
          <tr key={poki.id}>
            <td>{poki.name.english}</td>
            <td>{poki.type.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
