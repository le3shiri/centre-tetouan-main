"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Gamepad2,
  Monitor,
  Camera,
  FileText,
  Theater,
  Mic,
  Clock,
  Users,
  Star,
  ArrowRight,
  Calendar,
  Activity,
  Target, // Add this import
} from "lucide-react"
import Link from "next/link"

import PageHero from "../components/page-hero"
import { useLanguage } from '../context/LanguageContext'
import { translations, activities as activitiesTranslations } from '../translations/activities'


const iconMap = {
  Gamepad2,
  Theater,
  Users,
  Mic,
  Camera,
  Target,
};

export default function ActivitiesPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations['fr'];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  const activities = (activitiesTranslations[language]?.list || activitiesTranslations['fr'].list).map((activity: any) => ({
    ...activity,
    icon: iconMap[activity.icon as keyof typeof iconMap],
  }));

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <PageHero
        badge={{
          icon: Activity,
          text: t.pageSubtitle,
          color: "bg-purple-600/20",
        }}
        title={t.pageTitle.split(' ')[0]}
        subtitle={t.pageTitle.split(' ').slice(1).join(' ')}
        description={t.pageDescription}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Monitor className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.technical.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.technical.description}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Theater className="w-8 h-8 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.artistic.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.artistic.description}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Users className="w-8 h-8 text-green-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">{t.categories.social.title}</h3>
            <p className="text-gray-400 text-sm">{t.categories.social.description}</p>
          </div>
        </div>
      </PageHero>

      {/* Activities Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {activities.map((activity: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div
                      className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-r ${activity.color} flex items-center justify-center`}
                    >
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{activity.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{activity.description}</p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {activity.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Clock className="w-5 h-5 text-purple-400 mb-2" />
                      <p className="text-white font-medium text-sm">{t.activityInfo.duration}</p>
                      <p className="text-gray-300 text-xs">{activity.duration}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Calendar className="w-5 h-5 text-cyan-400 mb-2" />
                      <p className="text-white font-medium text-sm">{t.activityInfo.schedule}</p>
                      <p className="text-gray-300 text-xs">{activity.schedule}</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <Users className="w-5 h-5 text-pink-400 mb-2" />
                      <p className="text-white font-medium text-sm">{t.activityInfo.audience}</p>
                      <p className="text-gray-300 text-xs">{activity.audience}</p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${activity.color} hover:opacity-90 text-white px-8 py-3 rounded-full shadow-lg`}
                      >
                        {t.cta.join}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>

                    {/* <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full backdrop-blur-md bg-transparent"
                    >
                      En savoir plus
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">{t.pageTitle}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.pageDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
                >
                  {t.cta?.register || "Inscrivez-vous maintenant"}
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/about">
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full backdrop-blur-md bg-transparent"
                >
                  {t.cta?.learnMore || "En savoir plus"}
                </Button> */}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
