import { SessionProvider } from 'next-auth/react';
import { BookProvider } from '../context/BookContext';
import Navbar from '../components/Navbar.js';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <BookProvider>
        <Navbar />
        <Component {...pageProps} />
      </BookProvider>
    </SessionProvider>
  );
}

export default MyApp;
