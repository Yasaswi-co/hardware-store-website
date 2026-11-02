/*
  Free website template by 8B: https://8b.com/templates/sixpenny/
  Source: https://github.com/8bsite/hardware-store-website-template
  MIT License (code) https://8b.com/ · Photos: Unsplash License, see CREDITS.md · Fonts: Google Fonts (OFL)
  Next.js port of the one-file template. Notes for people and AI agents: README.md and AGENTS.md.
*/
import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Sixpenny Hardware — the small parts that hold a home together';
const description = 'Sixpenny Hardware on Example Road, Northfield: screws sold by the one, keys cut while you wait, paint mixed to any chip, tool hire by the weekend and Saturday fix-it classes. Open seven days.';

export const metadata: Metadata = {
  title,
  description,
  generator: '8B Templates',
  // placeholder: og-image (no image: drop images and set twitter card to 'summary')
  openGraph: { type: 'website', title, description, images: ['https://your-domain.example/preview.png'] },
  twitter: { card: 'summary_large_image' },
  // placeholder: favicon
  icons: { icon: "data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2064%2064'%3E%3Crect%20width%3D'64'%20height%3D'64'%20rx%3D'14'%20fill%3D'%231a1a1a'%2F%3E%3Ctext%20x%3D'32'%20y%3D'45'%20font-family%3D'Arial%2CHelvetica%2Csans-serif'%20font-size%3D'38'%20font-weight%3D'700'%20text-anchor%3D'middle'%20fill%3D'%23ffffff'%3ES%3C%2Ftext%3E%3C%2Fsvg%3E" },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preload" href="https://fonts.gstatic.com/s/hostgrotesk/v5/co3BmWBnlCJ3U42vbbfdwMjZpFjm.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body className="m-text">{children}</body>
    </html>
  );
}
