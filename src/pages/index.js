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
        <div className={styles.buttons}>
          <Link
            className="intro-card"
            to="docs/learn/spacemesh/">
            <div class='intro-card-title'>INTRODUCTION</div>
            <div class='intro-card-content'>Learn the basics about Spacemesh.</div>
          </Link>

          <Link
            className="intro-card-inactive"
            to="docs/specs/consensus/construction-cons/">
            <div class='intro-card-title'>DOCUMENTATION</div>
            <div class='intro-card-content'>This section is currently under construction.</div>
          </Link>

          <Link
            className="intro-card-inactive"
            to="docs/ecosystem/construction-eco/">
            <div class='intro-card-title'>TOOLING</div>
            <div class='intro-card-content'>This section is currently under construction.</div>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="intro-card"
            to="docs/start/smapp/setup/">
            <div class='intro-card-title'>GET STARTED</div>
            <div class='intro-card-content'>Join the Spacsemesh network as a smesher.</div>
          </Link>

          <Link
            className="intro-card-inactive"
            to="roadmap">
            <div class='intro-card-title'>ROADMAP</div>
            <div class='intro-card-content'>This section is currently under construction.</div>
          </Link>

          <Link
            className="intro-card-inactive"
            to="devzone">
            <div class='intro-card-title'>DEV ZONE</div>
            <div class='intro-card-content'>This section is currently under construction.</div>
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
