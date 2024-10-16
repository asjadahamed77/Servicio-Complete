import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const { usertoken } = req.headers;
    

    if (!usertoken) {
      res.json({ success: false, message: "Not Authorized Login Again" });
    }
    const decodedToken = jwt.verify(usertoken, process.env.JWT_SECRET);
   req.body.userId = decodedToken.id
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;