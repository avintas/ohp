"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Hero data - single hero section
const HERO_DATA = {
  id: "n8b6u",
  blobUrl: "n8b6u.jpg",
  title: "SPREAD",
  description: "Share the joy of hockey with everyone around you",
  fallbackColor: "from-yellow-400 to-orange-500",
}

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  const [imageLoadState, setImageLoadState] = React.useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div className={cn("w-full", className)}>
      {/* Hero Section */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
        {/* Hero Content Container */}
        <div className="relative h-64 md:h-80 lg:h-96">
          {/* Background with fallback */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            HERO_DATA.fallbackColor
          )}>
            {/* This is where your blob image would be displayed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Placeholder illustration - replace with actual blob image */}
                <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-2xl font-bold">
                    {HERO_DATA.id.toUpperCase()}
                  </span>
                </div>
                
                {/* Hero Text */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {HERO_DATA.title}
                </h2>
                <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                  {HERO_DATA.description}
                </p>
              </div>
            </div>
          </div>

          {/* Loading state */}
          {imageLoadState === 'loading' && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}

          {/* Error state */}
          {imageLoadState === 'error' && (
            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
              <p className="text-red-600 text-sm">Failed to load image</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

// Enhanced version with actual blob integration
export function HeroSectionWithBlob({ className }: HeroSectionProps) {
  const [blobUrl, setBlobUrl] = React.useState<string>("")
  const [imageLoadState, setImageLoadState] = React.useState<'loading' | 'loaded' | 'error'>('loading')

  // Load blob URL using Vercel Blob API
  React.useEffect(() => {
    const loadBlobUrl = async () => {
      try {
        // Using the Vercel Blob API to get the image URL
        // This assumes you have uploaded the image to your blob store
        const response = await fetch('/api/blob?action=info&url=https://oh-site.public.blob.vercel-storage.com/n8b6u.jpg')
        const data = await response.json()
        
        if (data.success && data.data) {
          setBlobUrl(data.data.url)
        } else {
          // Fallback to direct URL if API fails
          setBlobUrl("https://oh-site.public.blob.vercel-storage.com/n8b6u.jpg")
        }
      } catch (error) {
        console.error('Failed to load blob URL:', error)
        // Fallback to direct URL
        setBlobUrl("https://oh-site.public.blob.vercel-storage.com/n8b6u.jpg")
      }
    }

    loadBlobUrl()
  }, [])

  const handleImageLoad = () => {
    setImageLoadState('loaded')
  }

  const handleImageError = () => {
    setImageLoadState('error')
  }

  return (
    <div className={cn("w-full", className)}>
      <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
        <div className="relative h-64 md:h-80 lg:h-96">
          {/* Actual blob image */}
          {blobUrl && (
            <img
              src={blobUrl}
              alt={HERO_DATA.title}
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ 
                opacity: imageLoadState === 'loaded' ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          )}

          {/* Fallback background */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br",
            HERO_DATA.fallbackColor,
            imageLoadState === 'loaded' ? 'opacity-0' : 'opacity-100',
            "transition-opacity duration-300"
          )}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-2xl font-bold">
                    {HERO_DATA.id.toUpperCase()}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                  {HERO_DATA.title}
                </h2>
                <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                  {HERO_DATA.description}
                </p>
              </div>
            </div>
          </div>

          {/* Overlay with text */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-2">
                {HERO_DATA.title}
              </h2>
              <p className="text-white/90 text-sm md:text-base max-w-xs mx-auto">
                {HERO_DATA.description}
              </p>
            </div>
          </div>

          {/* Loading state */}
          {imageLoadState === 'loading' && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}

          {/* Error state */}
          {imageLoadState === 'error' && (
            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
              <p className="text-red-600 text-sm">Failed to load image</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
