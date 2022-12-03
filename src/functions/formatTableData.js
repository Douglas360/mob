import { tableColumns } from '../components/DashboardComponents/Table/tableColumns';
import { setTableCellBackgroundColor } from './setTableCellBackgroundColor';
import { sortItemsByMinutoJogo } from './sortItemsByMinutoJogo';

const getColumnTime = (liga, minuto_jogo) => {
  if (!minuto_jogo) {
    return liga === 'euro'
      ? '.59'
      : liga === 'copa'
      ? '.58'
      : liga === 'premier'
      ? '57'
      : '.58';
  }

  const newMinutoJogo = Number(minuto_jogo.split('.')[1]);

  if (newMinutoJogo === 57 || newMinutoJogo === 58 || newMinutoJogo === 59) {
    return `.${newMinutoJogo}`;
  }

  return `.${newMinutoJogo + 3}`;
};

export const formatTableData = (items, mercados, liga) => {
  if (!items) return [];

  // Ordena os items por minuto do jogo
  const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(items);

  // Define as cores do background do item da tabela
  const coloredItems = sortedItemsByMinutoJogo.map(sortedItems => {
    return setTableCellBackgroundColor(sortedItems, mercados);
  });

  // Padroniza as cada linha da tabela em 20 itens
  const filledItems = coloredItems.map((items, index) => {
    // Validação para quando virar o horário
    if (items.length === 0) {
      return Array(20).fill({
        minuto_jogo: '00.00',
        background: 'gray',
        isEmpty: true,
        isPending: true,
      });
    }

    const min = items[0]?.minuto_jogo;

    const minuto_jogo =
      index === 0 ? min.split('.')[0] + getColumnTime(liga, min) : min;

    if (items.length < 20) {
      const length = 20 - items.length;

      let newItems = [...items];

      let minutoAux = minuto_jogo.split('.')[0] + getColumnTime(liga, min);

      if (index === 0) {
        for (let i = 0; i < length; i++) {
          newItems.push({
            minuto_jogo: minutoAux,
            background: 'gray',
            isEmpty: true,
            isPending: true,
          });

          minutoAux = minutoAux.split('.')[0] + getColumnTime(liga, minutoAux);
        }
      } else {
        const colIndex = tableColumns[liga].filter(
          ({ value }) => value === Number(minuto_jogo.split('.')[1]),
        );

        const allMinutos = [...items].map(item =>
          Number(item.minuto_jogo.split('.')[1]),
        );

        // Encontra qual coluna o item faltando deve ficar
        const tableCol = tableColumns[liga].find(
          ({ value }) =>
            value !== 'Hora' &&
            value !== 'Dados' &&
            !allMinutos.includes(value),
        );

        for (let i = 0; i < length; i++) {
          newItems.splice(length - (colIndex.id - 2), 0, {
            minuto_jogo:
              minuto_jogo.split('.')[0] +
              `.${String(tableCol.value).padStart(2, '0')}`,
            background: 'gray',
            isEmpty: true,
            isPending: false,
          });
        }
      }

      return [...newItems];
    }

    return [...items];
  });

  return filledItems;
};
