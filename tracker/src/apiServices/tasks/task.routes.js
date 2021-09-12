import { Router } from 'express';
import taskControllers from './task.controllers';
import taskMiddlewares from '../../middlewares/verifyTask.middleware';

const router = Router();

router.post('/:_id/exercises', taskMiddlewares.verifyTask, taskControllers.createTask);

router.get('/:_id/logs', taskMiddlewares.userTask, taskControllers.showUserTasks);

export default router;