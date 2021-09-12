import express from 'express';
import cors from 'cors';
import shortUrlRoutes from './apiServices/shortUrl/shortUrl.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(shortUrlRoutes);

app.use('/api', shortUrlRoutes);

export default app;