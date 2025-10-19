const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const authMiddleware = require('../middleware/auth');

// @route   POST /api/portfolio/save
// @desc    Save or create portfolio
// @access  Private
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const portfolioData = req.body;

    // Check if portfolio already exists for user
    let portfolio = await Portfolio.findOne({ user: req.user._id });

    if (portfolio) {
      // Update existing portfolio
      portfolio = await Portfolio.findOneAndUpdate(
        { user: req.user._id },
        { ...portfolioData, user: req.user._id },
        { new: true, runValidators: true }
      );
    } else {
      // Create new portfolio
      portfolio = new Portfolio({
        ...portfolioData,
        user: req.user._id,
      });
      await portfolio.save();
    }

    res.json({
      message: 'Portfolio saved successfully',
      portfolio,
    });
  } catch (error) {
    console.error('Save portfolio error:', error);
    res.status(500).json({ message: 'Server error while saving portfolio' });
  }
});

// @route   GET /api/portfolio
// @desc    Get user's portfolio
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user._id });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json({ portfolio });
  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({ message: 'Server error while fetching portfolio' });
  }
});

// @route   PUT /api/portfolio/update
// @desc    Update portfolio
// @access  Private
router.put('/update', authMiddleware, async (req, res) => {
  try {
    const portfolioData = req.body;

    const portfolio = await Portfolio.findOneAndUpdate(
      { user: req.user._id },
      { ...portfolioData, user: req.user._id },
      { new: true, runValidators: true, upsert: true }
    );

    res.json({
      message: 'Portfolio updated successfully',
      portfolio,
    });
  } catch (error) {
    console.error('Update portfolio error:', error);
    res.status(500).json({ message: 'Server error while updating portfolio' });
  }
});

// @route   DELETE /api/portfolio
// @desc    Delete portfolio
// @access  Private
router.delete('/', authMiddleware, async (req, res) => {
  try {
    await Portfolio.findOneAndDelete({ user: req.user._id });

    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    console.error('Delete portfolio error:', error);
    res.status(500).json({ message: 'Server error while deleting portfolio' });
  }
});

module.exports = router;
