import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  namespace: { type: String, required: true },
  key: { type: String, required: true },
  value: { type: Number, default: 0 },
});

counterSchema.index({ namespace: 1, key: 1 }, { unique: true }); // Asegurar que cada combinación de namespace/key sea única

const Counter = mongoose.model("Counter", counterSchema);

export default Counter;
