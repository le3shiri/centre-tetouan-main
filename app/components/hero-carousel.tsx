"use client"

import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion, AnimatePresence } from "framer-motion"
import carouselData from "../data/hero-carousel.json"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
    skipSnaps: false,
    dragFree: false
  })
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

  // Robust Autoplay logic
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null)

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, 5000)
  }, [emblaApi, stopAutoplay])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())

    emblaApi.on("select", () => {
      onSelect()
      startAutoplay() // Reset timer on every select (manual or auto)
    })

    emblaApi.on("reInit", onSelect)
    emblaApi.on("pointerDown", stopAutoplay)

    startAutoplay()

    return () => stopAutoplay()
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay])

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-slate-950">
      {/* Background Elements - Simple and fast */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />

      {/* Carousel Container */}
      <div className="relative w-full md:w-[85%] max-w-7xl z-10">
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/5" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {carouselData.map((slide, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 relative h-[350px] md:h-[580px]"
                key={slide.id}
              >
                {/* Image Container */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 85vw"
                    quality={60} // Lower quality for better performance
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

                  {/* Content - Optimized transitions */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16">
                    <AnimatePresence>
                      {selectedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                            {slide.title}
                          </h2>
                          <p className="text-sm md:text-lg text-gray-200 max-w-2xl mb-8 line-clamp-2 drop-shadow-sm">
                            {slide.description}
                          </p>

                          <Link
                            href={`/activites/${slide.id}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all active:scale-95 shadow-xl shadow-blue-900/30"
                          >
                            Read More
                            <ChevronRight className="w-5 h-5" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
