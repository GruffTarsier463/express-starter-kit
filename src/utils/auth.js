const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Hash password
const hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
  return await bcrypt.hash(password, saltRounds);
};

// Compare password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
const generateToken = (userId, email) => {
  return jwt.sign(
    {
      sub: userId,
      email: email,
      iat: Math.floor(Date.now() / 1000),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
      audience: 'express-starter-kit',
      issuer: 'express-starter-kit',
    }
  );
};

// Verify JWT token
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, {
    audience: 'express-starter-kit',
    issuer: 'express-starter-kit',
  });
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};