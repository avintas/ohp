import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Operations
              </h1>
              <p className="mt-6 text-xl text-orange-100">
                Arena Operations Manager
              </p>
              <p className="mt-4 text-lg text-orange-200">
                Orchestrating perfection, one game day at a time
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Operations"
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
                Hello, hockey operations family! I'm Operations, and I've built my career on making sure that every single detail of game day runs like clockwork. With event management background and precision mindset, I've learned that great hockey experiences don't happen by accident - they're the result of meticulous planning, flawless execution, and having backup plans for your backup plans.
              </p>
              <p className="text-gray-700 mb-6">
                Coming from the corporate event world to hockey operations taught me that sports fans are the most passionate customers you'll ever serve. They invest their emotions, their time, and their money into experiences that I help create. Every decision I make - from crowd flow to concession timing to ice maintenance - affects whether thousands of people go home happy or disappointed.
              </p>
              <p className="text-gray-700 mb-8">
                I coordinate everything from puck drop to the final horn: security, concessions, ice crew, entertainment, emergency protocols, and a thousand other details that make the difference between a good game experience and an unforgettable one.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Perfect game day operations are invisible operations. When everything runs smoothly, nobody notices my work - and that's exactly how it should be.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                  <strong>"Game day success is 90% preparation and 10% adaptation. But that 10% is where championships and memories are made."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                  <strong>"Every fan deserves to feel like this arena was designed specifically for their perfect hockey experience."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                  <strong>"Problems will happen. Champions are the people who solve them so quickly that nobody else even knows there was a problem."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Operations' Excellence:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Plan for everything</strong>
                    <p className="text-gray-600 text-sm">Murphy's Law applies especially to live events with thousands of people</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Communication prevents chaos</strong>
                    <p className="text-gray-600 text-sm">Every department needs to know the plan and any changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Fan experience first</strong>
                    <p className="text-gray-600 text-sm">Every operational decision should enhance, never detract from, the game</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Stay calm under pressure</strong>
                    <p className="text-gray-600 text-sm">When thousands of people are counting on you, composure is crucial</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready for game day operations that run perfectly every single time? Let's create experiences that fans will never forget.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
