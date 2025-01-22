const TravelHistory = require('../models/TravelHistory');

// Get travel history
exports.getTravelHistory = async (req, res) => {
  try {
    const history = await TravelHistory.find({ user: req.user.id });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
