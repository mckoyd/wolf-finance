import Image from "next/image";
import { useRouter } from "next/navigation";
import Text from "@/components/Text";
import { formatCurrency } from "@/lib/utils";
import type { Transaction } from "@/types";
import { TRANSACTIONS_COPY, TRANSACTIONS_CTA } from "./config";
import styles from "./styles.module.css";

interface ITransactionsCard {
  transactions: Transaction[];
  ariaLabelOverride?: string;
}

const AVATAR_ALT = "";

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
        <span className={styles.transactionCard__cta} aria-hidden>
          <Text
            as="p"
            variant="preset-4"
            className={styles.transactionsCard__ctaLabel}
          >
            {TRANSACTIONS_CTA.label}
          </Text>
        </span>
      </header>
    </section>
  );
};
