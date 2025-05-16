import { verifyToken } from './middleware';

const tickets = []; // Same array as in create-ticket

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  const { id } = req.query;
  const ticket = tickets.find(t => t.id === id);
  if (!ticket) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(ticket);
}
