import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { profileUpload } from '../middleware/uploadMiddleware.js';
import {
  getMyProfile,
  createOrUpdateProfile,
  deleteProfile
} from '../controllers/profileController.js';

const router = express.Router();

router.get('/me', protect, getMyProfile);
router.post('/', protect, profileUpload, createOrUpdateProfile);
router.delete('/', protect, deleteProfile);

export default router;
