// server/server.js

import express from 'express';
import cors    from 'cors';
import dotenv  from 'dotenv';
import path    from 'path';

import { connectDB }      from './config/db.js';
import authRoutes         from './routes/authRoutes.js';
import profileRoutes      from './routes/profileRoutes.js';
import analysisRoutes     from './routes/analysisRoutes.js';

dotenv.config();
const app = express();

// Allow React (Vite) frontend to call us
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// Serve uploaded files (pictures, resumes) statically
app.use('/uploads', express.static(path.resolve('uploads')));

// Parse JSON bodies
app.use(express.json());

// API routes
app.use('/api/auth',     authRoutes);
app.use('/api/profile',  profileRoutes);
app.use('/api/analysis', analysisRoutes);

// Connect to DB & start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
// Handle 404 errors
app.use((req, res) => { 
  res.status(404).json({ msg: 'Not Found' });
});