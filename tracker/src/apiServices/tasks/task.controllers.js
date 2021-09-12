import Task from "./task.model";

const createTask = (req, res) => {
  const newTask = new Task({
    userId: req.params._id,
    date: req.body.date,
    duration: req.body.duration,
    description: req.body.description
  });

  newTask.save();

  const dateFormat = newTask.date.toUTCString();
  const dateFormatted1 = dateFormat.split(" 00");
  const dateFormatted2 = dateFormatted1[0].split(",");

  const dateFormatted3 = (dateFormatted2[0] + dateFormatted2[1]).split(" ");

  const fullDateFormat = dateFormatted3[0] + " " + dateFormatted3[2] + " " + dateFormatted3[1] + " " + dateFormatted3[3];

  res.json({
    _id: newTask.userId,
    username: req.params.username,
    date: fullDateFormat,
    duration: newTask.duration,
    description: newTask.description
  });
};

const showUserTasks = async (req, res) => {
  const { from, to, limit } = req.query;

  const count = await Task.find({ userId: { $in: req.params._id } }).count();
  const user = req.body.userTask;
  let showData;
  const limitInt = parseInt(limit);

  console.log(typeof limit);
  try {
    if (!from || !to || !limit) {
      showData = await Task.find(
        { userId: { $in: req.params._id } },
        { _id: 0, userId: 0 }
      );
    } else {
      showData = await Task.find(
        { date: { $gte: new Date(from), $lte: new Date(to) } },
        { _id: 0, userId: 0 }
      ).limit(limitInt);
    }

    res.json({
      _id: user._id,
      username: user.username,
      count,
      log: showData
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  createTask,
  showUserTasks
};
