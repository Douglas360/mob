import { tableColumns } from '../components/DashboardComponents/Table/tableColumns';
import { getHourNow } from './getHourNow';
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

  return `.${String(newMinutoJogo + 3).padStart(2, '0')}`;
};

export const formatTableData = (items, mercados, liga) => {
  if (!items) {
    return [];
  }

  // Define as cores do background de cada item
  const coloredItems = items.map(sortedItems => {
    return setTableCellBackgroundColor(sortedItems, mercados);
  });

  // Padroniza cada linha da tabela em 20 itens
  const filledItems = coloredItems.map((items, index) => {
    const hourNow = getHourNow();

    // Validação para quando virar o horário
    if (items.length === 0) {
      const hour = getHourNow();

      return Array(20).fill({
        minuto_jogo: `${hour}.00`,
        background: 'gray',
        isEmpty: true,
        isPending: true,
      });
    }

    const min = items[0].minuto_jogo;

    const minuto_jogo =
      index === 0 ? min.split('.')[0] + getColumnTime(liga, min) : min;

    if (items.length < 20) {
      // Cria array de 20 posições com minuto jogo de cada coluna da tabela
      const columns = tableColumns[liga]
        .filter(col => col.value !== 'Hora' && col.value !== 'Dados')
        .map(col => ({
          minuto_jogo:
            minuto_jogo.split('.')[0] +
            `.${String(col.value).padStart(2, '0')}`,
        }));

      const newItems = columns.map(col => {
        const item = items.find(item => item.minuto_jogo === col.minuto_jogo);

        if (!item) {
          const isPending = col.minuto_jogo.split('.')[0] === hourNow;

          return {
            minuto_jogo: col.minuto_jogo,
            background: 'gray',
            isEmpty: true,
            isPending,
          };
        }

        return item;
      });

      return newItems;
    }

    return [...items];
  });

  // Ordena os items por minuto do jogo
  const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(filledItems);

  return sortedItemsByMinutoJogo;
};
