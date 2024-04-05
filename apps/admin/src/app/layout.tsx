import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoidContextProvider from './recoilContextProvider';
import Header from './Header';
import { NextAuthProvider } from '@/providers/next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADMIN',
  description: 'course',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <RecoidContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </RecoidContextProvider>
    </NextAuthProvider>
  );
}
