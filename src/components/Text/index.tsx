import styles from "./styles.module.css";
import type { TextVariant } from "@/types";
import { ALIGN_CLASSES, TEXT_DEFAULTS } from "./config";

export interface IText {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  align?: keyof typeof ALIGN_CLASSES;
}

const Text: React.FC<IText> = ({
  as: Component = TEXT_DEFAULTS.as,
  variant = TEXT_DEFAULTS.variant,
  children,
  className,
  align = TEXT_DEFAULTS.align,
}) => {
  const variantClass = styles[variant] ?? "";
  const alignClass = align && styles[ALIGN_CLASSES[align]];

  const mergedClassNames = [variantClass, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return <Component className={mergedClassNames}>{children}</Component>;
};

export default Text;
