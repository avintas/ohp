"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselSlide, CarouselDots } from "@/components/ui/carousel"
import { useBlob } from "@/lib/hooks/useBlob"
import { cn } from "@/lib/utils"

// Hero slide data with blob URLs
const HERO_SLIDES = [
  {
    id: "n8b6u",
    blobUrl: "n8b6u.jpg",
    title: "SPREAD",
    description: "Share the joy of hockey with everyone around you",
    fallbackColor: "from-yellow-400 to-orange-500",
  },
  {
    id: "0101a",
    blobUrl: "0101a",
    title: "CONNECT",
    description: "Build connections through the love of the game",
    fallbackColor: "from-blue-400 to-purple-500",
  },
  {
    id: "4ku3k",
    blobUrl: "4ku3k",
    title: "INSPIRE",
    description: "Inspire the next generation of hockey players",
    fallbackColor: "from-green-400 to-teal-500",
  },
]

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const { loading, error } = useBlob()
  const [imageLoadStates, setImageLoadStates] = React.useState<Record<string, 'loading' | 'loaded' | 'error'>>({})

  const handleImageLoad = (slideId: string) => {
    setImageLoadStates(prev => ({ ...prev, [slideId]: 'loaded' }))
  }

  const handleImageError = (slideId: string) => {
    setImageLoadStates(prev => ({ ...prev, [slideId]: 'error' }))
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Carousel with integrated dots */}
      <Carousel
        className="w-full"
        showArrows={true}
        showDots={true}
        autoPlay={false}
      >
        {HERO_SLIDES.map((slide, index) => (
          <CarouselSlide key={slide.id}>
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              {/* Hero Content Container */}
              <div className="relative h-64 md:h-80 lg:h-96">
                {/* Background with fallback */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  slide.fallbackColor
                )}>
                  {/* This is where your blob image would be displayed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {/* Placeholder illustration - replace with actual blob image */}
                      <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-2xl font-bold">
                          {slide.id.toUpperCase()}
                        </span>
                      </div>
                      
                      {/* Hero Text */}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Loading state */}
                {imageLoadStates[slide.id] === 'loading' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                )}

                {/* Error state */}
                {imageLoadStates[slide.id] === 'error' && (
                  <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                    <p className="text-red-600 text-sm">Failed to load image</p>
                  </div>
                )}
              </div>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  )
}

// Enhanced version with actual blob integration
export function HeroSectionWithBlob({ className }: HeroSectionProps) {
  const { loading, error, getBlobInfo } = useBlob()
  const [blobUrls, setBlobUrls] = React.useState<string[]>([])
  const [imageLoadStates, setImageLoadStates] = React.useState<Record<string, 'loading' | 'loaded' | 'error'>>({})

  // Load blob URLs - this would be replaced with your actual blob loading logic
  React.useEffect(() => {
    const loadBlobUrls = async () => {
      // In a real implementation, you would load the actual blob URLs here
      // For now, we'll use placeholder URLs that match your blob pattern
      const urls = [
        "https://your-blob-store.public.blob.vercel-storage.com/n8b6u.jpg",
        "https://your-blob-store.public.blob.vercel-storage.com/0101a",
        "https://your-blob-store.public.blob.vercel-storage.com/4ku3k",
      ]
      setBlobUrls(urls)
    }

    loadBlobUrls()
  }, [])

  const handleImageLoad = (slideId: string) => {
    setImageLoadStates(prev => ({ ...prev, [slideId]: 'loaded' }))
  }

  const handleImageError = (slideId: string) => {
    setImageLoadStates(prev => ({ ...prev, [slideId]: 'error' }))
  }

  return (
    <div className={cn("w-full", className)}>
      <Carousel
        className="w-full"
        showArrows={true}
        showDots={true}
        autoPlay={false}
      >
        {HERO_SLIDES.map((slide, index) => (
          <CarouselSlide key={slide.id}>
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <div className="relative h-64 md:h-80 lg:h-96">
                {/* Actual blob image */}
                {blobUrls[index] && (
                  <img
                    src={blobUrls[index]}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoad={() => handleImageLoad(slide.id)}
                    onError={() => handleImageError(slide.id)}
                    style={{ 
                      opacity: imageLoadStates[slide.id] === 'loaded' ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                )}

                {/* Fallback background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  slide.fallbackColor,
                  imageLoadStates[slide.id] === 'loaded' ? 'opacity-0' : 'opacity-100',
                  "transition-opacity duration-300"
                )}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-2xl font-bold">
                          {slide.id.toUpperCase()}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                      {slide.description}
                    </p>
                  </div>
                </div>

                {/* Loading state */}
                {imageLoadStates[slide.id] === 'loading' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                )}

                {/* Error state */}
                {imageLoadStates[slide.id] === 'error' && (
                  <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                    <p className="text-red-600 text-sm">Failed to load image</p>
                  </div>
                )}
              </div>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  )
}
