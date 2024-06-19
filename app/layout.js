import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eternal Slots",
  description: "Sometimes, the darkest woods conceal the best odds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="bitcoin, casino, slots, gaming, gambling, eternal" />
        <meta name="author" content="Eternal Slots Team" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/img/webpage.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Eternal Slots" />
        <meta property="og:url" content="https://www.slotseternal.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/img/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png"/>
        <meta name="apple-mobile-web-app-title" content="Eternal Slots" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
