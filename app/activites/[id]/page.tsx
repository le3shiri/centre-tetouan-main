import React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react"
import carouselData from "../../data/hero-carousel.json"

interface PageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return carouselData.map((item) => ({
        id: item.id.toString(),
    }))
}

export default function ActivityDetailPage({ params }: PageProps) {
    const item = carouselData.find((i) => i.id.toString() === params.id)

    if (!item) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
            {/* Hero Section of the detail page */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="absolute inset-0 bg-slate-900/70" />
                </div>
                <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>
                    <div className="flex flex-wrap gap-6 text-slate-300">
                        {item.date && (
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                                <span>{item.date}</span>
                            </div>
                        )}
                        {item.location && (
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                                <span>{item.location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold mb-6 text-blue-400">About this Activity</h2>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
                                    {item.content || item.description}
                                </p>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        {item.gallery && item.gallery.length > 0 && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold mb-6 text-purple-400">Activity Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {item.gallery.map((img: string, idx: number) => (
                                        <div key={idx} className="relative aspect-video rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={img}
                                                alt={`Gallery image ${idx + 1}`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-500/10 p-2 rounded-lg mr-3">
                                        <Calendar className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Date</p>
                                        <p className="font-medium">{item.date || "TBA"}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-500/10 p-2 rounded-lg mr-3">
                                        <Clock className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Duration</p>
                                        <p className="font-medium">2 Hours (Approx)</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-red-500/10 p-2 rounded-lg mr-3">
                                        <MapPin className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Location</p>
                                        <p className="font-medium">{item.location || "TBA"}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
