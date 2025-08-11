import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function TechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Tech
              </h1>
              <p className="mt-6 text-xl text-cyan-100">
                Technology Integration Specialist
              </p>
              <p className="mt-4 text-lg text-cyan-200">
                Where innovation meets hockey tradition
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Tech"
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
                Hey there, hockey futurists! I'm Tech, and everyone calls me that because I'm the bridge between cutting-edge technology and championship hockey performance. With engineering background and innovation experience, I've spent my career taking innovations from the tech world and adapting them to solve real problems for hockey players, coaches, and teams.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in the heart of tech innovation while falling in love with hockey taught me that the best technology doesn't replace human expertise - it amplifies it. My background gave me experience with user-centered design, but hockey gave me the passion to create tools that actually make athletes better.
              </p>
              <p className="text-gray-700 mb-8">
                I don't just implement technology - I integrate it seamlessly into training and competition environments. Whether it's wearable sensors, video analysis systems, or performance tracking apps, my job is making sure technology serves the athlete, not the other way around.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                The best technology is invisible technology. When tools work perfectly, athletes can focus on performance instead of figuring out how to use gadgets.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-700">
                  <strong>"Technology should feel like magic, not work. If athletes have to think about the tech, we haven't done our job right."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-700">
                  <strong>"Data without context is just noise. Great technology tells stories that help athletes write better chapters."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-700">
                  <strong>"The future of hockey isn't about replacing coaches with computers - it's about giving coaches superpowers through smart technology."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tech's Innovation Principles:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">User-centered design</strong>
                    <p className="text-gray-600 text-sm">Athletes and coaches define what good technology looks like</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Seamless integration</strong>
                    <p className="text-gray-600 text-sm">New tools should enhance existing workflows, not disrupt them</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Actionable insights</strong>
                    <p className="text-gray-600 text-sm">Technology that doesn't lead to better decisions is just expensive distraction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Continuous iteration</strong>
                    <p className="text-gray-600 text-sm">The best systems evolve based on real-world feedback</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to train with technology that feels like it's from the future? Let's integrate innovation that makes you unstoppable.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
