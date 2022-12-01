export const setTableCellBackgroundColor = (items, mercados) => {
  return items.map(rowData => {
    const result_ft_casa = rowData.result_ft_casa;
    const result_ft_visitante = rowData.result_ft_visitante;
    const resultSum = result_ft_casa + result_ft_visitante;

    if (result_ft_casa === 'undef') {
      return { ...rowData, background: 'red' };
    }

    switch (mercados) {
      case 'AMS':
        return {
          ...rowData,
          background:
            result_ft_casa >= 1 && result_ft_visitante >= 1 ? 'green' : 'red',
        };
      case 'AMN':
        return {
          ...rowData,
          background:
            result_ft_casa >= 1 && result_ft_visitante >= 1 ? 'red' : 'green',
        };
      case 'O05':
        return {
          ...rowData,
          background: resultSum > 0.5 ? 'green' : 'red',
        };
      case 'O15':
        return {
          ...rowData,
          background: resultSum > 1.5 ? 'green' : 'red',
        };
      case 'O25':
        return {
          ...rowData,
          background: resultSum > 2.5 ? 'green' : 'red',
        };
      case 'O35':
        return {
          ...rowData,
          background: resultSum > 3.5 ? 'green' : 'red',
        };
      case 'U05':
        return {
          ...rowData,
          background: resultSum < 0.5 ? 'green' : 'red',
        };
      case 'U15':
        return {
          ...rowData,
          background: resultSum < 1.5 ? 'green' : 'red',
        };
      case 'U25':
        return {
          ...rowData,
          background: resultSum < 2.5 ? 'green' : 'red',
        };
      case 'U35':
        return {
          ...rowData,
          background: resultSum < 3.5 ? 'green' : 'red',
        };
      case 'CM':
        return {
          ...rowData,
          background: result_ft_casa >= 1 ? 'green' : 'red',
        };
      case 'FM':
        return {
          ...rowData,
          background: result_ft_visitante >= 1 ? 'green' : 'red',
        };
      case 'EHT':
        const isEqual =
          rowData.result_ht_correct_score_casa ===
          rowData.result_ht_correct_score_visitante;

        if (!isEqual) {
          return { ...rowData, background: 'red' };
        }

        if (rowData.result_ht_correct_score_casa.includes('Oth')) {
          return { ...rowData, background: 'yellow' };
        }

        return {
          ...rowData,
          background: 'green',
        };
      case 'EFT':
        return {
          ...rowData,
          background:
            result_ft_casa >= 1 && result_ft_visitante >= 1 ? 'green' : 'red',
        };

      default:
        return { ...rowData };
    }
  });
};
