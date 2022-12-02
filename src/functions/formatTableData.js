import { setTableCellBackgroundColor } from './setTableCellBackgroundColor';
import { sortItemsByMinutoJogo } from './sortItemsByMinutoJogo';

export const formatTableData = (items, mercados) => {
  if (!items) return [];

  // Ordena os items por minuto do jogo
  const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(items);

  // Define as cores do background do item da tabela
  const coloredItems = sortedItemsByMinutoJogo.map(sortedItems => {
    return setTableCellBackgroundColor(sortedItems, mercados);
  });

  // Padroniza as cada linha da tabela em 20 itens
  const filledItems = coloredItems.map((items, index) => {
    const minuto_jogo =
      index === 0
        ? items[0]?.minuto_jogo.split('.')[0] + '.59'
        : items[0]?.minuto_jogo;

    if (items.length < 20) {
      const length = 20 - items.length;

      let newItems = [...items];

      for (let i = 0; i < length; i++) {
        newItems.push({
          minuto_jogo,
          background: 'gray',
          isEmpty: true,
          isPending: index === 0,
        });
      }

      return [...newItems];
    }

    return [...items];
  });

  return filledItems;
};
