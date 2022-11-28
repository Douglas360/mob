export const sortItemsByPartidas = (items, partida) => {
  if (partida === 24) {
    return items;
  }

  return items.slice(0, partida);
};
