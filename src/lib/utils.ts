export const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US",
  maximumFractionDigits = 0
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);
