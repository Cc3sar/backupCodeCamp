import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    name: String,
    shortName: String
});

export default model("Url", urlSchema);