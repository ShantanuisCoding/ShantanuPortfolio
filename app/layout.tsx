import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Shantanu Singh",
  description: "Portfolio of Shantanu Singh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
        </body>
    </html>
  );
}
