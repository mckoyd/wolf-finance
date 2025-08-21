import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PotsCard from "./index";
import getAccount from "@/lib/getData";
import { formatCurrency } from "@/lib/utils";
import { POTS_COPY } from "./config";
import type { Pot } from "@/types";
import styles from "./styles.module.css";

vi.mock("next/navigation", () => require("next-router-mock/navigation"));
import mockRouter from "next-router-mock";

describe("PotsCard", () => {
  const { pots } = getAccount() as { pots: Pot[] };
  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);

  it("renders an accessible region with title and CTA", () => {
    render(<PotsCard pots={pots} />);
    const region = screen.getByRole("region", { name: POTS_COPY.ariaLabel });
    expect(region).toBeInTheDocument();
    expect(
      within(region).getByRole("heading", { level: 2, name: POTS_COPY.title })
    ).toBeInTheDocument();
    expect(within(region).getByText(POTS_COPY.cta)).toBeInTheDocument();
  });

  it("shows the Total Saved summary computed from the provided pots", () => {
    render(<PotsCard pots={pots} />);
    const region = screen.getByRole("region", { name: POTS_COPY.ariaLabel });
    expect(
      within(region).getByText(POTS_COPY.summaryLabel)
    ).toBeInTheDocument();
    expect(
      within(region).getByText(formatCurrency(totalSaved))
    ).toBeInTheDocument();
  });

  it("lists each pot with its label and formatted total", () => {
    render(<PotsCard pots={pots} />);
    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");
    expect(items).toHaveLength(pots.length);
    pots.forEach(({ name, total }) => {
      const item = within(list).getByText(name).closest("li") as HTMLElement;
      expect(item).toBeInTheDocument();
      expect(within(item).getByText(formatCurrency(total))).toBeInTheDocument();
    });
  });

  it("navigates to /pots when the CTA icon is clicked", async () => {
    await mockRouter.push("/");

    const user = userEvent.setup();
    const { container } = render(<PotsCard pots={pots} />);

    const ctaIcon = container.querySelector(`.${styles.potsCard__ctaIcon}`);
    expect(ctaIcon).toBeTruthy();

    await user.click(ctaIcon as Element);

    await waitFor(() => expect(mockRouter.asPath).toBe("/pots"));
  });
});
