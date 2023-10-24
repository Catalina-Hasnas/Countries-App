import "./css/globals.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Body } from "./components/Body";

export const metadata: Metadata = {
  title: "Countries App",
  description: "Get information about countries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Body>
          <>
            <Header />
            {children}
          </>
        </Body>
      </ThemeProvider>
    </html>
  );
}
