// server/routes/analysisRoutes.js
import express           from 'express';
import { protect }       from '../middleware/authMiddleware.js';
import { profileUpload } from '../middleware/uploadMiddleware.js';
import { runAnalysis }   from '../controllers/analysisController.js';

const router = express.Router();

// multer will extract resume from the multipart form
router.post('/', protect, profileUpload, runAnalysis);

export default router;
