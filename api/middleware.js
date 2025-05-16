import jwt from 'jsonwebtoken';

const SECRET = 'This is webtoken that create security server of this site';

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

export function verifyToken(req) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return null;

  const token = authHeader.split(' ')[1];
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
