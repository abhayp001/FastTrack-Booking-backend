const TravelRequest = require('../models/TravelRequest');
const TravelHistory = require('../models/TravelHistory');

// Dashboard Data
exports.getDashboardData = async (req, res) => {
  try {
    const upcomingTrips = await TravelRequest.find({ user: req.user.id, status: 'Approved' }).limit(5);
    const travelRequests = await TravelRequest.find({ user: req.user.id }).sort({ createdAt: -1 }).limit(5);

    res.json({
      upcomingTrips,
      travelRequests,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
