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
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="intro-card"
            to="docs/learn/spacemesh/">
            <div class='intro-card-title'>INTRODUCTION</div>
            <div class='intro-card-content'>Learn the basics about Spacemesh and its technology.</div>
          </Link>

          <Link
            className="intro-card"
            to="docs/specs/consensus/overview/">
            <div class='intro-card-title'>DOCUMENTATION</div>
            <div class='intro-card-content'>Detailed technical documentation of our technology.</div>
          </Link>

          <Link
            className="intro-card"
            to="docs/ecosystem/node/">
            <div class='intro-card-title'>TOOLING</div>
            <div class='intro-card-content'>The tools available as part of the Spacemesh ecosystem.</div>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="intro-card"
            to="start/smapp/setup/">
            <div class='intro-card-title'>NETWORK</div>
            <div class='intro-card-content'>Join the Spacemesh network as a smesher.</div>
          </Link>

          <Link
            className="intro-card"
            to="roadmap">
            <div class='intro-card-title'>ROADMAP</div>
            <div class='intro-card-content'>See Spacemesh's journey to Genesis and beyond.</div>
          </Link>

          <Link
            className="intro-card"
            to="devzone">
            <div class='intro-card-title'>DEV ZONE</div>
            <div class='intro-card-content'>Resources for developers.</div>
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
