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


const iconMap = [Gamepad2, Monitor, Camera, FileText, Theater, Mic];
const colorMap = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-purple-500",
  "from-pink-500 to-rose-500",
];

import { useLanguage } from './context/LanguageContext';
import { home as homeTranslations } from './translations/home';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { language } = useLanguage();
  const t = homeTranslations[language] || homeTranslations['fr'];
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

    const services = t.services.items.map((item: { title: string; description: string }, idx: number) => ({
    ...item,
    icon: iconMap[idx],
    color: colorMap[idx],
  }));

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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



      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        {/* Professional background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/activites">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  {t.cta.discover}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40 bg-transparent"
                >
                  {t.cta.contact}
                </Button>
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: "500+", label: t.stats.trained },
                { number: "15+", label: t.stats.programs },
                { number: "5", label: t.stats.experience },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="/hero.jpg"
                  alt="Centre Dar Chabab Tetouan - Hero Image"
                  className="w-full h-96 object-cover rounded-xl"
                />

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Communauté Active</div>
                      <div className="text-xs text-gray-600">500+ membres</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Excellence</div>
                      <div className="text-xs text-gray-600">Certifié qualité</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

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
