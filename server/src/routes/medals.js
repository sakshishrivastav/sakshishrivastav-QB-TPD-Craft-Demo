import { Router } from 'express';

import medalsController from '../controllers/medalsController.js';
import validate from '../middlewares/validate.js';
import postModelRequest from '../validators/postModel.js';

const router = Router();
router.get('/medals', medalsController.getMedals);

router.post('/medals', validate(postModelRequest), medalsController.saveMedal);
export default router;
