import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import TransactionsCard from "@/components/TransactionsCard";
import styles from "@/components/TransactionsCard/styles.module.css";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Transaction } from "@/types";

vi.mock("next/navigation", async () => {
  return await import("next-router-mock/navigation");
});

/** Local, stable fixture so tests don't drift with data.json changes */
const TXNS: Transaction[] = [
  {
    avatar: "/assets/images/avatars/emma-richardson.jpg",
    name: "Emma Richardson",
    category: "Wellness",
    date: "2024-08-19T14:23:11Z",
    amount: -75.5,
    recurring: false,
  },
  {
    avatar: "/assets/images/avatars/savory-bites-bistro.jpg",
    name: "Savory Bites Bistro",
    category: "Food",
    date: "2024-08-19T09:00:00Z",
    amount: 55.5,
    recurring: false,
  },
  {
    avatar: "/assets/images/avatars/daniel-carter.jpg",
    name: "Daniel Carter",
    category: "Transfer",
    date: "2024-08-18T10:00:00Z",
    amount: 42.3,
    recurring: true,
  },
];

const findItemByName = (list: HTMLElement, name: string) => {
  const items = within(list).getAllByRole("listitem");
  return items.find((li) => within(li).queryByText(name)) ?? null;
};

describe("TransactionsCard", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("renders an accessible region with a title and CTA text", () => {
    render(<TransactionsCard transactions={TXNS} />, {
      wrapper: MemoryRouterProvider,
    });

    const region = screen.getByRole("region", { name: /transactions card/i });
    expect(region).toBeInTheDocument();

    expect(
      within(region).getByRole("heading", { name: /transactions/i, level: 2 })
    ).toBeInTheDocument();

    expect(within(region).getByText(/view all/i)).toBeInTheDocument();
  });

  it("lists each transaction with merchant, formatted amount, and formatted date", () => {
    render(<TransactionsCard transactions={TXNS} />, {
      wrapper: MemoryRouterProvider,
    });

    const region = screen.getByRole("region", { name: /transactions card/i });
    const list = within(region).getByRole("list");

    TXNS.forEach(({ name, amount, date }) => {
      const li = findItemByName(list, name);
      expect(li).toBeTruthy();

      const formatted = formatCurrency(amount, "USD", "en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const expectedAmount = amount > 0 ? `+${formatted}` : formatted;

      expect(
        within(li as HTMLElement).getByText(expectedAmount)
      ).toBeInTheDocument();
      expect(
        within(li as HTMLElement).getByText(formatDate(date))
      ).toBeInTheDocument();
    });
  });

  it("formats negative and positive amounts to two decimals (spot check)", () => {
    render(<TransactionsCard transactions={TXNS} />, {
      wrapper: MemoryRouterProvider,
    });

    const region = screen.getByRole("region", { name: /transactions card/i });
    const list = within(region).getByRole("list");

    const negative = TXNS.find((t) => t.amount < 0)!;
    const positive = TXNS.find((t) => t.amount > 0)!;

    // negative
    const negLi = findItemByName(list, negative.name)!;
    const expectedNeg = formatCurrency(negative.amount, "USD", "en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    expect(within(negLi).getByText(expectedNeg)).toBeInTheDocument();

    // positive (with + prefix)
    const posLi = findItemByName(list, positive.name)!;
    const expectedPos = `+${formatCurrency(positive.amount, "USD", "en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
    expect(within(posLi).getByText(expectedPos)).toBeInTheDocument();
  });

  it("navigates to /transactions when the CTA icon is clicked", () => {
    render(<TransactionsCard transactions={TXNS} />, {
      wrapper: MemoryRouterProvider,
    });

    const ctaIcon = document.querySelector(
      `.${styles.transactionsCard__ctaIcon}`
    ) as HTMLElement | null;

    expect(ctaIcon).not.toBeNull();
    fireEvent.click(ctaIcon!);
    expect(mockRouter.asPath).toBe("/transactions");
  });
});
