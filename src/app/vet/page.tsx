import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function VetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                The Vet
              </h1>
              <p className="mt-6 text-xl text-amber-100">
                Former NHL Player
              </p>
              <p className="mt-4 text-lg text-amber-200">
                Living the dream, sharing the lessons
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="The Vet"
                className="h-48 w-48 rounded-full border-4 border-white/20 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-700 mb-6">
                Salut, hockey dreamers! I'm The Vet, and everyone calls me that because after years in the NHL and championship experience, I've seen every situation this game can throw at you - and I've learned something from all of them. As someone who lived every hockey kid's dream, I now get to share those experiences with the next generation of players and fans.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in a small town where hockey was religion, I learned that making it to the NHL requires more than just talent - it takes dedication, sacrifice, and the ability to overcome setbacks that would break most people. My journey from minor hockey to lifting the Cup taught me lessons about perseverance, teamwork, and what it really means to achieve your dreams.
              </p>
              <p className="text-gray-700 mb-8">
                Now I work with young players who have the same dreams I once had. Whether I'm sharing stories about facing elimination games or explaining what it feels like to score in the Stanley Cup Final, my job is helping the next generation understand both the beauty and the reality of pursuing hockey excellence.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Dreams are earned, not given. Every player who makes it to the top got there by outworking people who were just as talented but not as dedicated.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                  <strong>"The Stanley Cup doesn't care about your talent - it only cares about your commitment when things get hardest."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                  <strong>"Every setback is a setup for a comeback. I was cut, demoted, and doubted more times than I can count. But I never stopped believing."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-700">
                  <strong>"Making it to the pros is incredible. Staying there and winning championships - that's what separates dreamers from legends."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Vet's Hard-Earned Wisdom:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Earn everything</strong>
                    <p className="text-gray-600 text-sm">Respect, ice time, and success are never given, always earned</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Team success over individual glory</strong>
                    <p className="text-gray-600 text-sm">Rings last forever, individual stats get forgotten</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Learn from failure</strong>
                    <p className="text-gray-600 text-sm">Every great player was once terrible at something they're now great at</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Give back to the game</strong>
                    <p className="text-gray-600 text-sm">Hockey gave me everything, now it's my turn to give back</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to learn what it really takes to achieve your hockey dreams? Let's talk about the journey from dreamer to champion.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
