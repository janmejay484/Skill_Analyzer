// server/middleware/uploadMiddleware.js
import multer from 'multer';
import path   from 'path';
import fs     from 'fs';

// storage engine that auto-creates directories
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // choose folder based on field name
    const dir =
      file.fieldname === 'resume'     ? 'uploads/resumes' :
                                        'uploads/others';

    // ensure directory exists
    fs.mkdirSync(dir, { recursive: true });

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext    = path.extname(file.originalname);
    const prefix = file.fieldname === 'resume' ? 'resume' : 'other';
    cb(null, `${prefix}-${req.user.id}-${Date.now()}${ext}`);
  },
});

// file filter for resume uploads
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'resume') {
    const allowed = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowed.includes(ext)) {
      return cb(new Error('Only PDF, DOC, and DOCX files are allowed for resume!'), false);
    }
  }
  cb(null, true);
};

export const profileUpload = multer({ storage, fileFilter }).single('resume');

