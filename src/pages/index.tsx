// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import HomepageMenus from "../components/HomepageMenus";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Re:Earth’s documentation website, which helps you to learn how to use and develop Re:arth quickly"
    >
      <HomepageHeader />
      <main>
        <HomepageMenus />
      </main>
    </Layout>
  );
}
