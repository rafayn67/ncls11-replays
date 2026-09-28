import "./globals.css";

export const metadata = {
  title: "NCL S12 Replays",
  description: "View NCL Season 12 Replays",
  icons: {
    icon: "/NCLDesign2025.png"
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