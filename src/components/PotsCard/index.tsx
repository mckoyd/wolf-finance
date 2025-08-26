import styles from "./styles.module.css";
import Text from "@/components/Text";
import { POTS_COPY } from "./config";
import { formatCurrency } from "@/lib/utils";
import type { Pot } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface IPotsCard {
  pots: Pot[];
  ariaLabelOverride?: string;
}

const themeToAccentClass = (theme: string) => {
  const key = theme.replace(/#/, "");
  const stylesProp = `potsCard__accent--${key}`;
  return styles[`${stylesProp}`] ?? styles["potsCard__accent--default"];
};

const PotsCard: React.FC<IPotsCard> = ({ pots, ariaLabelOverride }) => {
  const router = useRouter();

  const { title, cta, ariaLabel, summaryLabel } = POTS_COPY;
  const regionLabel = ariaLabelOverride ?? ariaLabel;

  const totalSaved = pots.reduce((sum, pot) => sum + pot.total, 0);
  return (
    <section className={styles.potsCard} aria-label={regionLabel}>
      <header className={styles.potsCard__header}>
        <Text as="h2" variant="preset-2" className={styles.potsCard__title}>
          {title}
        </Text>
        <span className={styles.potsCard__cta} aria-hidden>
          <Text as="p" variant="preset-4" className={styles.potsCard__ctaTitle}>
            {cta}
          </Text>
          <span
            className={styles.potsCard__ctaIcon}
            onClick={() => router.push("/pots")}
          >
            <Image src="/assets/images/icon-caret-right.svg" alt="" fill />
          </span>
        </span>
      </header>

      <div className={styles.potsCard__summary}>
        <span className={styles.potsCard__summaryIcon} aria-hidden>
          <Image src="/assets/images/icon-pot.svg" alt="" fill />
        </span>
        <div className={styles.potsCard__summaryText}>
          <Text
            as="p"
            variant="preset-4"
            className={styles.potsCard__summaryLabel}
          >
            {summaryLabel}
          </Text>
          <Text
            as="p"
            variant="preset-1"
            className={styles.potsCard__summaryValue}
          >
            {formatCurrency(totalSaved, "USD", "en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Text>
        </div>
      </div>

      <ul className={styles.potsCard__list}>
        {pots.map((pot, index) => (
          <li key={`${pot.name}-${index}`} className={styles.potsCard__item}>
            <span
              className={`${styles.potsCard__accent} ${themeToAccentClass(
                pot.theme
              )}`}
              aria-hidden
            />
            <div className={styles.potsCard__itemText}>
              <Text
                as="p"
                variant="preset-5"
                className={styles.potsCard__itemLabel}
              >
                {pot.name}
              </Text>
              <Text
                as="p"
                variant="preset-4"
                className={styles.potsCard__itemValue}
              >
                {formatCurrency(pot.total, "USD", "en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PotsCard;
