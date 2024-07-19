import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.scss"
import { Wrapper } from "components/ui/grid/Wrapper";
import Header from "components/Header/Header";

const inter = Inter({ subsets: ["latin"] ,weight:["700","400","900","800"]});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page grid",
  icons:"/icon/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
