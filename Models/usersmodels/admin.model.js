const mongoose = require('mongoose');
const usermodel = require('./user.model');

const { Schema } = mongoose;

const adminSchema = new Schema({
  isAdmin: { type: Boolean, default: true }
});

module.exports = usermodel.discriminator('Admin', adminSchema);