import bcrypt from 'bcryptjs';
import { signToken } from './middleware';

const users = []; // Same array as in signup

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid password' });

  const token = signToken({ email });
  res.status(200).json({ token });
}
