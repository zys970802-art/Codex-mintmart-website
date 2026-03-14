import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MintMart | 机构级 RWA 平台官网",
  description: "一站式、机构级、多资产、链上透明的 RWA 平台官网",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
