import type { Metadata } from "next";
import "@/app/globals.css";
import AppShell from "./components/layout/AppShell";

export const metadata: Metadata = {
  title: "Jack Limas",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Si necesitas scripts globales, ponlos aquí */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("theme") || "system";
                  var mql = window.matchMedia("(prefers-color-scheme: dark)");
                  var isDark = theme === "dark" || (theme === "system" && mql.matches);
                  document.documentElement.classList.toggle("dark", isDark);
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
