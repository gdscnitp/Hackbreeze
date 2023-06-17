import { signIn } from 'next-auth/client';

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    });

    if (result.error) {
      res.status(401).json({ message: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Sign in successful' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}
