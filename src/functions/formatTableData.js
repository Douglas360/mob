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
    const minuto_jogo =
      index === 0
        ? items[0]?.minuto_jogo.split('.')[0] +
          getColumnTime(liga, items[0]?.minuto_jogo)
        : items[0]?.minuto_jogo;

    if (items.length < 20) {
      const length = 20 - items.length;

      let newItems = [...items];

      console.log(newItems);

      for (let i = 0; i < length; i++) {
        newItems.push({
          minuto_jogo:
            minuto_jogo.split('.')[0] +
            getColumnTime(liga, items[0]?.minuto_jogo),
          background: 'gray',
          isEmpty: true,
          isPending: index === 0,
        });
      }

      // if (index === 0) {
      //   const minuto_jogo =
      //     items[0]?.minuto_jogo.split('.')[0] +
      //     getColumnTime(liga, items[0]?.minuto_jogo);

      //   for (let i = 0; i < length; i++) {
      //     newItems.push({
      //       minuto_jogo:
      //         minuto_jogo.split('.')[0] +
      //         getColumnTime(liga, items[0]?.minuto_jogo),
      //       background: 'gray',
      //       isEmpty: true,
      //       isPending: true,
      //     });
      //   }
      // } else {
      //   const minuto_jogo = items[0]?.minuto_jogo;

      //   console.log('MIN', minuto_jogo);

      //   const itemIndex =
      //     tableColumns[liga]
      //       .filter(item => item.value !== 'Hora' && item.value !== 'Dados')
      //       .find(item => item.value !== Number(minuto_jogo.split('.'[0]))).id -
      //     2;

      //   console.log({ itemIndex, minuto_jogo: items[itemIndex]?.minuto_jogo });

      //   for (let i = 0; i < length; i++) {
      //     newItems.splice(length - itemIndex, 0, {
      //       minuto_jogo:
      //         minuto_jogo.split('.')[0] +
      //         getColumnTime(liga, items[0]?.minuto_jogo),
      //       background: 'gray',
      //       isEmpty: true,
      //       isPending: false,
      //     });

      //     // newItems.push({
      //     //   minuto_jogo:
      //     //     minuto_jogo.split('.')[0] +
      //     //     getColumnTime(liga, items[0]?.minuto_jogo),
      //     //   background: 'gray',
      //     //   isEmpty: true,
      //     //   isPending: false,
      //     // });
      //   }
      // }

      return [...newItems];
    }

    return [...items];
  });

  console.log({ filledItems });

  return filledItems;
};
