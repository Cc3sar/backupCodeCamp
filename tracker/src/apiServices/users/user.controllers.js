import User from './user.model';

const createUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username
    });

    newUser.save();

    res.json({ username: newUser.username, _id: newUser._id })
};

const showUsers = async (req, res) => {
    const users = await User.find();

    res.send(users);
};

export default {
    createUser,
    showUsers
};