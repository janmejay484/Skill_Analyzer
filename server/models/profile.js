import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema(
  {
  user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  linkedIn:          String,
  github:            String,
  experienceYears:   Number,
  careerField:       String,
  resumePath:        String,    // file path returned by Multer
  createdAt:         { type: Date, default: Date.now },
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;
