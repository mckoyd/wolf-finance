import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./index";
import { BUTTON_ICONS } from "./config";
import styles from "./styles.module.css";

describe("Button", () => {
  it("renders the label", () => {
    render(<Button variant="primary">Placeholder</Button>);
    expect(
      screen.getByRole("button", {
        name: /placeholder/i,
      })
    ).toBeInTheDocument();
  });

  it("applies the primary variant class", () => {
    render(<Button variant="primary">Go</Button>);
    const btn = screen.getByRole("button", { name: /go/i });
    expect(btn).toHaveClass(styles.button);
    expect(btn).toHaveClass(styles["button--primary"]);
  });

  it("renders a right icon when iconRightSrc is provided", () => {
    render(
      <Button variant="primary" iconRightSrc={BUTTON_ICONS.caretRight}>
        View All
      </Button>
    );
    const btn = screen.getByRole("button", { name: /view all/i });
    const iconImg = within(btn).getByAltText("");

    expect(iconImg).toBeInTheDocument();
    expect(iconImg.closest("span")).not.toBeNull();
  });

  it("fires onClic when enabled", () => {
    const onClick = vi.fn();
    render(
      <Button variant="primary" onClick={onClick}>
        Click me
      </Button>
    );

    fireEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", () => {
    const onClick = vi.fn();
    render(
      <Button variant="primary" disabled onClick={onClick}>
        Can&apos;t click
      </Button>
    );
    fireEvent.click(screen.getByRole("button", { name: /can't click/i }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("respects aria-label when provided", () => {
    render(
      <Button variant="primary" ariaLabel="Primary action">
        Ignore text
      </Button>
    );

    expect(
      screen.getByRole("button", { name: /primary action/i })
    ).toBeInTheDocument();
  });

  it("applies secondary, tertiary, and destroy variants correctly", () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button", { name: /secondary/i })).toHaveClass(
      styles["button--secondary"]
    );

    rerender(<Button variant="tertiary">Tertiary</Button>);
    expect(screen.getByRole("button", { name: /tertiary/i })).toHaveClass(
      styles["button--tertiary"]
    );

    rerender(<Button variant="destroy">Destroy</Button>);
    expect(screen.getByRole("button", { name: /destroy/i })).toHaveClass(
      styles["button--destroy"]
    );
  });
});
