const Label = require('../models/label');

module.exports = {
  createLabel: (req, res) => {
    const label = new Label(req.body);
    label
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while creating the label.',
        });
      });
  },

  findAllLabels: (req, res) => {
    console.log('hit find all');
    Label.find({})
      .then(labels => {
        console.log(labels, 'labels');
        res.json({ labels });
      })
      .catch(err => {
        console.log(err, 'findall err');
        res.status(500).json({
          message:
            err.message || 'Some error occurred while retrieving labels.',
        });
      });
  },

  findOneLabel: (req, res) => {
    const id = req.params.id;
    Label.findById(id)
      .then(label => {
        if (!label) {
          return res.status(404).send({
            message: 'Label not found with id' + id,
          });
        }
        res.status(200).json({ label });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Label not found with id' + id,
          });
        }
        return res.status(500).json({
          message: 'Error retrieving label with id' + id,
        });
      });
  },

  updateLabel: (req, res) => {
    const id = req.params.id;

    Label.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        issues: req.body.issues,
      },
      { new: true },
    )
      .then(label => {
        if (!label) {
          return res.status(404).send({
            message: 'Label not found with id' + id,
          });
        }
        res.json(label);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Label not found with id' + id,
          });
        }
        return res.status(500).json({
          message: 'Error updating label with id' + id,
        });
      });
  },

  deleteLabel: (req, res) => {
    console.log(req.params, 'params');
    const id = req.params.id;

    Label.findByIdAndDelete(id)
      .then(label => {
        if (!label) {
          return res.status(404).send({
            message: 'label not found with id ' + id,
          });
        }
        return res.json({ message: 'label deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'label not found with id ' + id,
          });
        }
        return res.status(500).send({
          message: 'Could not delete label with id ' + id,
        });
      });
  },
};
