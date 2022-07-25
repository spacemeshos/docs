import React from 'react';
import Layout from '@theme/Layout';

export default function Devzone() {
  return (
    <Layout title="Dev Zone" description="Resources for Developers">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          The Dev Zone will go here.
        </p>
      </div>
    </Layout>
  );
}
