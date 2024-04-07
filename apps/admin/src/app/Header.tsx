'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRecoilState } from 'recoil';
import { logIn } from '../store';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Header() {
  // const admin = localStorage.getItem('admin');
  // const [isSignIn, setIsSignIn] = useRecoilState<boolean>(logIn);
  const { data: session } = useSession();
  // console.log('usesession in header', session);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            gymcents ADMIN
          </Typography>
          <div style={{ display: 'flex', gap: '10px' }}>
            {session && (
              <>
                <Link href="/">
                  <Button color="inherit" onClick={() => {}}>
                    Add Course
                  </Button>
                </Link>

                <Link href="/">
                  <Button color="inherit" onClick={() => {}}>
                    All Courses
                  </Button>
                </Link>

                <Link href="/api/auth/signout">
                  <Button color="inherit" onClick={() => {}}>
                    Log out
                  </Button>
                </Link>
              </>
            )}
            {!session && (
              // <Link href="/signIn">
              <Button onClick={() => signIn()} color="inherit">
                Sign In
              </Button>
              // </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
