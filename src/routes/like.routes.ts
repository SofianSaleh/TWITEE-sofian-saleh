import express from 'express';

import requireUser from '../middleware/requireUser';
import {
  getAllLikesTweetHandler,
  likeTweetHandler,
  unlikeTweetHandler,
} from '../controller/like.controller';

const router = express.Router();

router.post('/:id', requireUser, likeTweetHandler);
router.post('/unlike/:id', requireUser, unlikeTweetHandler);
router.get('/:id', requireUser, getAllLikesTweetHandler);

export default router;
