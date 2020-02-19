const Label = require('../models/label');

module.exports = {
  findAllLabels: (req, res) => {
    Label.find()
      .then(labels => {
        res.send('All labels');
        // res.json({ labels });
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while retrieving labels.',
        });
      });
  },
};
