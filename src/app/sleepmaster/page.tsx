import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function SleepMasterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Sleep Master
              </h1>
              <p className="mt-6 text-xl text-indigo-100">
                Sleep Specialist
              </p>
              <p className="mt-4 text-lg text-indigo-200">
                Where dreams meet peak performance
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Sleep Master"
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
                Hej, hockey champions! I'm Sleep Master, and I've spent my career proving that what happens when athletes sleep is just as important as what happens when they train. From sleep research labs to performance centers, I've learned that elite recovery isn't optional - it's the foundation of sustained excellence.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in long winter nights, I developed a deep appreciation for circadian rhythms and how light, darkness, and sleep cycles affect human performance. When I discovered how dramatically sleep quality impacts athletic performance, reaction time, and injury prevention, I found my mission: helping athletes turn rest into their secret weapon.
              </p>
              <p className="text-gray-700 mb-8">
                I don't just study sleep - I optimize it. Every athlete has a unique chronotype, recovery pattern, and sleep architecture. My job is helping players understand their personal sleep signature and design recovery protocols that maximize their body's natural repair and adaptation processes.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Sleep isn't time away from training - it's when training becomes adaptation, stress becomes strength, and potential becomes performance.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
                  <strong>"You don't get stronger during workouts - you get stronger during sleep. Respect the process."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
                  <strong>"The best athletes don't just train harder - they recover smarter. Elite sleep habits create elite performance."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
                  <strong>"Your body knows how to heal itself perfectly. My job is creating the conditions where that healing can happen optimally."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sleep Master's Science:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Quality over quantity</strong>
                    <p className="text-gray-600 text-sm">Eight hours of poor sleep loses to six hours of optimized sleep</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Consistency creates power</strong>
                    <p className="text-gray-600 text-sm">Regular sleep schedules enhance every physiological process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Environment affects everything</strong>
                    <p className="text-gray-600 text-sm">Temperature, darkness, and silence are performance tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Recovery is active</strong>
                    <p className="text-gray-600 text-sm">Strategic napping and sleep hygiene are trained skills</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to turn sleep into your performance advantage? Let's optimize your recovery for championship-level results.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
