export const sortItemsByMinutoJogo = items => {
  // Hora atual + 3 - na API o minuto_jogo retorna em GMT 0;
  const hourNow = new Date().getHours() + 3;

  const sortedItemsByMinutoJogo = [...items].sort((a, b) => {
    const minuto_jogo_a =
      a[0].minuto_jogo.length > 4
        ? Number(a[0].minuto_jogo.split('.')[0])
        : Number(a[0].minuto_jogo.split('.')[0].padStart(2, '0'));

    const minuto_jogo_b =
      b[0].minuto_jogo.length > 4
        ? Number(b[0].minuto_jogo.split('.')[0])
        : Number(b[0].minuto_jogo.split('.')[0].padStart(2, '0'));

    if (minuto_jogo_a < minuto_jogo_b) {
      if (minuto_jogo_a < hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a < hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a > hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a > hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b === hourNow) {
        return 1;
      }

      return 1;
    }

    if (minuto_jogo_a > minuto_jogo_b) {
      if (minuto_jogo_a > hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a > hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a < hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a < hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b > hourNow) {
        return -1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b < hourNow) {
        return 1;
      }

      if (minuto_jogo_a === hourNow && minuto_jogo_b === hourNow) {
        return -1;
      }

      return -1;
    }

    return 0;
  });

  return sortedItemsByMinutoJogo;
};
