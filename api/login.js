const bcrypt = require('bcryptjs');
const { signToken } =  require('../middleware/auth');
const { getAllUsersData } = require('../Controllers/DBController');

exports.login = async function(req, res) {

  const { email, password } = req.body;
  if(!email || !password) res.status(400).json({ status:"error",message:"no user name of password"})

  const user = (await getAllUsersData()).find(u => u.email === email);
  console.log(user , await getAllUsersData())
  if (!user) return res.status(401).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid password' });

  const token = signToken({ email });
  res.status(200).json({ email ,token });
}
