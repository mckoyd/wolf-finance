import type { StatCardVariant, StatCardCopy } from "@/types";

export const STAT_CARD_COPY: Record<StatCardVariant, StatCardCopy> = {
  balance: {
    title: "Current Balance",
    ariaLabel: "Current balance card",
  },
  income: {
    title: "Income",
    ariaLabel: "Income card",
  },
  expenses: {
    title: "Expenses",
    ariaLabel: "Expenses card",
  },
};

export const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US"
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
