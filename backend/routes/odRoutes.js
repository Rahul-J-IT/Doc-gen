const express = require('express');
const router = express.Router();
const odController = require('../controllers/odController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');

// Student routes
router.post('/od',isAuthenticatedUser, odController.createOD);
router.get('/myods',isAuthenticatedUser,odController.getMyODs);
router.get('/od/:id',isAuthenticatedUser, odController.getSingleODUser);
router.put('/od/:id', isAuthenticatedUser,odController.updateODUser);
router.delete('/od/:id',isAuthenticatedUser, odController.deleteOD);

// Admin/OD in-charge routes
router.get('/admin/ods', isAuthenticatedUser,authorizeRoles('admin'),odController.getAllODsAdmin);
router.get('/admin/od/:id',isAuthenticatedUser,authorizeRoles('admin'), odController.getSingleODAdmin);
router.put('/admin/od/:id',isAuthenticatedUser ,authorizeRoles('admin'),odController.updateODAdmin);
router.delete('/admin/od/:id',isAuthenticatedUser,authorizeRoles('admin'), odController.deleteOD);

module.exports = router;


