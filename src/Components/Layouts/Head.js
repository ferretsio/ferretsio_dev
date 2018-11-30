import React from "react";
import Head from "next/head";

export default props => {
  return (
    <div>
      <Head>
        <title>ferretsio</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
      </Head>
    </div>
  );
};
