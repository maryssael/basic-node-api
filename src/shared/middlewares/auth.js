const jwt = require('jsonwebtoken');

function validateJwt(req, res, next) {
  const authHeader = req.headers && req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).send('No authorization');
    return;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { audience: ['user'] }, (err, user) => {
    if (err) {
      res.status(403).send(err.message);
      return;
    }

    req.user = user;
    next();
  });
}

module.exports = { validateJwt };
