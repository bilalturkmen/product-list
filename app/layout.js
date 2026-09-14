import NavBar from "../components/NavBar";
import "../styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://product-list-seven.vercel.app"),
  title: "digital-ist",
  description: "a demo product listing app built with Next.js",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "digital-ist",
    description: "a demo product listing app built with Next.js",
    siteName: "digital-ist",
    images: ["/p-list.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
