import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <header>
      <div className="container landing-container">
       <h1 className="hero__title">Welcome to the Spacemesh documentation hub!</h1>
       <p class='landing-description'>This page is still a work-in-progress, as Team Spacemesh is hard at work creating in-depth, comprehensive documentation. In the meantime, you can learn the basics of Spacemesh and browse the guides available to get started on the Spacemesh Network.</p>

      <div className={styles.buttons}>
        <Link
          className="intro-card"
          to="docs/learn/spacemesh/">
          <div class='intro-card-title'>SPACEMESH 101</div>
          <div class='intro-card-content'>Learn the basics about Spacemesh.</div>
        </Link>
        <Link
          className="intro-card"
          to="docs/start/">
          <div class='intro-card-title'>GUIDES</div>
          <div class='intro-card-content'>Learn how join the Spacsemesh testnet network as a smesher.</div>
        </Link>

      </div>


      </div>

      </header>



  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
