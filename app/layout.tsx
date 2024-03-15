import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/utils/providers/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import "@/utils/styles/globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";

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
            <ReactQueryProvider>
              <main className="flex-1 flex justify-center">
                <div className="container relative flex">{children}</div>
              </main>
            </ReactQueryProvider>
          </Layout>
        </ThemeProvider>
        <ThemeSwitcher />
        <Toaster />
      </body>
    </html>
  );
}
