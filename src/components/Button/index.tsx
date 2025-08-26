import React from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import type { ButtonVariant } from "@/types";
import styles from "./styles.module.css";
import Text from "@/components/Text";

export interface IButton {
  children: ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  iconRightSrc?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({
  children,
  variant = "solid-dark",
  disabled = false,
  iconRightSrc,
  onClick,
  ariaLabel,
  className,
  type = "button",
}) => {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    disabled ? styles[`button--disabled`] : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      <Text as="p" variant="preset-4" className={styles.button__label}>
        {children}
      </Text>
      {iconRightSrc && (
        <span className={styles.button__iconWrapper} aria-hidden>
          <Image
            src={iconRightSrc}
            alt=""
            fill
            className={styles.button__icon}
          />
        </span>
      )}
    </button>
  );
};

export default Button;
