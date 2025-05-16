const { verifyToken } = require('../middleware/auth');

exports.module = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const user = verifyToken(req);
  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  const { ticketId, amount } = req.body;
  // Simulate payment
  res.status(200).json({ message: 'Payment successful', ticketId, amount });
}
