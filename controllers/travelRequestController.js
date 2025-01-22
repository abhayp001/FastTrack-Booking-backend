const TravelRequest = require('../models/TravelRequest');

// Submit new travel request
exports.createTravelRequest = async (req, res) => {
  const { destination, startDate, endDate, purpose } = req.body;

  try {
    const newRequest = new TravelRequest({
      user: req.user.id,
      destination,
      startDate,
      endDate,
      purpose,
    });

    console.log(newRequest);
    

    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get status of travel requests
exports.getTravelRequestStatus = async (req, res) => {
  try {
    const requests = await TravelRequest.find({ user: req.user.id });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
