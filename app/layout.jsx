import "./globals.css";

export const metadata = {
  title: "My First Next App",
  description: "Generated by create next app",
  Keywords: "next,react,app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
