const mongoose = require('mongoose');
const Schema = mongoose;

const labelSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  issues: [],
});

const Label = mongoose.model('Label', labelSchema);

module.exports = Label;
