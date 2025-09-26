"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

const pathNames: Record<string, string> = {
  "/": "Accueil",
  "/about": "À Propos",
  "/activites": "Nos Activités",
  "/contact": "Contact",
}

export default function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <div className="fixed top-[128px] left-0 right-0 z-40 bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>

          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/")
            const isLast = index === pathSegments.length - 1

            return (
              <div key={path} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="text-white font-medium">{pathNames[path] || segment}</span>
                ) : (
                  <Link href={path} className="text-gray-400 hover:text-white transition-colors">
                    {pathNames[path] || segment}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
