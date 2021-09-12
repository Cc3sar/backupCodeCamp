import { Router } from 'express';
import shortUrlControllers from './shortUrl.controllers';
import verifyUrl from '../../middlewares/verifyUrl.middleware';

const router = Router();

router.get('/', shortUrlControllers.home)

router.post('/shorturl', verifyUrl, shortUrlControllers.shortUrl);

router.get('/shorturl/:short_url', shortUrlControllers.redirectUrl);

export default router;