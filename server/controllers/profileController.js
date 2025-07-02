// server/controllers/profileController.js
import Profile from '../models/profile.js';

export const getMyProfile = async (req, res) => {
  const prof = await Profile.findOne({ user: req.userId });
  return res.json(prof);
};

export const createOrUpdateProfile = async (req, res) => {
  const { linkedIn, github, experienceYears, careerField } = req.body;
  const resumePath = req.file?.path.replace(/\\/g, '/');
  const data = { linkedIn, github, experienceYears, careerField, resumePath };
  const prof = await Profile.findOneAndUpdate(
    { user: req.userId },
    { $set: data },
    { upsert: true, new: true }
  );
  res.json(prof);
};

export const deleteProfile = async (req, res) => {
  try {
    const prof = await Profile.findOneAndDelete({ user: req.userId });
    if (!prof) return res.status(404).json({ message: 'Profile not found' });
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
