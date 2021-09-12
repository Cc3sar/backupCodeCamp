import express from 'express';
import appConfig from './config/env';
import mongoConnect from './config/mongoConnect';
import cors from 'cors';

//routes
import home from './home';
import userRoutes from './apiServices/users/user.routes';
import taskRoutes from './apiServices/tasks/task.routes';

mongoConnect();

const app = express();

app.use(cors());

app.use(express.static(process.cwd() +'/public')); //css

app.use(express.urlencoded({ extended: false }))

app.use(home);

app.use('/api/users', userRoutes);
app.use('/api/users', taskRoutes);

app.listen(appConfig.port, _ => console.log(`Server On PORT ${ appConfig.port }`));