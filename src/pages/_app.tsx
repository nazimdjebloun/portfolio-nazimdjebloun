import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/layouts/layout"; // Import Layout component
import Head from "next/head";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nazim Djebloun",
  url: "https://nazimdjebloun.com",
  jobTitle: "Full Stack Software Developer",
  knowsAbout: [
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "SQL",
    "PostgreSQL",
    "Tailwind",
  ],
  sameAs: [
    "https://github.com/nazimdjebloun",
    "https://www.linkedin.com/in/nazim-djebloun/",
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Open Graph Tags */}
        <meta
          property="og:image"
          content="https://www.nazimdjebloun.com/og-image.svg"
        />
        <meta
          property="og:title"
          content="Nazim Djebloun - Full Stack Software Developer"
        />
        <meta
          property="og:description"
          content="Building modern web applications with React,Next.js Node.js,express.js and TypeScript"
        />
        <meta
          property="og:image"
          content="https://www.nazimdjebloun.com/og-image.jpg"
        />
        <meta property="og:url" content="https://www.nazimdjebloun.com/" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Nazim Djebloun portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Nazim Djebloun- Full Stack Software Developer specializing in web applications with modern technologies"
        />
        <meta
          name="keywords"
          content="full stack software developer, web developer, react, nextjs, nodejs,expressjs"
        />
        <meta name="author" content="Nazim" />
        <link rel="canonical" href="https://www.nazimdjebloun.com/" />
      </Head>
      <div className={`bg-background ${geistSans.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </div>
    </>
  );
}
