const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangController');

router.get('/databarang', barangController.getAllBarang);
router.post('/tambahbarang', barangController.addBarang);
router.delete('/hapusbarang', barangController.deleteBarang);
router.get('/getbarangbyid/:kode_barang', barangController.getBarangById);
router.put('/editbarang', barangController.updateBarang);

module.exports = router;
