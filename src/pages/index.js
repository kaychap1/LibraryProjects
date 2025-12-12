import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to BookTracker</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Your personal space to manage your reading journey.</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
