import express from "express"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import auth from "../middleware/auth.js"

const router = express.Router()

// 注册新用户
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body

    // 检查用户是否已存在
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: "用户已存在" })
    }

    // 创建新用户
    user = new User({
      username,
      email,
      password,
    })

    await user.save()

    // 创建JWT令牌
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "7d" })

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

// 用户登录
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // 查找用户
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "无效的凭据" })
    }

    // 验证密码
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(400).json({ message: "无效的凭据" })
    }

    // 创建JWT令牌
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "7d" })

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

// 获取当前用户信息
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password")
    if (!user) {
      return res.status(404).json({ message: "用户不存在" })
    }
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "服务器错误" })
  }
})

export default router
