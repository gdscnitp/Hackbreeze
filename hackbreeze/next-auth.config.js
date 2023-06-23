// import Providers from 'next-auth/providers';

// const options = {
//   providers: [
//     Providers.Google({
//       clientId: 'YOUR_GOOGLE_CLIENT_ID',
//       clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
//     }),
//     // Add more providers here if needed
//   ],
//   // Add additional options as needed
// };

// export default options;

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your own logic to authenticate the user
        // e.g., querying the database
        const user = await getUserByEmail(credentials.email);
        if (user && verifyPassword(credentials.password, user.password)) {
          // Return the authenticated user
          return Promise.resolve(user);
        } else {
          // Return null if authentication fails
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // Add other options as needed
};

export default NextAuth(options);

