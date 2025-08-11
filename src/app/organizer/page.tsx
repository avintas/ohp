import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function OrganizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                The Organizer
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                Director of Hockey Operations
              </p>
              <p className="mt-4 text-lg text-blue-200">
                Making the impossible look effortless, one detail at a time
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="The Organizer"
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
                Hey there, hockey family! I'm The Organizer, and everyone calls me that because I make sure all the moving pieces of a hockey organization work together like a Swiss watch. With years in hockey operations, I've learned that championships aren't just won by players - they're won by organizations that handle every detail perfectly.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up learning that excellence is in the details, I discovered that whether you're running a restaurant or coordinating team travel, the principle is the same: when everything behind the scenes runs smoothly, the stars can shine on stage.
              </p>
              <p className="text-gray-700 mb-8">
                I handle everything from practice schedules to equipment logistics to making sure the buses run on time. It might not be glamorous, but I take pride in the fact that when The Organizer coordinates something, it goes exactly according to plan.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Champions don't succeed despite the details - they succeed because someone sweated every single detail so they didn't have to.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                  <strong>"Perfect preparation prevents poor performance. Period."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                  <strong>"Players should only worry about playing. Everything else is my department."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                  <strong>"The difference between good teams and great teams is usually found in the details that no one sees."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Organizer's Rules:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Plan for everything</strong>
                    <p className="text-gray-600 text-sm">Murphy's Law applies especially to hockey schedules</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Communicate constantly</strong>
                    <p className="text-gray-600 text-sm">Assumptions are the enemy of efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Build redundancy</strong>
                    <p className="text-gray-600 text-sm">Always have a backup plan for your backup plan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Sweat the small stuff</strong>
                    <p className="text-gray-600 text-sm">Small problems ignored become big problems later</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready for everything to run like clockwork? Let me organize your success.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
