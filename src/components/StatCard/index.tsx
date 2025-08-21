import Text from "@/components/Text";
import { STAT_CARD_COPY } from "./config";
import { StatCardVariant } from "@/types";
import { formatCurrency } from "@/lib/utils";
import styles from "./styles.module.css";

export interface IStatCard {
  variant: StatCardVariant;
  value: number;
  currency?: string;
  locale?: string;
  titleOverride?: string;
  ariaLabelOverride?: string;
}

const StatCard: React.FC<IStatCard> = ({
  variant,
  value,
  currency = "USD",
  locale = "en-US",
  titleOverride,
  ariaLabelOverride,
}) => {
  const copy = STAT_CARD_COPY[variant];
  const title = titleOverride ?? copy.title;
  const ariaLabel = ariaLabelOverride ?? copy.ariaLabel;

  const displayValue = formatCurrency(value, currency, locale);
  const variantClass =
    variant === "balance"
      ? styles["statCard--balance"]
      : variant === "income"
      ? styles["statCard--income"]
      : styles["statCard--expenses"];

  return (
    <section
      className={`${styles.statCard} ${variantClass}`}
      aria-label={ariaLabel}
    >
      <header className={styles.statCard__header}>
        <Text as="h2" variant="preset-4" className={styles.statCard__title}>
          {title}
        </Text>
      </header>

      <div className={styles.statCard__valueRow}>
        <Text as="p" variant="preset-1" className={styles.statCard__value}>
          {displayValue}
        </Text>
      </div>
    </section>
  );
};

export default StatCard;
