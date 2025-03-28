import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Better readability
});

export const metadata = {
  title: "Political Bias & Integrity Analyzer",
  description: "Analyze political bias and fake news probability in articles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header className="top-bar">
          {" "}
          {/* Use header semantically */}
          <div className="avatar-wrapper">
            {" "}
            {/* Wrapper for positioning */}
            <a
              href="https://Calculator5329.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="avatar-link"
            >
              <div className="profile-avatar">
                {/* Ensure the src path is correct after moving the file */}
                <Image src="/profile.png" alt="Me" fill priority />
                {/* Added priority=true as it's likely LCP */}
              </div>
            </a>
          </div>
          {/* You could add other top-bar elements here, like a title */}
          {/* <h1 className="text-xl font-bold ml-16">News Bias Analyzer</h1> */}
        </header>
        <div className="min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
