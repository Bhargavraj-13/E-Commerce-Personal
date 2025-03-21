const User = require('../back-end/models/userSchema');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    Timestamp: {
        type: Date,
        default: Date.now,
    }
});

export default model("User", userSchema); 