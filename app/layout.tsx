import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/utils/providers/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import "@/utils/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <main className="flex-1 flex justify-center">
              <div className="container relative flex">{children}</div>
            </main>
          </Layout>
        </ThemeProvider>
        <ThemeSwitcher />
      </body>
    </html>
  );
}
