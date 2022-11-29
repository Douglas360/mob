/**
 * Método para ordenar os dados pelo minuto do jogo.
 *
 * OBS: A API retorna o minuto do jogo em GMT 0
 */
export const sortItemsByMinutoJogo = items => {
  if (!items) return [];

  // Pega hora atual
  const hourNow = new Date().getHours();

  let hour;

  // Validação para corrigir a hora caso hora atual for maior que 22h
  if (hourNow < 22) {
    hour = String(hourNow + 3).padStart(2, '0');
  } else if (hourNow === 22) {
    hour = String(hourNow - 21).padStart(2, '0');
  } else if (hourNow === 23) {
    hour = String(hourNow - 21).padStart(2, '0');
  } else if (hourNow === 24) {
    hour = String(hourNow - 21).padStart(2, '0');
  }

  const sortedItemsByMinutoJogo = [...items].sort((a, b) => {
    const minuto_jogo_a = a[0].minuto_jogo.split('.')[0].padStart(2, '0');
    const minuto_jogo_b = b[0].minuto_jogo.split('.')[0].padStart(2, '0');

    console.log({ minuto_jogo_a, minuto_jogo_b, hour, hourNow });

    if (minuto_jogo_a < minuto_jogo_b) {
      if (minuto_jogo_a < hour && minuto_jogo_b < hour) {
        if (hour === '24' && minuto_jogo_a === '00') {
          return -1;
        }

        return 1;
      }

      if (minuto_jogo_a < hour && minuto_jogo_b > hour) {
        return -1;
      }

      if (minuto_jogo_a > hour && minuto_jogo_b > hour) {
        return 1;
      }

      if (minuto_jogo_a > hour && minuto_jogo_b < hour) {
        return 1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b < hour) {
        return 1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b > hour) {
        return -1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b === hour) {
        return 1;
      }

      return 1;
    }

    if (minuto_jogo_a > minuto_jogo_b) {
      if (minuto_jogo_a > hour && minuto_jogo_b > hour) {
        return -1;
      }

      if (minuto_jogo_a > hour && minuto_jogo_b < hour) {
        return 1;
      }

      if (minuto_jogo_a < hour && minuto_jogo_b < hour) {
        return 1;
      }

      if (minuto_jogo_a < hour && minuto_jogo_b > hour) {
        return -1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b > hour) {
        return -1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b < hour) {
        return 1;
      }

      if (minuto_jogo_a === hour && minuto_jogo_b === hour) {
        return -1;
      }

      return -1;
    }

    return 0;
  });

  return sortedItemsByMinutoJogo;
};
