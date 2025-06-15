"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
} from "recharts"
import { Lightbulb, Car, Utensils, Trash2, ShoppingBag, Info, Globe } from "lucide-react"

export default function CalculatorPage() {
  // 能源消耗
  const [electricity, setElectricity] = useState("")
  const [naturalGas, setNaturalGas] = useState("")

  // 交通
  const [carDistance, setCarDistance] = useState("")
  const [flightDistance, setFlightDistance] = useState("")

  // 饮食消费
  const [beefConsumption, setBeefConsumption] = useState("")
  const [vegetableConsumption, setVegetableConsumption] = useState("")

  // 废弃物
  const [landfillWaste, setLandfillWaste] = useState("")
  const [recycledPlastic, setRecycledPlastic] = useState("")

  // 生活消费
  const [clothingItems, setClothingItems] = useState("")

  // 结果
  const [showResults, setShowResults] = useState(false)
  const [carbonFootprint, setCarbonFootprint] = useState({
    energy: 0,
    transportation: 0,
    food: 0,
    waste: 0,
    lifestyle: 0,
    total: 0,
  })

  // 国家碳排放数据
  const countryEmissions = [
    {
      country: "加拿大",
      emissions: 15.6,
      mainSource: "油气开采 (31%)、交通 (25%)",
      source: "Canadian Environmental Sustainability Indicators (2023)",
    },
    {
      country: "美国",
      emissions: 14.7,
      mainSource: "交通 (29%)、工业 (23%)",
      source: "Global Carbon Project (2023)",
    },
    {
      country: "澳大利亚",
      emissions: 15.3,
      mainSource: "能源 (54%)、农业 (22%)",
      source: "Australian Government DCCEEW (2023)",
    },
    {
      country: "俄罗斯",
      emissions: 11.5,
      mainSource: "化石燃料 (68%)、土地利用 (12%)",
      source: "Global Carbon Atlas (2023)",
    },
    {
      country: "日本",
      emissions: 8.5,
      mainSource: "制造业 (41%)、交通 (19%)",
      source: "Japan Ministry of Environment (2022)",
    },
    {
      country: "德国",
      emissions: 8.1,
      mainSource: "工业 (37%)、建筑 (28%)",
      source: "European Environment Agency (2023)",
    },
    {
      country: "中国",
      emissions: 7.6,
      mainSource: "能源 (65%)、制造业 (18%)",
      source: "中国生态环境部 (2023)",
    },
  ]

  const calculateCarbonFootprint = () => {
    // 能源消耗
    const energyFootprint = (Number.parseFloat(electricity) || 0) * 0.8 + (Number.parseFloat(naturalGas) || 0) * 2.0

    // 交通出行
    const transportationFootprint =
      (Number.parseFloat(carDistance) || 0) * 2.3 + (Number.parseFloat(flightDistance) || 0) * 0.2

    // 饮食消费
    const foodFootprint =
      (Number.parseFloat(beefConsumption) || 0) * 27 + (Number.parseFloat(vegetableConsumption) || 0) * 0.4

    // 废弃物
    const wasteFootprint =
      (Number.parseFloat(landfillWaste) || 0) * 1.0 - (Number.parseFloat(recycledPlastic) || 0) * 0.5

    // 生活消费
    const lifestyleFootprint = (Number.parseFloat(clothingItems) || 0) * 2.1

    // 总碳足迹
    const totalFootprint =
      energyFootprint + transportationFootprint + foodFootprint + wasteFootprint + lifestyleFootprint

    setCarbonFootprint({
      energy: energyFootprint,
      transportation: transportationFootprint,
      food: foodFootprint,
      waste: wasteFootprint,
      lifestyle: lifestyleFootprint,
      total: totalFootprint,
    })

    setShowResults(true)
  }

  const closeResults = () => {
    setShowResults(false)
  }

  const resetForm = () => {
    setElectricity("")
    setNaturalGas("")
    setCarDistance("")
    setFlightDistance("")
    setBeefConsumption("")
    setVegetableConsumption("")
    setLandfillWaste("")
    setRecycledPlastic("")
    setClothingItems("")
  }

  // 平均值数据（示例数据）
  const averageData = {
    energy: 1200,
    transportation: 1500,
    food: 800,
    waste: 300,
    lifestyle: 500,
    total: 4300,
  }

  // 雷达图数据
  const radarData = [
    {
      subject: "能源",
      个人: carbonFootprint.energy,
      平均: averageData.energy,
      fullMark: 2000,
    },
    {
      subject: "交通",
      个人: carbonFootprint.transportation,
      平均: averageData.transportation,
      fullMark: 2000,
    },
    {
      subject: "饮食",
      个人: carbonFootprint.food,
      平均: averageData.food,
      fullMark: 1500,
    },
    {
      subject: "废弃物",
      个人: carbonFootprint.waste,
      平均: averageData.waste,
      fullMark: 500,
    },
    {
      subject: "生活消费",
      个人: carbonFootprint.lifestyle,
      平均: averageData.lifestyle,
      fullMark: 1000,
    },
  ]

  // 柱状图数据
  const barData = [
    {
      name: "能源",
      个人: carbonFootprint.energy,
      平均: averageData.energy,
    },
    {
      name: "交通",
      个人: carbonFootprint.transportation,
      平均: averageData.transportation,
    },
    {
      name: "饮食",
      个人: carbonFootprint.food,
      平均: averageData.food,
    },
    {
      name: "废弃物",
      个人: carbonFootprint.waste,
      平均: averageData.waste,
    },
    {
      name: "生活消费",
      个人: carbonFootprint.lifestyle,
      平均: averageData.lifestyle,
    },
  ]

  // 国家对比数据
  const countryComparisonData = [
    { name: "您的碳足迹", emissions: carbonFootprint.total / 1000 }, // 转换为吨
    ...countryEmissions.map((country) => ({
      name: country.country,
      emissions: country.emissions,
    })),
  ]

  // 国家对比图表颜色
  const countryColors = [
    "#4ade80", // 用户数据 - 绿色
    "#3b82f6", // 加拿大
    "#ef4444", // 美国
    "#f97316", // 澳大利亚
    "#8b5cf6", // 俄罗斯
    "#ec4899", // 日本
    "#f59e0b", // 德国
    "#6366f1", // 中国
  ]

  // 减排建议
  const reductionSuggestions = [
    {
      action: "将白炽灯更换为LED灯泡",
      reduction: "每年减少约60kg碳排放",
      cost: "低",
      timeframe: "立即",
    },
    {
      action: "每周少开车一天，改用公共交通",
      reduction: "每年减少约200kg碳排放",
      cost: "无",
      timeframe: "立即",
    },
    {
      action: "每周减少一餐肉类消费",
      reduction: "每年减少约100kg碳排放",
      cost: "无",
      timeframe: "立即",
    },
    {
      action: "安装太阳能热水器",
      reduction: "每年减少约300kg碳排放",
      cost: "高",
      timeframe: "1-2年",
    },
    {
      action: "提高家庭保温隔热性能",
      reduction: "每年减少约500kg碳排放",
      cost: "中-高",
      timeframe: "3-5年",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-800 dark:text-green-300 mb-8">计算我的碳足迹</h1>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Tabs defaultValue="energy" className="w-full">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="energy" className="flex flex-col items-center py-3">
                  <Lightbulb className="h-5 w-5 mb-1" />
                  <span>能源消耗</span>
                </TabsTrigger>
                <TabsTrigger value="transportation" className="flex flex-col items-center py-3">
                  <Car className="h-5 w-5 mb-1" />
                  <span>交通出行</span>
                </TabsTrigger>
                <TabsTrigger value="food" className="flex flex-col items-center py-3">
                  <Utensils className="h-5 w-5 mb-1" />
                  <span>饮食消费</span>
                </TabsTrigger>
                <TabsTrigger value="waste" className="flex flex-col items-center py-3">
                  <Trash2 className="h-5 w-5 mb-1" />
                  <span>废弃物</span>
                </TabsTrigger>
                <TabsTrigger value="lifestyle" className="flex flex-col items-center py-3">
                  <ShoppingBag className="h-5 w-5 mb-1" />
                  <span>生活消费</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="energy" className="space-y-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">能源消耗</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="electricity">用电量 (kWh/月)</Label>
                    <Input
                      id="electricity"
                      type="number"
                      placeholder="例如：300"
                      value={electricity}
                      onChange={(e) => setElectricity(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">家庭月均用电量通常在200-400kWh之间</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="naturalGas">天然气用量 (m³/月)</Label>
                    <Input
                      id="naturalGas"
                      type="number"
                      placeholder="例如：50"
                      value={naturalGas}
                      onChange={(e) => setNaturalGas(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">家庭月均天然气用量通常在30-80m³之间</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="transportation" className="space-y-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">交通出行</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="carDistance">汽车行驶里程 (km/月)</Label>
                    <Input
                      id="carDistance"
                      type="number"
                      placeholder="例如：500"
                      value={carDistance}
                      onChange={(e) => setCarDistance(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">私家车月均行驶里程通常在300-1000km之间</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="flightDistance">飞机行驶里程 (km/年)</Label>
                    <Input
                      id="flightDistance"
                      type="number"
                      placeholder="例如：5000"
                      value={flightDistance}
                      onChange={(e) => setFlightDistance(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">一次国内往返航班约1000-2000km</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="food" className="space-y-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">饮食消费</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="beefConsumption">牛肉消费量 (kg/月)</Label>
                    <Input
                      id="beefConsumption"
                      type="number"
                      placeholder="例如：2"
                      value={beefConsumption}
                      onChange={(e) => setBeefConsumption(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">人均月牛肉消费量通常在1-3kg之间</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vegetableConsumption">蔬菜消费量 (kg/月)</Label>
                    <Input
                      id="vegetableConsumption"
                      type="number"
                      placeholder="例如：20"
                      value={vegetableConsumption}
                      onChange={(e) => setVegetableConsumption(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">人均月蔬菜消费量通常在15-30kg之间</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="waste" className="space-y-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">废弃物</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="landfillWaste">填埋垃圾量 (kg/月)</Label>
                    <Input
                      id="landfillWaste"
                      type="number"
                      placeholder="例如：15"
                      value={landfillWaste}
                      onChange={(e) => setLandfillWaste(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">人均月垃圾产生量通常在10-20kg之间</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recycledPlastic">回收塑料量 (kg/月)</Label>
                    <Input
                      id="recycledPlastic"
                      type="number"
                      placeholder="例如：2"
                      value={recycledPlastic}
                      onChange={(e) => setRecycledPlastic(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">回收塑料有助于减少碳足迹</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lifestyle" className="space-y-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">生活消费</h2>
                <div className="space-y-2">
                  <Label htmlFor="clothingItems">衣物购买数量 (件/月)</Label>
                  <Input
                    id="clothingItems"
                    type="number"
                    placeholder="例如：2"
                    value={clothingItems}
                    onChange={(e) => setClothingItems(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">包括T恤、裤子、鞋子等各类衣物</p>
                </div>
              </TabsContent>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={resetForm}>
                  重置
                </Button>
                <Button onClick={calculateCarbonFootprint} className="bg-green-600 hover:bg-green-700">
                  计算碳足迹
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        <Dialog open={showResults} onOpenChange={closeResults}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden max-h-[90vh]">
            <div className="flex flex-col md:flex-row max-h-[90vh]">
              {/* 左侧可视化区域 */}
              <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 p-6 overflow-y-auto max-h-[90vh]">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">碳足迹可视化</h3>

                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">碳足迹雷达图</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: "#4b5563" }} />
                        <PolarRadiusAxis />
                        <Radar name="您的碳足迹" dataKey="个人" stroke="#4ade80" fill="#4ade80" fillOpacity={0.6} />
                        <Radar name="平均水平" dataKey="平均" stroke="#93c5fd" fill="#93c5fd" fillOpacity={0.6} />
                        <Legend />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">碳足迹对比图</h4>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="name" tick={{ fill: "#4b5563" }} />
                        <YAxis tick={{ fill: "#4b5563" }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="个人" fill="#4ade80" />
                        <Bar dataKey="平均" fill="#93c5fd" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    与各国人均碳排放对比 (吨CO₂/年)
                  </h4>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={countryComparisonData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis type="number" tick={{ fill: "#4b5563" }} />
                        <YAxis dataKey="name" type="category" tick={{ fill: "#4b5563" }} width={80} />
                        <Tooltip formatter={(value) => [`${value} 吨CO₂`, "年排放量"]} />
                        <Legend />
                        <Bar dataKey="emissions" name="年排放量">
                          {countryComparisonData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={countryColors[index % countryColors.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    数据来源: 各国环境部门及全球碳排放项目 (2022-2023)
                  </p>
                </div>
              </div>

              {/* 右侧结果和建议区域 */}
              <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-800 p-6 overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center text-green-700 dark:text-green-400">
                    您的碳足迹报告
                  </DialogTitle>
                  <DialogDescription className="text-center">基于您提供的信息，以下是您的碳足迹分析</DialogDescription>
                </DialogHeader>

                <div className="mt-6 mb-8">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">您的年碳足迹总量</h3>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                          {carbonFootprint.total.toFixed(2)}
                        </span>
                        <span className="text-xl ml-2 text-gray-700 dark:text-gray-300">kg CO₂</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <Info className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {carbonFootprint.total < averageData.total
                          ? "您的碳足迹低于平均水平，继续保持！"
                          : "您的碳足迹高于平均水平，可以考虑以下减排建议。"}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">减排建议</h3>
                  <div className="space-y-3">
                    {reductionSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg p-3 shadow-sm"
                      >
                        <div className="font-medium text-gray-900 dark:text-white">{suggestion.action}</div>
                        <div className="grid grid-cols-3 text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <div>减排量: {suggestion.reduction}</div>
                          <div>成本: {suggestion.cost}</div>
                          <div>见效周期: {suggestion.timeframe}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <DialogFooter className="flex justify-center mt-6">
                  <Button onClick={closeResults} className="bg-green-600 hover:bg-green-700">
                    返回计算器
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
