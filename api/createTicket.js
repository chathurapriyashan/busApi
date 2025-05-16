import { verifyToken } from './middleware';
import { v4 as uuidv4 } from 'uuid';

const tickets = [];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  const { from, to, price } = req.body;
  const ticket = { id: uuidv4(), user: user.email, from, to, price };
  tickets.push(ticket);

  res.status(201).json(ticket);
}
