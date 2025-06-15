import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
  // 获取token
  const token = req.header("x-auth-token")

  // 检查是否有token
  if (!token) {
    return res.status(401).json({ message: "无访问令牌，授权被拒绝" })
  }

  try {
    // 验证token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret")

    // 将用户ID添加到请求
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ message: "令牌无效" })
  }
}

export default auth
