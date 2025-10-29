"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  Search,
  Globe,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  ChevronDown,
  Home,
  Users,
  Activity,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const navigationItems = {
  fr: [
    {
      name: "Accueil",
      href: "/",
      icon: Home,
      description: "Page d'accueil du centre",
    },
    {
      name: "À Propos",
      href: "/about",
      icon: Users,
      description: "Notre mission et notre équipe",
    },
    {
      name: "Activités",
      href: "/activites",
      icon: Activity,
      description: "Nos programmes et formations",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: MessageCircle,
      description: "Nous contacter et nous trouver",
    },
  ],
  ar: [
    {
      name: "الرئيسية",
      href: "/",
      icon: Home,
      description: "الصفحة الرئيسية للمركز",
    },
    {
      name: "معلومات عنا",
      href: "/about",
      icon: Users,
      description: "مهمتنا وفريقنا",
    },
    {
      name: "أنشطة",
      href: "/activites",
      icon: Activity,
      description: "برامجنا وتكويناتنا",
    },
    {
      name: "اتصل بنا",
      href: "/contact",
      icon: MessageCircle,
      description: "الاتصال بنا وموقعنا",
    },
  ],
  es: [
    {
      name: "Inicio",
      href: "/",
      icon: Home,
      description: "Página principal del centro",
    },
    {
      name: "Acerca de",
      href: "/about",
      icon: Users,
      description: "Nuestra misión y nuestro equipo",
    },
    {
      name: "Actividades",
      href: "/activites",
      icon: Activity,
      description: "Nuestros programas y formaciones",
    },
    {
      name: "Contacto",
      href: "/contact",
      icon: MessageCircle,
      description: "Contáctanos y encuéntranos",
    },
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
  { icon: Youtube, href: "#", color: "hover:text-red-400" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  // scroll state no longer needed
  
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { language } = useLanguage()



  const isCurrentTime = () => {
    const now = new Date()
    const hour = now.getHours()
    const day = now.getDay()
    if (day === 0) return hour >= 14 && hour < 18
    return hour >= 9 && hour < 20
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-slate-800/95 backdrop-blur-md border-b border-white/10 text-sm transform-gpu will-change-transform">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Lun-Sam: 9h-20h | Dim: 14h-18h</span>
                <div className={`w-2 h-2 rounded-full ${isCurrentTime() ? "bg-green-400" : "bg-red-400"}`} />
                <span className={isCurrentTime() ? "text-green-400" : "text-red-400"}>
                  {isCurrentTime() ? "Ouvert" : "Fermé"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Avenue Mohammed V, Tetouan</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    {/* <social.icon className="w-4 h-4" /> */}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-[48px] left-0 right-0 z-[99] bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10 transform-gpu will-change-transform ${
          language === 'ar' ? 'rtl' : 'ltr'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-120 h-120">
                <Image
                  src="/logo-navbar.png"
                  alt="Maison de jeunes Med daoud"
                  width={120}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
             
            </Link>

            {/* Desktop Navigation - simplified, no animation */}
            <div className="hidden lg:flex items-center space-x-1">
              {(navigationItems[language] || navigationItems['fr']).map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              {/* <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <Search className="w-5 h-5" />
              </button> */}
              {/* CTA Button */}
              <div className="hidden md:block">
                <Link href="/inscription">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full">
                    {language === 'ar' ? 'تسجيل' : "S'inscrire"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Search Bar - no animation */}
        {/* {searchOpen && (
          <div className="border-t border-white/10 bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher des activités, formations..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )} */}
      </nav>

      {/* Mobile Menu - no animation */}
      {isOpen && (
        <div className="fixed inset-0 z-[98] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md shadow-2xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="relative w-120 h-120">
                    <Image
                      src="/logo-navbar.png"
                      alt="Maison de jeunes Med daoud"
                      width={120}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                 
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {(navigationItems[language] || navigationItems['fr']).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+212 539 12 34 56</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@darchababtanger.ma</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              {/* CTA Button */}
              <Link href="/inscription" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl">
                  {language === 'ar' ? 'تسجيل' : "S'inscrire"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
