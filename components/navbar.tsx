"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [showTeamDialog, setShowTeamDialog] = useState(false)

  const teamMembers = [
    { name: "甘来", initials: "GL" },
    { name: "黄生茂", initials: "HSM" },
    { name: "何进华", initials: "HJH" },
    { name: "何霜莹", initials: "HSY" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Leaf className="h-6 w-6 text-green-500 mr-2" />
          <span className="text-xl font-bold text-green-800 dark:text-green-400">碳足迹计算器</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="/education"
            className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            知识科普
          </Link>
          <Link
            href="/quiz"
            className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            知识竞赛
          </Link>
          <Link
            href="/calculator"
            className="text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            碳足迹计算
          </Link>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTeamDialog(true)}
            className="flex items-center text-gray-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
          >
            <Users className="h-5 w-5 mr-1" />
            <span>团队</span>
          </Button>
        </div>
      </div>

      <Dialog open={showTeamDialog} onOpenChange={setShowTeamDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-green-700">我们的团队</DialogTitle>
            <DialogDescription className="text-center">感谢以下成员对碳足迹计算器项目的贡献</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar className="h-16 w-16 bg-green-100 text-green-700 mb-2">
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{member.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  )
}
