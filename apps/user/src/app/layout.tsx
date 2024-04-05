import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoidContextProvider from './recoilContextProvider';
import Header from './Header';
import { NextAuthProvider } from '@/providers/next-auth';
import { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'USER',
  description: 'user portal for gymcents',
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
