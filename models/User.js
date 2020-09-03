const { model, Scrhema, Schema } = require(`mongoose`);


// The Database Schema
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});

// What is the model going to be and what will its schema be?
module.exports = model('User', userSchema)