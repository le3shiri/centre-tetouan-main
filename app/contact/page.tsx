"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

import PageHero from "../components/page-hero"


const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+212 661 559 373 ",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "communication.tadamon@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Av. Med daoud, rue Baghdad, Maison de jeunes Med Daoud, Tetouan 93000",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Sam: 9h-20h | Dim: 14h-18h",
    color: "from-orange-500 to-red-500",
  },
]

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-400" },
  { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-400" },
  { icon: Youtube, name: "YouTube", url: "#", color: "hover:text-red-400" },
  { icon: MessageCircle, name: "WhatsApp", url: "#", color: "hover:text-green-400" },
];

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
};

import { useLanguage } from '../context/LanguageContext';
import { contact as contactTranslations } from '../translations/contact';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = contactTranslations[language] || contactTranslations['fr'];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", message: "" })

    // Show success message (you can implement a toast notification here)
    alert(t.form.success)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">



      <PageHero
        badge={{
          icon: Phone,
          text: t.hero.badge,
          color: "bg-green-600/20",
        }}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        description={t.hero.description}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {t.highlights.map((hl: any, idx: number) => (
            <div key={idx} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className={`w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center`}>
                {/* You may want to dynamically render the icon here */}
              </div>
              <div>
                <div className="text-white font-semibold">{hl.title}</div>
                <div className="text-gray-400 text-sm">{hl.value}</div>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">{t.form.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder={t.form.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>

                    <Input
                      type="email"
                      name="email"
                      placeholder={t.form.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                    />

                    <Textarea
                      name="message"
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 resize-none"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 rounded-full shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          {t.form.submit}
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t.info.title}</h2>
                <p className="text-gray-300 text-lg mb-8">
                  {t.info.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.contactInfo.map((info: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}
                        >
                          {iconMap[info.icon as keyof typeof iconMap] && (
                            React.createElement(iconMap[info.icon as keyof typeof iconMap], { className: "w-6 h-6 text-white" })
                          )}
                        </div>
                        <h3 className="text-white font-bold mb-2">{info.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{info.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.visit.title}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.visit.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
              >
                {t.visit.button}
                <MapPin className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
