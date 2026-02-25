import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en" className={` bg-background text-foreground`}>
      <Head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script> */}
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
