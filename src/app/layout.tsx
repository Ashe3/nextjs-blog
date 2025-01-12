import { ReactNode } from 'react';
import './globals.css';

export const RootLayout = ({ children }: { children: ReactNode }) => (
  <html>
    <body>{children}</body>
  </html>
);

export default RootLayout;
