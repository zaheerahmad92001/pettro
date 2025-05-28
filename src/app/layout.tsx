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
