"use client"

import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import carouselData from "../data/hero-carousel.json"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return
    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(intervalId)
  }, [emblaApi])

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/0 to-slate-900/0" />

      {/* Carousel Container - Full Width on Mobile, 75% on Desktop */}
      <div className="relative w-full md:w-[75%] max-w-7xl z-10 group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {carouselData.map((slide, index) => (
              <div className="flex-[0_0_100%] min-w-0 relative" key={slide.id}>
                <div className="relative h-[250px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  {/* Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-lg text-gray-200 max-w-2xl mb-4 md:mb-6 line-clamp-2">
                        {slide.description}
                      </p>

                      <Link
                        href={`/activites/${slide.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center text-white transition-all border border-white/20 hover:scale-110"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full hidden md:flex items-center justify-center text-white transition-all border border-white/20 hover:scale-110"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute -bottom-6 md:-bottom-10 left-0 right-0 flex justify-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "bg-blue-500 w-6 md:w-8" : "bg-slate-600 hover:bg-slate-500"
                }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
