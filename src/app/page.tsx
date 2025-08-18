import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <main role="main" aria-labelledby="page-title" className={styles.container}>
      <h1 id="page-title" className={styles.title}>
        Wolf Personal Finance Application
      </h1>
      <section
        aria-label="Balance overview"
        className={styles.balanceContainer}
      ></section>
    </main>
  );
};

export default Home;
