import type { Metadata } from "next";
import App from "@/app/App";
import { SideBar } from "@/widgets/SideBar";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page netflix",
  icons:"/icon/logo.svg"
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" >
      <body className="bg-[#252836]">
        <App>
          <div className="flex min-h-screen">
            <SideBar />
            {children}
          </div>
        </App>
      </body>
    </html>
  );
}
