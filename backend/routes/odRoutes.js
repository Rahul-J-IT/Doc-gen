const express = require('express');
const router = express.Router();
const odController = require('../controllers/odController');

// Student routes
router.post('/od', odController.createOD);
router.get('/myods', odController.getMyODs);
router.get('/od/:id', odController.getSingleODUser);
router.put('/od/:id', odController.updateODUser);
router.delete('/od/:id', odController.deleteOD);

// Admin/OD in-charge routes
router.get('/admin/ods', odController.getAllODsAdmin);
router.get('/admin/od/:id', odController.getSingleODAdmin);
router.put('/admin/od/:id', odController.updateODAdmin);
router.delete('/admin/od/:id', odController.deleteOD);

module.exports = router;
