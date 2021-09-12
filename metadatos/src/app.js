import express, { urlencoded } from 'express';
import cors from 'cors';

import home from './home';
import upFileRoutes from './apiServices/upFile/upFile.routes';

const app = express();

app.use(cors());

app.use(express.static(process.cwd() + '/public')); //css

app.use(express.urlencoded({ extended: false }));

app.use(home);

app.use('/api/fileanalyse', upFileRoutes);

export default app;