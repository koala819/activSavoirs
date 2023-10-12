import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Top } from "@/components/Top";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
      <body className={`${inter.className}`}>
        <Providers>
          <div className='min-h-screen min-w-screen'>
            <div className=' flex flex-col h-screen'>
              <Top />
              <main className='flex-1'>
                <div className='w-full lg:w-8/12 px-4 mx-auto mt-6'>
                  <div className='flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0'>
                    <GoogleAnalytics />
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
