import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script> */}
        <title>ARABIC-SCRATCH POC</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
