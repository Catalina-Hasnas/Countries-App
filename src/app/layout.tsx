import "../css/globals.css";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

import { Header } from "@/components/Header";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Body } from "@/components/Body";

const font = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Countries App",
  description: "Get information about countries",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <ThemeProvider>
        <Body>
          <>
            <Header />
            <main>{children}</main>
          </>
        </Body>
      </ThemeProvider>
    </html>
  );
}
