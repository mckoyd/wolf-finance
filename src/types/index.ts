export type Balance = {
  current: number;
  income: number;
  expenses: number;
};

export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export type Budget = {
  category: string;
  maximum: number;
  theme: string;
};

export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

export type AccountSummary = {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
};

export type TextVariant =
  | "preset-1"
  | "preset-2"
  | "preset-3"
  | "preset-4"
  | "preset-5";

export type PageConfig = {
  path: string;
  title: string;
  ariaLabel: string;
};

export type StatCardVariant = "balance" | "income" | "expenses";
export type StatCardCopy = {
  title: string;
  ariaLabel: string;
};

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destroy";
