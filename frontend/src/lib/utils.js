export function formatPriceInput(value) {
  const formattedPrice = parseFloat(value.replace(/,/g, "")).toFixed(2);
  return parseFloat(formattedPrice);
}
export function formatPriceOutput(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
