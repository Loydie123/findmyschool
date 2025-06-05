import type { Metadata } from "next";
import { Navbar } from "@/components/layout-navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "FindMySchool",
  description: "Find and apply for scholarships that match your profile. Your gateway to educational opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
