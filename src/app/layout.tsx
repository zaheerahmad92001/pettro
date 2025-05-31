import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
// import { Geist, Geist_Mono , Merienda , Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AppLinks from "@/components/applinks/appLinks";
import Footer from "@/components/footer";
import ReduxProvider from "@/redux/reduxProvider";
import ReactQueryProvider from "./api/ReactQueryProvider";
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pettro",
  description: "Trusted pet care and health advice",
  icons: {
    icon: "/pettro-img.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          id="ld-json-org"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pettro",
              url: "https://www.pettro.co",
              logo: "https://www.pettro.co/pettro-img-ld.png",
            }),
          }}
        />
      </head>
      <body
        className={`${geistMono.variable}
          antialiased bg-white` }
      >
        <ReduxProvider>
        <ReactQueryProvider>
        <Navbar/>
        <AppLinks />
        {children}
        <Analytics />
        <Footer/>
        </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
