import "@/src/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Top } from "@/src/components/Top";
import { Footer } from "@/src/components/Footer";
import { Providers } from "./providers";
import GoogleAnalytics from "@/src/components/GoogleAnalytics";

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
                <div>
                  <div>
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
