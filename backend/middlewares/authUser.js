import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const { usertoken } = req.headers;

    if (!usertoken) {
      res.json({ success: false, message: "Not Authorized Login Again" });
    }
    const decode_token = jwt.verify(usertoken, process.env.JWT_SECRET);
   req.body.userId = decode_token.id
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;