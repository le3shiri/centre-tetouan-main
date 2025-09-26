"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface PageHeroProps {
  badge: {
    icon: LucideIcon
    text: string
    color: string
  }
  title: string
  subtitle: string
  description: string
  children?: React.ReactNode
}

export default function PageHero({ badge, title, subtitle, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/hero.jpg")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div
            className={`inline-flex items-center gap-3 ${badge.color} backdrop-blur-sm rounded-full px-6 py-3 border border-white/20`}
          >
            <badge.icon className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm tracking-wide uppercase">{badge.text}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{subtitle}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        {/* Custom Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
