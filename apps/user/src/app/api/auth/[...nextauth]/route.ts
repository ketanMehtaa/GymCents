import nextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@gymcents/prisma';

import GoogleProvider from 'next-auth/providers/google';
import { authOptions } from '@/app/auth';

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
