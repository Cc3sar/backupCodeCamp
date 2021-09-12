import User from '../apiServices/users/user.model';

const verifyUser = async (req, res, next) => {
    const checkUser = await User.findOne({ username: { $in: req.body.username } });

    if(checkUser) return res.send("Username already taken");

    next();
};

export default verifyUser;