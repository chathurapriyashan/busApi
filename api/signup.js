import bcrypt from 'bcryptjs';

const users = []; // Use a DB in production

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  users.push({ email, password: hashed });

  res.status(201).json({ message: 'User created' });
}
