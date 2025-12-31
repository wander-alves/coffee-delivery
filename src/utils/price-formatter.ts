export function priceFormatter(price: number) {
  const [dollar, cents] = String(price.toFixed(2)).split('.');
  const formattedPrice = String(dollar).concat(',', cents.padEnd(2, '0'));
  return formattedPrice;
}
