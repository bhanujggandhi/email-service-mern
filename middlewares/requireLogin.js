module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).send({ error: 'You must log in' });
  }
};
