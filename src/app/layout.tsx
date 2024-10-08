import type { Metadata } from "next";
import { Waiting_for_the_Sunrise } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
import Container from "@/components/container";

const waiting_for_the_sunrise = Waiting_for_the_Sunrise({
  subsets: ["latin"],
  weight: "400"
})
export const metadata: Metadata = {
  title: "To Don't List",
  description: "To Don't List application developed by William Lowe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${waiting_for_the_sunrise.className}`}>
        <Background />
        <Container>
          {children}

        </Container>
      </body>
    </html>
  );
}
