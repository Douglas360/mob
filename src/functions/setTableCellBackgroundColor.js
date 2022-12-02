export const setTableCellBackgroundColor = (items, mercados) => {
  return items.map(rowData => {
    const result_ft_casa = rowData.result_ft_casa;
    const result_ft_visitante = rowData.result_ft_visitante;

    if (mercados !== 'empate-HT') {
      if (result_ft_casa === 'undef' || result_ft_visitante === 'undef') {
        return { ...rowData, background: 'red' };
      }
    }

    const resultSum = Number(result_ft_casa) + Number(result_ft_visitante);

    switch (mercados) {
      case 'ambas-marcam-sim':
        return {
          ...rowData,
          background:
            result_ft_casa >= 1 && result_ft_visitante >= 1 ? 'green' : 'red',
        };
      case 'ambas-marcam-nao':
        return {
          ...rowData,
          background:
            result_ft_casa >= 1 && result_ft_visitante >= 1 ? 'red' : 'green',
        };
      case 'over-05':
        return {
          ...rowData,
          background: resultSum >= 1 ? 'green' : 'red',
        };
      case 'over-15':
        return {
          ...rowData,
          background: resultSum >= 2 ? 'green' : 'red',
        };
      case 'over-25':
        return {
          ...rowData,
          background: resultSum >= 3 ? 'green' : 'red',
        };
      case 'over-35':
        return {
          ...rowData,
          background: resultSum >= 4 ? 'green' : 'red',
        };
      case 'under-05':
        return {
          ...rowData,
          background: resultSum === 0 ? 'green' : 'red',
        };
      case 'under-15':
        return {
          ...rowData,
          background: resultSum <= 1 ? 'green' : 'red',
        };
      case 'under-25':
        return {
          ...rowData,
          background: resultSum <= 2 ? 'green' : 'red',
        };
      case 'under-35':
        return {
          ...rowData,
          background: resultSum <= 3 ? 'green' : 'red',
        };
      case 'casa-marca':
        return {
          ...rowData,
          background: result_ft_casa >= 1 ? 'green' : 'red',
        };
      case 'fora-marca':
        return {
          ...rowData,
          background: result_ft_visitante >= 1 ? 'green' : 'red',
        };
      case 'empate-HT':
        if (rowData.result_ht_correct_score_casa.includes('Oth')) {
          return { ...rowData, background: 'yellow' };
        }

        return {
          ...rowData,
          background: rowData.result_ht === 'Empate' ? 'green' : 'red',
        };
      case 'empate-FT':
        return {
          ...rowData,
          background: result_ft_casa === result_ft_visitante ? 'green' : 'red',
        };

      default:
        return { ...rowData };
    }
  });
};
