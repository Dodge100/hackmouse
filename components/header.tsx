import Link from "next/link"
import { MousePointer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-900/30 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MousePointer className="h-6 w-6 text-cyan-400" />
          <span className="text-xl font-bold text-white">HackMouse</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="#steps" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            How It Works
          </Link>
          <Link href="/guide" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            Guide
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
