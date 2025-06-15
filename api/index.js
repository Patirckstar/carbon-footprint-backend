// 主要API入口点
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import calculationRoutes from "./routes/calculations.js"

dotenv.config()

const app = express()

// 中间件
app.use(express.json())
app.use(cors())

// 路由
app.use("/api/users", userRoutes)
app.use("/api/calculations", calculationRoutes)

// 健康检查端点
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "碳足迹计算器API正常运行" })
})

// 连接数据库
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("MongoDB连接成功")
    }
  } catch (error) {
    console.error("MongoDB连接失败:", error.message)
    process.exit(1)
  }
}

// 仅在非Vercel环境下启动服务器
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`服务器运行在端口: ${PORT}`)
  })
}

connectDB()

export default app
