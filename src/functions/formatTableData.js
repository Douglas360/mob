import { setTableCellBackgroundColor } from './setTableCellBackgroundColor';
import { sortItemsByMinutoJogo } from './sortItemsByMinutoJogo';

export const formatTableData = (items, mercados) => {
  if (!items) return [];

  const sortedItemsByMinutoJogo = sortItemsByMinutoJogo(items);

  const coloredItems = sortedItemsByMinutoJogo.map(sortedItems => {
    return setTableCellBackgroundColor(sortedItems, mercados);
  });

  const filledItems = coloredItems.map(items => {
    if (items.length < 20) {
      const minuto_jogo = items[0]?.minuto_jogo;

      const length = 20 - items.length;

      let newItems = [...items];

      for (let i = 0; i < length; i++) {
        newItems.push({
          minuto_jogo,
          background: 'gray',
          isEmpty: true,
        });
      }

      return [...newItems];
    }

    return [...items];
  });

  return filledItems;
};
