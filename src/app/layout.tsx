import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/layouts/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazim Djebloun portfolio",
  description: "Nazim Djebloun- Full Stack Software Developer specializing in web applications with modern technologies",
  keywords: ["full stack software developer", "web developer", "react", "nextjs", "nodejs", "expressjs"],
  authors: [{ name: "Nazim" }],
  metadataBase: new URL("https://www.nazimdjebloun.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nazim Djebloun - Full Stack Software Developer",
    description: "Building modern web applications with React, Next.js, Node.js, express.js and TypeScript",
    url: "https://www.nazimdjebloun.com/",
    siteName: "Nazim Djebloun portfolio",
    images: [
      {
        url: "/og-image.svg", // Fallback to svg if jpg not found or vice versa
      },
    ],
    type: "website",
  },
  other: {
    "portfolio": "This is the portfolio page of nazim djebloun ",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased bg-background ${geistSans.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            {children}
            <Analytics />
            <SpeedInsights />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
