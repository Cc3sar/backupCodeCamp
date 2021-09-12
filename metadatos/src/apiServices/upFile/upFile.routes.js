import { Router } from 'express';
import multer from 'multer';
import upFile from './upFile.controllers';

const upload = multer({ dest: 'uploads/' })

const router = Router();

router.post('/', upload.single('upfile'), upFile);

export default router;