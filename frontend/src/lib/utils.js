export function formatPriceInput(price) {
  const formattedPrice = parseFloat(price.replace(/,/g, "")).toFixed(2);
  return parseFloat(formattedPrice);
}
