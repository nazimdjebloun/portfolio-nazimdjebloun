import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        <SpeedInsights />
      </body>
    </Html>
  );
}
