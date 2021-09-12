import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
})

export default router;