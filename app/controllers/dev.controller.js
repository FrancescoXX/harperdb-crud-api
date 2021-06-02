// [GET] ../dev/version
exports.getVersion = (req, res, next) => {
  console.log("Get Version...");
  return res.status(200).json({ 'HarperDB tutorial version': '1.0.0' });
};
