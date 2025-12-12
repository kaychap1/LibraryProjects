import { SessionProvider } from 'next-auth/react';
import { BookProvider } from 'src/context/BookContext.js';
import Navbar from 'src/components/Navbar.js';

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
