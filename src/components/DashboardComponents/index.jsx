import { useState } from 'react';
import { ResultComponent } from './resultComponent';

export function Filtros(liga) {
  const [filter, setFilter] = useState();

  return <ResultComponent liga={liga.liga} Filtro={filter} />;
}
