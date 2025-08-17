import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wolf Personal Finance App",
  description:
    "Creates a personal finance according to Frontend Mentor challenge specifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
