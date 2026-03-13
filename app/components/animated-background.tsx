"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                    x: mousePosition.x * -0.02,
                    y: mousePosition.y * -0.02,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
            <motion.div
                className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                animate={{
                    x: mousePosition.x * 0.01,
                    y: mousePosition.y * 0.01,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
        </div>
    )
}
