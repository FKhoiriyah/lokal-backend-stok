const db = require('../config/db');

exports.getAllBarangjns = (req, res) => {
  const query = 'SELECT * FROM barangjns';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
