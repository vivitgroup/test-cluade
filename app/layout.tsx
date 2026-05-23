import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "متجر القثمي | Guthmi Store — أقمشة فاخرة للتنجيد والستائر",
  description:
    "متجر القثمي للأقمشة الفاخرة — منذ 1942. أجود أقمشة التنجيد والستائر المستوردة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
