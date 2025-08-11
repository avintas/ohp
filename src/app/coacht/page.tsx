import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function CoachTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Coach T
              </h1>
              <p className="mt-6 text-xl text-red-100">
                Youth Hockey Director
              </p>
              <p className="mt-4 text-lg text-red-200">
                Growing the game, one young dreamer at a time
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Coach T"
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
                Hey there, hockey families! I'm Coach T, and all the kids call me that because I've dedicated my life to nurturing the next generation of hockey players and hockey lovers. With decades of coaching experience and a passion for youth development, I've learned that the future of hockey isn't just about winning games - it's about building character, fostering love for the sport, and creating memories that last a lifetime.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in a hockey family taught me that the best coaches don't just teach skills - they inspire dreams. My approach combines technical excellence with emotional intelligence, understanding that every young player is unique and needs different approaches to unlock their potential.
              </p>
              <p className="text-gray-700 mb-8">
                I don't just coach hockey - I coach life through hockey. Every practice, every game, every interaction is an opportunity to teach values like teamwork, perseverance, respect, and the joy of competing. My job is helping young athletes fall in love with the game while developing the skills and character that will serve them both on and off the ice.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                The best coaches don't create players - they create people who happen to play hockey. Success is measured in smiles, growth, and love for the game, not just wins and losses.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
                  <strong>"Every player is one great practice away from being great. My job is making sure they show up to that practice."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
                  <strong>"The best players aren't always the most talented - they're the ones who love the game the most."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-700">
                  <strong>"Coaching youth hockey isn't about creating NHL players - it's about creating people who will love hockey for the rest of their lives."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coach T's Coaching Principles:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Character first</strong>
                    <p className="text-gray-600 text-sm">Good people make good hockey players</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Individual attention</strong>
                    <p className="text-gray-600 text-sm">Every player learns differently and deserves personalized coaching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Fun is fundamental</strong>
                    <p className="text-gray-600 text-sm">If they're not having fun, they're not learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Long-term development</strong>
                    <p className="text-gray-600 text-sm">Focus on skills that will serve them throughout their hockey journey</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to start your hockey journey with a coach who believes in you? Let's grow together, one practice at a time.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
