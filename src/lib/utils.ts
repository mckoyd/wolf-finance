export const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US",
  opts?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: opts?.maximumFractionDigits ?? 2,
    minimumFractionDigits: opts?.minimumFractionDigits ?? 2,
  }).format(value);

export const normalizePublicPath = (p: string): string =>
  p.replace(/^\.?\/*/, "/").replace(/^\/?public\//, "/");

export const formatDate = (isoDate: string): string => {
  const formattedDate = new Date(isoDate);
  return formattedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
