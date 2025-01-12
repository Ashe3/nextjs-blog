import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import './globals.css';

export const RootLayout = ({ children }: { children: ReactNode }) => (
  <html>
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
