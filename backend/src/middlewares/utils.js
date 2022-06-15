const useMiddleWareUnless = (path, mw) => {
  return (req, res, next) => {
    return path.includes(req.path) ? next() : mw(req, res, next);
  };
};

module.exports = {
  useMiddleWareUnless,
};
