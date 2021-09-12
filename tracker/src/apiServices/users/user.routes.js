import { Router } from 'express';
import userController from './user.controllers';
import verifyUser from '../../middlewares/verifyUser.middleware';

const router = Router();

router.post('/', verifyUser, userController.createUser);

router.get('/', userController.showUsers);

export default router;