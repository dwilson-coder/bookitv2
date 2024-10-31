import mongoose, { Schema } from "mongoose";

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter room name"],
  },
});
