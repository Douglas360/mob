import { getHourNow } from './getHourNow';

/**
 * Método para ordenar os dados pelo minuto do jogo.
 *
 * OBS: A API retorna o minuto do jogo em GMT 0
 */
export const sortItemsByMinutoJogo = tableItems => {
  if (!tableItems) {
    return [];
  }

  // Pega hora atual
  const hour = getHourNow();

  const sortedItemsByMinutoJogo = tableItems.sort((a, b) => {
    if (a.length === 0 || b.length === 0) return -1;

    const hora_jogo_a = a.hora.padStart(2, '0'); // a[0].minuto_jogo.split('.')[0].padStart(2, '0');
    const hora_jogo_b = b.hora.padStart(2, '0'); // b[0].minuto_jogo.split('.')[0].padStart(2, '0');

    if (hora_jogo_a < hora_jogo_b) {
      if (hora_jogo_a < hour && hora_jogo_b < hour) {
        if (hour === '24' && hora_jogo_a === '00') {
          return -1;
        }

        return 1;
      }

      if (hora_jogo_a < hour && hora_jogo_b > hour) {
        return -1;
      }

      if (hora_jogo_a > hour && hora_jogo_b > hour) {
        return 1;
      }

      if (hora_jogo_a > hour && hora_jogo_b < hour) {
        return 1;
      }

      if (hora_jogo_a === hour && hora_jogo_b < hour) {
        return 1;
      }

      if (hora_jogo_a === hour && hora_jogo_b > hour) {
        return -1;
      }

      if (hora_jogo_a === hour && hora_jogo_b === hour) {
        return 1;
      }

      return 1;
    }

    if (hora_jogo_a > hora_jogo_b) {
      if (hora_jogo_a > hour && hora_jogo_b > hour) {
        return -1;
      }

      if (hora_jogo_a > hour && hora_jogo_b < hour) {
        return 1;
      }

      if (hora_jogo_a < hour && hora_jogo_b < hour) {
        return 1;
      }

      if (hora_jogo_a < hour && hora_jogo_b > hour) {
        return -1;
      }

      if (hora_jogo_a === hour && hora_jogo_b > hour) {
        return -1;
      }

      if (hora_jogo_a === hour && hora_jogo_b < hour) {
        return 1;
      }

      if (hora_jogo_a === hour && hora_jogo_b === hour) {
        return -1;
      }

      return -1;
    }

    return 0;
  });

  return sortedItemsByMinutoJogo;
};
