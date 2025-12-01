import "./globals.css";

export const metadata = {
  title: "NCL S11 Replays",
  description: "View NCL Season 11 Replays",
  icons: {
    icon: "/favicon.png",
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}