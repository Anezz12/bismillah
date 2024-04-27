import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "sena",
  authors: {
    name: "Harsena Argretya",
  },

  description:
    "Based in Yogyakarta Indonesia, I am currently studying at Amikom University Yogyakarta as an Informatics student.",
  openGraph: {
    title: "Portofolio",
    description:
      "Based in Yogyakarta Indonesia, I am currently studying at Amikom University Yogyakarta as an Informatics student.",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Harsena",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Portofolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
