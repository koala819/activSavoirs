import "@/src/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Top } from "@/src/components/templates/Top";
import { Footer } from "@/src/components/templates/Footer";
import { Providers } from "./providers";
import GoogleAnalytics from "@/src/components/util/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activ Savoirs",
  description: "Centre de formations sur mesure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className={` ${inter.className}`}>
        <Providers>
          <div
            className='flex min-h-screen min-w-screen flex-col'
            // className='min-h-screen min-w-screen'
          >
            {/* <div className='flex flex-col h-screen'> */}
            <div
            // className='flex h-24 w-screen'
            >
              <Top />
            </div>
            <main
              className='flex h-auto w-auto flex-row grow'
              // className='flex-1 bg-blue-400 flex flex-col md:overflow-auto'
            >
              <GoogleAnalytics />
              {children}
              <Analytics />
            </main>
            <div className='flex w-full'>
              <Footer />
            </div>
            {/* </div> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
