import User from "../apiServices/users/user.model";

const verifyTask = async (req, res, next) => {
  const checkUser = await User.findById(req.params._id);

  if (!checkUser) return res.send("not found");

  req.params.username = checkUser.username;

  if (!req.body.description) return res.send("Path `description` is required.");

  if (!req.body.duration) return res.send("Path `duration` is required.");

  if (!req.body.date) req.body.date = new Date();

  next();
};

const userTask = async (req, res, next) => {
  const checkUser = await User.findById(req.params._id);

  if (!checkUser) return res.send("not found");

  req.body.userTask = checkUser;

  next();
};

export default {
  verifyTask,
  userTask
};