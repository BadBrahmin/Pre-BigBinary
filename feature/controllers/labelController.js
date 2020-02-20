const Label = require('../models/label');

module.exports = {
  createLabel: (req, res) => {
    const label = new Label(req.body);
    label
      .save()
      .then(label => {
        res.status(200).json(label);
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
        res.status(200).json({ labels });
      })
      .catch(err => {
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
          return res.status(404).json({
            message: 'Label not found with id' + id,
          });
        }
        res.status(200).json({ label });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
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
    // const issues = [];

    const { name, description, color, issues } = req.body;
    if (!name || !description || !color) {
      return res.status(204).json({
        message: 'All fields required',
      });
    }

    Label.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        // issues: req.body.issues,
      },
      { new: true },
    )
      .then(label => {
        if (!label) {
          return res.status(404).json({
            message: 'Label not found with id' + id,
          });
        }
        res.status(200).json(label);
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({
            message: 'Label not found with id' + id,
          });
        }
        return res.status(500).json({
          message: 'Error updating label with id' + id,
        });
      });
  },

  deleteLabel: (req, res) => {
    const id = req.params.id;

    Label.findByIdAndDelete(id)
      .then(label => {
        if (!label) {
          return res.status(404).json({
            message: 'label not found with id ' + id,
          });
        }
        return res.status(200).json({ message: 'label deleted successfully!' });
      })
      .catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).json({
            message: 'label not found with id ' + id,
          });
        }
        return res.status(500).json({
          message: 'Could not delete label with id ' + id,
        });
      });
  },
};
