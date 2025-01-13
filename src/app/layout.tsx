import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
