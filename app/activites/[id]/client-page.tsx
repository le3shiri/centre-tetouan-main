"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Clock, Info, ChevronRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"

interface ClientActivityDetailProps {
    item: {
        id: number
        image: string
        title: string
        description: string
        content: string
        date: string
        location: string
        gallery: string[]
    }
}

export default function ClientActivityDetail({ item }: ClientActivityDetailProps) {
    const { language } = useLanguage()

    const t = {
        fr: {
            back: "Retour à l'accueil",
            about: "À propos de l'activité",
            gallery: "Galerie de photos",
            quickInfo: "Informations rapides",
            date: "Date",
            location: "Emplacement",
            duration: "Durée",
            durationVal: "2 Heures (Env.)",
            details: "Détails"
        },
        ar: {
            back: "العودة إلى الرئيسية",
            about: "عن النشاط",
            gallery: "معرض الصور",
            quickInfo: "معلومات سريعة",
            date: "التاريخ",
            location: "الموقع",
            duration: "المدة",
            durationVal: "ساعتان (تقريبًا)",
            details: "تفاصيل"
        },
        es: {
            back: "Volver al inicio",
            about: "Sobre esta actividad",
            gallery: "Galería de fotos",
            quickInfo: "Información rápida",
            date: "Fecha",
            location: "Ubicación",
            duration: "Duración",
            durationVal: "2 Horas (Aprox.)",
            details: "Détails"
        }
    }[language as 'fr' | 'ar' | 'es'] || {
        back: "Return to Home",
        about: "About this Activity",
        gallery: "Activity Gallery",
        quickInfo: "Quick Info",
        date: "Date",
        location: "Location",
        duration: "Duration",
        durationVal: "2 Hours (Approx)",
        details: "Details"
    }

    const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

    return (
        <div className={`min-h-screen bg-slate-950 text-white pt-24 pb-20 overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full max-w-6xl max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Gallery Preview"
                                fill
                                className="object-contain rounded-2xl"
                                priority
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                            >
                                Close ESC
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animated Background Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </motion.div>

                <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center text-slate-300 hover:text-blue-400 mb-6 transition-all group"
                        >
                            <ArrowLeft className={`w-5 h-5 transition-transform group-hover:-translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:translate-x-1' : ''} mr-2`} />
                            {t.back}
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                                {t.details}
                            </span>
                            <span className="text-slate-400 text-sm flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-2xl">
                            {item.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Summary Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                                    <Info className="text-blue-400 w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">{t.about}</h2>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="text-slate-300 leading-relaxed whitespace-pre-line text-lg">
                                    {item.content || item.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar (4 cols) */}
                    <aside className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-32 space-y-6"
                        >
                            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all" />

                                <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-blue-400" />
                                    </div>
                                    {t.quickInfo}
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{t.date}</p>
                                            <p className="font-bold text-lg text-slate-100">{item.date || "Prochainement"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-purple-400 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{t.duration}</p>
                                            <p className="font-bold text-lg text-slate-100">{t.durationVal}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-red-400 border border-white/5 group-hover:border-red-500/30 transition-colors">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">{t.location}</p>
                                            <p className="font-bold text-lg text-slate-100">{item.location || "Tétouan"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </aside>
                </div>

                {/* Full Width Gallery Section - Enhanced */}
                {item.gallery && item.gallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-32 space-y-12"
                    >
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight">{t.gallery}</h2>
                            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                            {item.gallery.map((img: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 cursor-zoom-in group
                                        ${idx === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-video" : "aspect-square"}
                                    `}
                                >
                                    <Image
                                        src={img}
                                        alt={`${item.title} gallery ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-6 left-6 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 uppercase tracking-widest">
                                        View Image
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </section>
        </div>
    )
}
