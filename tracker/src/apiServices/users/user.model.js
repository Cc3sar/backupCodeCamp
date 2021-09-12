import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    }
}, {
    versionKey: false
});

export default model("User", userSchema);