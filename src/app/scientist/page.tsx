import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ScientistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Scientist
              </h1>
              <p className="mt-6 text-xl text-green-100">
                Sport Scientist
              </p>
              <p className="mt-4 text-lg text-green-200">
                Where precision meets performance innovation
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Scientist"
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
                Hei, hockey athletes! I&apos;m Scientist, and I&apos;ve dedicated my career to unlocking the scientific secrets that turn good hockey players into elite performers. From frozen lakes to training centers, I&apos;ve learned that peak performance isn&apos;t just about talent - it&apos;s about understanding and optimizing every system in the human body.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in world-renowned sports science culture, I learned that the approach to athletic development combines traditional training wisdom with cutting-edge research. My work focuses on cold-weather performance optimization, training load management, and the physiological adaptations that make hockey players exceptional athletes.
              </p>
              <p className="text-gray-700 mb-8">
                I don&apos;t just study numbers - I study people. Every athlete is a unique puzzle of genetics, training history, and potential. My job is finding the scientific keys that unlock each player&apos;s personal performance ceiling.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Science without application is just research. Applied science that improves performance and prevents injury - that&apos;s where championships are born.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  <strong>&quot;Your body is the ultimate laboratory. Every training session generates data that can make you better.&quot;</strong>
                </blockquote>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  <strong>&quot;Hockey dominance isn&apos;t an accident - it&apos;s the result of systematic, scientific athlete development.&quot;</strong>
                </blockquote>
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  <strong>&quot;The difference between good and great athletes often lies in the 1% improvements that science can identify and training can develop.&quot;</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Scientist&apos;s Approach:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Measure everything</strong>
                    <p className="text-gray-600 text-sm">You can&apos;t improve what you don&apos;t track</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Individual optimization</strong>
                    <p className="text-gray-600 text-sm">What works for one athlete might not work for another</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Recovery is performance</strong>
                    <p className="text-gray-600 text-sm">Adaptation happens during rest, not just training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Cold adaptation advantage</strong>
                    <p className="text-gray-600 text-sm">Understanding something special about winter training</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to unlock your performance potential through science? Let&apos;s discover what your body is truly capable of.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
