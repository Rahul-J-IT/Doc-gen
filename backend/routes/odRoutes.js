const express = require('express');
const router = express.Router();
const { 
  createOD, getMyODs, getSingleODUser, getAllODsAdmin, 
  updateODUser, getSingleODAdmin, updateODAdmin, deleteOD 
} = require('../controllers/odController');
const { authenticate } = require('../middlewares/authenticate');
const { authorize } = require('../middlewares/authenticate');

// Student routes
router.post('/od', authenticate, createOD);
router.get('/myods', authenticate, getMyODs);
router.get('/od/:id', authenticate, getSingleODUser);
router.put('/od/:id', authenticate, updateODUser);
router.delete('/od/:id', authenticate, deleteOD);

// Admin/OD in-charge routes
router.get('/admin/ods', authenticate, authorize('admin'), getAllODsAdmin);
router.get('/admin/od/:id', authenticate, authorize('admin'), getSingleODAdmin);
router.put('/admin/od/:id', authenticate, authorize('admin'), updateODAdmin);
router.delete('/admin/od/:id', authenticate, authorize('admin'), deleteOD);

module.exports = router;
