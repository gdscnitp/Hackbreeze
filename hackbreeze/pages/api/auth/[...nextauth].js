import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      // Implement your own credentials provider logic here
      async authorize(credentials) {
        // Check credentials and return user object if valid
        const user = { id: 1, name: 'John Doe', email: 'johndoe@example.com' };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ]
};

export default (req, res) => NextAuth(req, res, options);
