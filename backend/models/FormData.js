const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subscriptionTier: { type: String, default: 'Free' }, // New field for subscription tier
    role: { type: String, default: 'Parent' }, // New field for role
    mobileNumber: { type: String, required: true }, // New field for mobile number
    profession: { type: String, required: true }, // New field for profession
    bio: { type: String, default: '' },
    profilePhoto: { type: String, default: '' },
    subscription: { type: Object, default: {} },
    statistics: { type: Object, default: {} },
    achievements: { type: Array, default: [] },
});
const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
