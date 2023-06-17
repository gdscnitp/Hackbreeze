import { getSession, signOut } from 'next-auth/client';

export default function Profile({ user }) {
  const handleSignOut = async () => {
    await signOut();
    // Redirect to the signin page or any other desired route
    window.location.href = '/auth/signin';
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      {/* Add your profile edit form or any other content */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    // Redirect to the signin page or any other desired route
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}