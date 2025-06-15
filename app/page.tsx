import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Leaf, BarChart3, BookOpen, Calculator, ArrowRight, CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 h-[500px] -z-10"></div>
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Leaf className="h-4 w-4 mr-1" />
                <span>为地球可持续发展贡献力量</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                了解您的<span className="text-green-600 dark:text-green-400">碳足迹</span>，<br />
                保护我们共同的家园
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                碳足迹是衡量人类活动对环境影响的重要指标。通过了解和减少您的碳足迹，您可以为应对气候变化做出积极贡献。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/calculator">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    立即计算我的碳足迹
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/education">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950"
                  >
                    了解更多
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute inset-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Leaf className="h-32 w-32 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">探索我们的功能</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们提供全面的工具，帮助您了解、测试和减少您的碳足迹
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 dark:border-green-900 hover:shadow-lg transition-all">
              <CardContent className="pt-8">
                <div className="rounded-full bg-green-100 dark:bg-green-900 w-14 h-14 flex items-center justify-center mb-6">
                  <BookOpen className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">碳足迹知识科普</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  了解碳足迹的基本概念、影响因素以及如何减少碳排放的实用知识。通过互动式内容，轻松掌握环保知识。
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:border-green-600 hover:text-green-600 dark:border-green-800 dark:hover:border-green-500 dark:hover:text-green-400"
                  >
                    开始学习
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-green-100 dark:border-green-900 hover:shadow-lg transition-all">
              <CardContent className="pt-8">
                <div className="rounded-full bg-green-100 dark:bg-green-900 w-14 h-14 flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">碳足迹知识竞赛</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  测试您对碳足迹知识的理解，每次随机10道题，满分100分。挑战自己，看看您对环保知识了解多少。
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quiz" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:border-green-600 hover:text-green-600 dark:border-green-800 dark:hover:border-green-500 dark:hover:text-green-400"
                  >
                    开始测试
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-green-100 dark:border-green-900 hover:shadow-lg transition-all">
              <CardContent className="pt-8">
                <div className="rounded-full bg-green-100 dark:bg-green-900 w-14 h-14 flex items-center justify-center mb-6">
                  <Calculator className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">计算我的碳足迹</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  根据您的能源消耗、交通出行、饮食消费等数据，计算您的个人碳足迹，并获取个性化的减排建议。
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/calculator" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 hover:border-green-600 hover:text-green-600 dark:border-green-800 dark:hover:border-green-500 dark:hover:text-green-400"
                  >
                    开始计算
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50 dark:bg-green-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">减少碳足迹的好处</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              减少碳足迹不仅有助于环境保护，还能带来诸多个人和社会效益
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "保护环境",
                description: "减少温室气体排放，缓解气候变化，保护生物多样性",
              },
              {
                title: "节约资源",
                description: "更高效地使用能源和自然资源，减少浪费",
              },
              {
                title: "健康生活",
                description: "低碳生活方式通常更健康，如步行和骑行代替开车",
              },
              {
                title: "经济效益",
                description: "节约能源和资源可以减少日常开支，降低生活成本",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-8">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-700 dark:to-green-600 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">立即行动，为地球可持续发展贡献力量</h2>
              <p className="text-green-50 text-lg mb-8">
                每个人的小行动汇聚起来，就能产生巨大的影响。今天就开始了解和减少您的碳足迹吧！
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculator" className="text-white text-lg font-medium hover:underline">
                  开始您的碳足迹之旅 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
