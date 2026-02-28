import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { Nav } from '@/components/Nav';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SITE } from '@/constants';

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.title}`,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} | Portfolio`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Portfolio`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased min-h-screen custom-cursor bg-black text-white`}
      >
        <Nav />
        <ScrollProgress />
        <CustomCursor />
        {/* Cursor is CSS-only in globals.css to avoid lag */}
        {children}
      </body>
    </html>
  );
}
