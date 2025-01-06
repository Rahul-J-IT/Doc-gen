const OD = require('../models/odModel');

// Create OD
exports.createOD = async (req, res) => {
  try {
    
    const od = new OD({ ...req.body, studentId: req.user._id});
    const savedOD = await od.save();
    res.status(201).json(savedOD);
  } catch (err) {
    res.status(500).json({ error: 'Unable to create OD form' });
  }
};

// Get My ODs (Student)
exports.getMyODs = async (req, res) => {
  try {
    const ods = await OD.find({ studentId: req.user._id });
    res.status(200).json(ods);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch your ODs' });
  }
};

// Get Single OD (Student)
exports.getSingleODUser = async (req, res) => {
  try {
    
    const od = await OD.findOne({ _id: req.params.id, studentId: req.user._id });
    if (!od) return res.status(404).json({ error: 'OD not found' });
    res.status(200).json(od);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch the OD' });
  }
};

// Get All ODs (Admin)
exports.getAllODsAdmin = async (req, res) => {
  try {
    const ods = await OD.find();
    res.status(200).json(ods);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch all ODs' });
  }
};

// Get Single OD (Admin)
exports.getSingleODAdmin = async (req, res) => {
  try {
    const od = await OD.findById(req.params.id);
    if (!od) return res.status(404).json({ error: 'OD not found' });
    res.status(200).json(od);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch the OD' });
  }
};

// Update OD (Student)
exports.updateODUser = async (req, res) => {
  try {
    const od = await OD.findOneAndUpdate(
      { _id: req.params.id, studentId: req.user.id },
      req.body,
      { new: true }
    );
    if (!od) return res.status(404).json({ error: 'OD not found' });
    res.status(200).json(od);
  } catch (err) {
    res.status(500).json({ error: 'Unable to update the OD' });
  }
};

// Update OD (Admin)
exports.updateODAdmin = async (req, res) => {
  try {
    const od = await OD.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!od) return res.status(404).json({ error: 'OD not found' });
    res.status(200).json(od);
  } catch (err) {
    res.status(500).json({ error: 'Unable to update the OD' });
  }
};

// Delete OD (User/Admin)
exports.deleteOD = async (req, res) => {
  try {
    const condition = req.user.role === 'admin' ? { _id: req.params.id } : { _id: req.params.id, studentId: req.user.id };
    const od = await OD.findOneAndDelete(condition);
    if (!od) return res.status(404).json({ error: 'OD not found' });
    res.status(200).json({ message: 'OD deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to delete the OD' });
  }
};
