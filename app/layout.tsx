import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBarApp from "@/components/navigation/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import MobileNav from "@/components/navigation/MobileNav";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative bg-blue-50 text-muted-foreground overflow-x-hidden scroll-smooth selection:bg-primary selection:text-white")}>
        <Toaster />
        <div className="h-20 pb-2">
          <ThemeProvider  attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
              <NavBarApp />
              <MobileNav />
          </ThemeProvider>
        </div>
        {children}
      </body>
    </html>
  );
}
