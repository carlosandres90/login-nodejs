const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

userSchema.method('encryptPassword', function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
});

userSchema.method('comparePassword', function(password) {
    return bcrypt.compareSync(password, this.password);
});

module.exports = mongoose.model('user', userSchema);