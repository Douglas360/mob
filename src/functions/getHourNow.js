export const getHourNow = () => {
  // Pega hora atual
  const hourNow = new Date().getHours();

  let hour;

  // Validação para corrigir a hora caso hora atual for maior que 22h
  if (hourNow < 22) {
    hour = hourNow === 21 ? '00' : String(hourNow + 3).padStart(2, '0');
  } else if (hourNow === 22) {
    hour = String(hourNow - 21).padStart(2, '0');
  } else if (hourNow === 23) {
    hour = String(hourNow - 21).padStart(2, '0');
  } else if (hourNow === 24) {
    hour = String(hourNow - 21).padStart(2, '0');
  }

  return hour;
};
