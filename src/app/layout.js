// src/app/layout.js
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "HARUyes Project",
  description: "Next.js Navigation Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* 네비게이션 메뉴 */}
        <nav style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
          <Link href="/" style={{ marginRight: "15px" }}>홈</Link>
          <Link href="/about" style={{ marginRight: "15px" }}>소개</Link>
          <Link href="/contact" style={{ marginRight: "15px" }}>문의</Link>
          <Link href="/products">제품</Link>
        </nav>

        {/* 각 페이지 내용 */}
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
