const { model, Scrhema, Schema } = require(`mongoose`);


// The Database Schema
const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

// What is the model going to be and what will its schema be?
module.exports = model('Post', postSchema);