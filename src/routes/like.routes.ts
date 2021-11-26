import express from 'express';

import requireUser from '../middleware/requireUser';
import {
  getAllLikesTweetHandler,
  likeTweetHandler,
} from '../controller/like.controller';

const router = express.Router();

router.post('/like/:id', requireUser, likeTweetHandler);
router.post('/unlike/:id', requireUser, likeTweetHandler);
router.get('/like/:id', requireUser, getAllLikesTweetHandler);

export default router;
