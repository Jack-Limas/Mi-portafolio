import type { Metadata } from "next";
import "./globals.css";
import AppShell from "./components/layout/AppShell";
import { LocaleProvider } from "@/hooks/useLocale";

export const metadata: Metadata = {
  title: "Jack Limas",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black antialiased dark:bg-[#0B1220] dark:text-white">
        <LocaleProvider>
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
