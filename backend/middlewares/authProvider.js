import jwt from 'jsonwebtoken'

const authProvider = async (req, res, next) => {
  try {
    const { providertoken } = req.headers;

    if (!providertoken) {
      res.json({ success: false, message: "Not Authorized Login Again" });
    }
    const decode_token = jwt.verify(providertoken, process.env.JWT_SECRET);
   req.body.providerId = decode_token.id
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authProvider;