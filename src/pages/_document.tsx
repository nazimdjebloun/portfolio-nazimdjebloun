import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={` bg-background`}>
      <Head>
        <title>Nazim portfolio</title>
        <meta
          name="portfolio"
          content="This is the portfolio page of nazim djebloun "
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
