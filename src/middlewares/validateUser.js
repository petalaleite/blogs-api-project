const validateNameAndPassword = (req, res, next) => {
  const { displayName, password } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long', 
    });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const verify = regex.test(email); 
  if (!verify) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

module.exports = {
  validateNameAndPassword, 
  validateEmail,
};