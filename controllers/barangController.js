const db = require('../config/db');

exports.getAllBarang = (req, res) => {
  const query = 'SELECT a.*, b.nm_barangjns FROM barang a LEFT JOIN barangjns b ON a.id_barangjns = b.id_barangjns';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.addBarang = (req, res) => {
  const { kode_barang, nm_barang, id_barangjns, stok, harga } = req.body;
  const query = 'INSERT INTO barang (kode_barang, nm_barang, id_barangjns, stok, harga) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [kode_barang, nm_barang, id_barangjns, stok, harga], (err, results) => {
    if (err) {
      res.status(500).send('gagal');
    } else {
      res.send('sukses');
    }
  });
};

exports.deleteBarang = (req, res) => {
  const { kode_barang } = req.body;
  const query = 'DELETE FROM barang WHERE kode_barang = ?';
  db.query(query, [kode_barang], (err, results) => {
    if (err) {
      res.status(500).send('gagal');
    } else {
      res.send('sukses');
    }
  });
};

exports.getBarangById = (req, res) => {
  const { kode_barang } = req.params; // Menggunakan req.params untuk mengambil parameter dari URL
  const query = 'SELECT a.*, b.nm_barangjns FROM barang a LEFT JOIN barangjns b ON a.id_barangjns = b.id_barangjns WHERE kode_barang = ?';
  db.query(query, [kode_barang], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.updateBarang = (req, res) => {
  const { kode_barang, nm_barang, id_barangjns, stok, harga } = req.body;
  const query = 'UPDATE barang SET nm_barang = ?, id_barangjns = ?, stok = ?, harga = ? WHERE kode_barang = ?';
  db.query(query, [nm_barang, id_barangjns, stok, harga, kode_barang], (err, results) => {
    if (err) {
      res.status(500).send('gagal');
    } else {
      res.send('sukses');
    }
  });
};
