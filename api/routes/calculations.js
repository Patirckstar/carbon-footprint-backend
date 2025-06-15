import express from "express"
import Calculation from "../models/Calculation.js"
import auth from "../middleware/auth.js"

const router = express.Router()

// 保存新的碳足迹计算结果
router.post("/", auth, async (req, res) => {
  try {
    const { results, inputs } = req.body

    const calculation = new Calculation({
      userId: req.userId,
      results,
      inputs,
    })

    await calculation.save()
    res.status(201).json(calculation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

// 获取用户的所有计算历史
router.get("/", auth, async (req, res) => {
  try {
    const calculations = await Calculation.find({ userId: req.userId }).sort({ date: -1 })

    res.json(calculations)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

// 获取特定计算结果
router.get("/:id", auth, async (req, res) => {
  try {
    const calculation = await Calculation.findOne({
      _id: req.params.id,
      userId: req.userId,
    })

    if (!calculation) {
      return res.status(404).json({ message: "计算结果不存在" })
    }

    res.json(calculation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

// 删除计算结果
router.delete("/:id", auth, async (req, res) => {
  try {
    const calculation = await Calculation.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    })

    if (!calculation) {
      return res.status(404).json({ message: "计算结果不存在" })
    }

    res.json({ message: "计算结果已删除" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

export default router
