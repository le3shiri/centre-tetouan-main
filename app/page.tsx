"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Gamepad2,
  Monitor,
  Camera,
  FileText,
  Theater,
  Mic,
  ArrowRight,
  Users,
  Target,
  Heart,
  Award,
} from "lucide-react"
import Link from "next/link"
import HeroCarousel from "./components/hero-carousel"
import AnimatedBackground from "./components/animated-background"
import { useLanguage } from './context/LanguageContext';
import { home as homeTranslations } from './translations/home';

const iconMap = [Gamepad2, Monitor, Camera, FileText, Theater, Mic];
const colorMap = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500",
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = homeTranslations[language] || homeTranslations['fr'];

  const services = t.services.items.map((item: { title: string; description: string }, idx: number) => ({
    ...item,
    icon: iconMap[idx],
    color: colorMap[idx],
  }));

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Matterport Virtual Tour Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Visitez Notre{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Centre en 3D
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Découvrez notre centre en visite virtuelle immersive. Explorez chaque espace en 3D et vivez une expérience unique.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Visite 3D immersive",
                  "Navigation intuitive",
                  "Haute définition",
                  "Compatible VR",
                  "Mesures précises",
                  "Mode plan 3D"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Matterport */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4"
            >
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://my.matterport.com/show/?m=jMsvTxnegur"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
                  title="Visite Virtuelle du Centre"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.services.title.split(' ')[0]}{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.services.title.split(' ')[1]}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    <motion.div
                      className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: "500+", label: t.stats.trained },
              { icon: Target, number: "15+", label: t.stats.programs },
              { icon: Heart, number: "5", label: t.stats.experience },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.finalCta.title}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.finalCta.description}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/inscription">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
                >
                  {t.finalCta.button}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
