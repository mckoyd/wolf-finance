import React from "react";
import Text from "@/components/Text";
import styles from "./styles.module.css";

export interface IPageStub {
  title: string;
  ariaLabel: string;
  note?: string;
}

const PageStub: React.FC<IPageStub> = ({ title, ariaLabel, note }) => (
  <main
    className={styles.pageStub}
    aria-label={ariaLabel}
    aria-labelledby={`${title.toLowerCase()}-title`}
  >
    <Text
      as="h1"
      variant="preset-1"
      className={styles.pageStub__title}
      id={`${title.toLowerCase()}-title`}
    >
      {title}
    </Text>
    {note && (
      <Text as="p" variant="preset-5" className={styles.pageStub__note}>
        {note}
      </Text>
    )}
  </main>
);

export default PageStub;
