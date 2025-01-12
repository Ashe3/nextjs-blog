import { ReactNode } from 'react';

export const RootLayout = ({ children }: { children: ReactNode }) => (
  <html>
    <body>{children}</body>
  </html>
);
