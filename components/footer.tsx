import { Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-500 mr-2" />
            <span className="text-lg font-bold text-green-800 dark:text-green-400">碳足迹计算器</span>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} 碳足迹计算器. 保留所有权利.
          </div>
        </div>
      </div>
    </footer>
  )
}
