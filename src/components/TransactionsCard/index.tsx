import Image from "next/image";
import { useRouter } from "next/navigation";
import Text from "@/components/Text";
import { formatCurrency, normalizePublicPath, formatDate } from "@/lib/utils";
import type { Transaction } from "@/types";
import { TRANSACTIONS_COPY, TRANSACTIONS_CTA } from "./config";
import styles from "./styles.module.css";

interface ITransactionsCard {
  transactions: Transaction[];
  ariaLabelOverride?: string;
}

const TransactionsCard: React.FC<ITransactionsCard> = ({
  transactions,
  ariaLabelOverride,
}) => {
  const router = useRouter();

  const { title, ariaLabel } = TRANSACTIONS_COPY;
  const regionLabel = ariaLabelOverride ?? ariaLabel;

  return (
    <section className={styles.transactionsCard} aria-label={regionLabel}>
      <header className={styles.transactionsCard__header}>
        <Text
          as="h2"
          variant="preset-2"
          className={styles.transactionsCard__title}
        >
          {title}
        </Text>
        <span className={styles.transactionsCard__cta} aria-hidden>
          <Text
            as="p"
            variant="preset-4"
            className={styles.transactionsCard__ctaLabel}
          >
            {TRANSACTIONS_CTA.label}
          </Text>
          <span
            className={styles.transactionsCard__ctaIconWrapper}
            onClick={() => router.push(TRANSACTIONS_CTA.path)}
          >
            <Image
              src={TRANSACTIONS_CTA.ctaIcon}
              alt=""
              fill
              className={styles.transactionsCard__ctaIcon}
            />
          </span>
        </span>
      </header>

      <ul className={styles.transactionsCard__list}>
        {transactions.map(({ avatar, name, date, amount }, index) => {
          const isCredit = amount > 0;
          const formatted = formatCurrency(Math.abs(amount));

          const normalizedSrc = normalizePublicPath(avatar);
          return (
            <li
              key={`${name}-${date}-${index}`}
              className={styles.transactionsCard__item}
            >
              <span className={styles.transactionsCard__avatarWrapper}>
                <Image
                  src={normalizedSrc}
                  alt={`${name} avatar`}
                  fill
                  className={styles.transactionsCard__avatarIcon}
                  unoptimized
                />
              </span>

              <Text
                as="p"
                variant="preset-3"
                className={styles.transactionsCard__name}
              >
                {name}
              </Text>

              <div className={styles.transactionsCard__details}>
                <Text
                  as="p"
                  variant="preset-3"
                  className={[
                    styles.transactionsCard__amount,
                    isCredit
                      ? styles["transactionsCard__amount--credit"]
                      : styles["transactionsCard__amount--debit"],
                  ].join(" ")}
                >
                  {isCredit ? `+${formatted}` : `-${formatted}`}
                </Text>
                <Text
                  as="p"
                  variant="preset-4"
                  className={styles.transactionsCard__date}
                >
                  {formatDate(date)}
                </Text>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TransactionsCard;
