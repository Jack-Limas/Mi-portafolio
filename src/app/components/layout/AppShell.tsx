"use client";
import { ThemeProvider } from "@/hooks/useTheme";
import { LocaleProvider } from "@/hooks/useLocale";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Navbar />
        {children}
        <Footer />
      </LocaleProvider>
    </ThemeProvider>
  );
}
