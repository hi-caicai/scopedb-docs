import styles from './index.module.css';
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

function HomepageBanner(): React.JSX.Element {
  return (
    <div className={styles.scopeBanner}>
      <div className={styles.scopeBannerContent}>
        <h1 className={styles.scopeBannerTitle}>
          ScopeDB Documents
        </h1>
        <div className={styles.scopeBannerIntro}>
          Streamline your data management with ScopeDB's comprehensive documentation.
        </div>
        <div className={styles.scopeBtns}>
          <a href="/reference/overview" className={clsx(styles.scopeBtn, styles.scopeBtnPrimary)}>Read the Docs</a>
        </div>
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout>
      <HomepageBanner />
    </Layout>
  );
}
