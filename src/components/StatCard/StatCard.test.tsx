import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StatCard from "./index";
import styles from "./styles.module.css";
import { formatCurrency } from "@/lib/utils";

describe("StatCard", () => {
  it("renders Balance card with accessible region, title, and formatted value", () => {
    render(<StatCard variant="balance" value={4836} />);

    const region = screen.getByRole("region", {
      name: /current balance card/i,
    });
    expect(region).toBeInTheDocument();

    expect(screen.getByText(/current balance/i)).toBeInTheDocument();

    // Regex for currency (decimals and spacing)
    expect(screen.getByText(/\$?\s*4,836(\.?\d+)?/)).toBeInTheDocument();
  });

  it("applies balance modifier class", () => {
    render(<StatCard variant="balance" value={32234} />);
    const region = screen.getByRole("region", {
      name: /current balance card/i,
    });
    expect(region).toHaveClass(styles.statCard);
    expect(region).toHaveClass(styles["statCard--balance"]);
  });

  it("applies income modifier class", () => {
    render(<StatCard variant="income" value={5400} />);
    const region = screen.getByRole("region");
    expect(region).toHaveClass(styles.statCard);
    expect(region).toHaveClass(styles["statCard--income"]);
  });

  it("applies expenses modifier class", () => {
    render(<StatCard variant="expenses" value={3250} />);
    const region = screen.getByRole("region");
    expect(region).toHaveClass(styles.statCard);
    expect(region).toHaveClass(styles["statCard--expenses"]);
  });

  it("supports overriding copy via props", () => {
    render(
      <StatCard
        variant="balance"
        value={850}
        titleOverride="Cash on Hand"
        ariaLabelOverride="Cash on hand card"
      />
    );

    const region = screen.getByRole("region", {
      name: /cash on hand card/i,
    });
    expect(region).toBeInTheDocument();
    expect(screen.getByText(/cash on hand/i)).toBeInTheDocument();
  });

  it("formats with custom currency or locale when provided", () => {
    render(
      <StatCard variant="income" value={1234} currency="EUR" locale="de-DE" />
    );

    const expected = formatCurrency(1234, "EUR", "de-DE");
    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      escapeRegex(expected).replace(/\u00A0/g, "\\s?")
    );

    const region = screen.getByRole("region", { name: /income card/i });
    expect(region).toHaveTextContent(pattern);
  });
});
