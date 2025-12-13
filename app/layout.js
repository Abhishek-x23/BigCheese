
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/SessionWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BigCheese",
  description: "This is the most relevant platform to get funded by your loved ones",
   
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[93vh]">
            <div className="relative min-h-[93vh] w-full bg-slate-950">
              <div
                className="absolute inset-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
          bg-[size:14px_24px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
              ></div>

              {children}
            </div>
          </div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
