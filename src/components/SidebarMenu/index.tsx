import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "./config";

import styles from "./styles.module.css";

export interface ISidebarMenu {
  activePath?: string;
}

const SidebarMenu: React.FC<ISidebarMenu> = ({ activePath }) => {
  const pathname = usePathname();
  const current = activePath ?? pathname ?? "/";

  return (
    <nav className={styles.menu} aria-label="Primary">
      {SIDEBAR_ITEMS.map(({ navKey, label, href, icon }, index) => {
        const isActive = current === href || current?.startsWith(href + "/");
        return (
          <Link
            key={`${navKey}-${index}`}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <span className={styles.iconWrapper} aria-hidden>
              <Image
                src={icon}
                alt=""
                fill
                className={styles.icon}
                priority={false}
              />
            </span>
            <span className={styles.label}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default SidebarMenu;
