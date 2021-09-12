import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    userId: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    duration: {
        required: true,
        type: Number
    },
    date: Date
    /*dateFormatted: String*/ 
}, {
    versionKey: false
});

export default model("Task", taskSchema);