import { tableColumns } from '../components/DashboardComponents/Table/tableColumns';
import { getHourNow } from './getHourNow';
import { setTableCellBackgroundColor } from './setTableCellBackgroundColor';
import { sortItemsByMinutoJogo } from './sortItemsByMinutoJogo';

export const formatTableData = (items, mercados, liga) => {
  if (!items) {
    return [];
  }

  // Define as cores do background de cada item
  const coloredItems = items.map(tableItems =>
    setTableCellBackgroundColor(tableItems, mercados),
  );

  // Padroniza cada linha da tabela em 20 itens
  const filledItems = coloredItems.map(({ hora, items }) => {
    const parsedHora = hora === '1.' ? '1' : hora === '2.' ? '2' : hora;

    if (items.length < 20) {
      // Cria array de 20 posições com minuto jogo de cada coluna da tabela
      const columns = tableColumns[liga]
        .filter(col => col.value !== 'Hora' && col.value !== 'Dados')
        .map(col => ({
          minuto_jogo: parsedHora + `.${String(col.value).padStart(2, '0')}`,
        }));

      const newItems = columns.map(col => {
        const item = items.find(item => item.minuto_jogo === col.minuto_jogo);

        if (!item) {
          const isPending =
            col.minuto_jogo.split('.')[0].padStart(2, '0') === getHourNow();

          return {
            minuto_jogo: col.minuto_jogo,
            background: 'gray',
            isEmpty: true,
            isPending,
          };
        }

        return item;
      });

      return { hora: parsedHora, items: newItems };
    }

    return { hora: parsedHora, items };
  });

  // Ordena os items por minuto do jogo
  const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(filledItems);

  return sortedItemsByMinutoJogo;
};
