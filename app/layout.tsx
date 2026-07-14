import React from 'react';
import "./globals.css";
export const metadata = {
  title: 'Next.js Vercel Deploy',
  description: 'Dự án Next.js sẵn sàng deploy lên Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body style={{ 
        margin: 0, 
        fontFamily: 'sans-serif', 
        backgroundColor: '#0a0a0a', 
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        {children}
      </body>
    </html>
  );
}