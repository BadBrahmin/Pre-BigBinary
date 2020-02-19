const Label = require('../models/label');

module.exports = {
  createLabel: (req, res) => {
    const label = new Label(req.body);
    label
      .save()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || 'Some error occurred while creating the label.',
        });
      });
  },

  findAllLabels: (req, res) => {
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
    console.log(req.body);
    Label.findById(req.params._id)
      .then(label => {
        if (!label) {
          return res.status(404).send({
            message: `Label not found with id ${req.params._id}`,
          });
        }
        res.json({ label });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `Label not found with id ${req.params._id}`,
          });
        }
        return res.status(500).json({
          message: `Error retrieving label with id ${req.params._id}`,
        });
      });
  },

  updateLabel: (req, res) => {
    Label.findByIdAndUpdate(
      req.body._id,
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
            message: `label not found with id ${req.body._id}`,
          });
        }
        res.json(label);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: `label not found with id ${req.params._id}`,
          });
        }
        return res.status(500).json({
          message: `Error updating label with id ${req.params._id}`,
        });
      });
  },

  deleteLabel: (req, res) => {
    console.log(req.params, 'params');
    const { id } = req.params;

    Label.findByIdAndDelete(id)
      .then(label => {
        if (!label) {
          return res.status(404).send({
            message: 'label not found with id ' + req.params.id,
          });
        }
        return res.json({ message: 'label deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
            message: 'label not found with id ' + req.params.id,
          });
        }
        return res.status(500).send({
          message: 'Could not delete label with id ' + req.params.id,
        });
      });
  },
};
