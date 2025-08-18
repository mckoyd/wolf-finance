export type SidebarNavKey =
  | "overview"
  | "transactions"
  | "budgets"
  | "pots"
  | "recurring";

export type SidebarItem = {
  navKey: SidebarNavKey;
  label: string;
  href: string;
  icon: string;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    navKey: "overview",
    label: "Overview",
    href: "/",
    icon: "/assets/images/icon-nav-overview.svg",
  },
  {
    navKey: "transactions",
    label: "Transactions",
    href: "/transactions",
    icon: "/assets/images/icon-nav-transactions.svg",
  },
  {
    navKey: "budgets",
    label: "Budgets",
    href: "/budgets",
    icon: "/assets/images/icon-nav-budgets.svg",
  },
  {
    navKey: "pots",
    label: "Pots",
    href: "/pots",
    icon: "/assets/images/icon-nav-pots.svg",
  },
  {
    navKey: "recurring",
    label: "Recurring",
    href: "/recurring",
    icon: "/assets/images/icon-nav-recurring.svg",
  },
] as const;
