import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Family and Friends Cycle Spot - Ride the Future',
  description: 'A cinematic promotional experience capturing the joy and freedom of cycling.',
  themeColor: '#0F172A'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
