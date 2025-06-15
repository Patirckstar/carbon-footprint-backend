import mongoose from "mongoose"

const calculationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  results: {
    energy: Number,
    transportation: Number,
    food: Number,
    waste: Number,
    lifestyle: Number,
    total: Number,
  },
  inputs: {
    electricity: Number,
    naturalGas: Number,
    carDistance: Number,
    flightDistance: Number,
    beefConsumption: Number,
    vegetableConsumption: Number,
    landfillWaste: Number,
    recycledPlastic: Number,
    clothingItems: Number,
  },
})

const Calculation = mongoose.models.Calculation || mongoose.model("Calculation", calculationSchema)

export default Calculation
