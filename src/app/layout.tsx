import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breaking Bad",
  description: "Breaking Bad Characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
