const express = require('express');

const router = express.Router();

const Contestant = require('../models/contestant');

router.get('/', async (req, res) => {
  try {
    const resp = await Contestant.find();
    res.json(resp);
  } catch (err) {
    // you gotta fix somethin
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const contestant = new Contestant({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const resp = await contestant.save();
    res.status(201).json(resp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const resp = await Contestant.findById(req.params.id);
    res.json(resp);
  } catch (err) {
    // you gotta fix somethin
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const resp = await Contestant.findByIdAndDelete(req.params.id);
    res.json(resp);
  } catch (err) {
    res.sendStatus(500).json({ message: err.message });
  }
});

module.exports = router;
