import React from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

const ProfilePage = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      router.push('/signin'); // Redirect to sign-in page if the user is not authenticated
    }
  }, [session, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null; // Render nothing if the user is not authenticated
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user.email}!</p>
      {/* Add profile editing form here */}
    </div>
  );
};

export default ProfilePage;
