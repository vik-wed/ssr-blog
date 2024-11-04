export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <title>NEXT.js + Contentful Blog</title>
        <meta name="description" content="Blog testing Next.js SSR features" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vik Wedel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>{children}</body>
    </html>
  );
}
