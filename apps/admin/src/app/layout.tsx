import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RecoidContextProvider from './recoilContextProvider';
import Header from './Header';
import { NextAuthProvider } from '@/providers/next-auth';
import { Logo, MaxWidthWrapper } from '@gymcents/ui';
import Link from 'next/link';
import { Divider } from '@/ui/shared/icons';
import { ReactNode, Suspense } from 'react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADMIN',
  description: 'course',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <RecoidContextProvider>
        {/* <Header /> */}

        <div className="min-h-screen w-full bg-gray-50">
          <div className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-white">
            <MaxWidthWrapper>
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <Link href="/" className="hidden sm:block">
                    <Logo className="h-8 w-8 transition-all duration-75 active:scale-95" />
                  </Link>
                  <Divider className="hidden h-8 w-8 text-gray-200 sm:ml-3 sm:block" />
                  {/* <WorkspaceSwitcher /> */}
                  {/* <UpgradeBanner /> */}
                </div>
                <div className="flex items-center space-x-6">
                  <div>ketan</div>
                  <a
                    href=""
                    className="hidden text-sm text-gray-500 transition-colors hover:text-gray-700 sm:block"
                    target="_blank"
                  >
                    Changelog
                  </a>
                  <a
                    href=""
                    className="hidden text-sm text-gray-500 transition-colors hover:text-gray-700 sm:block"
                    target="_blank"
                  >
                    Help
                  </a>
                  {/* <UserDropdown /> */}
                </div>
              </div>
              <Suspense fallback={<div className="h-12 w-full" />}>{/* <NavTabs /> */}</Suspense>
            </MaxWidthWrapper>
          </div>
          {children}
        </div>
      </RecoidContextProvider>
    </NextAuthProvider>
  );
}
