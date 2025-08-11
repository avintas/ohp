import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ResearcherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Researcher
              </h1>
              <p className="mt-6 text-xl text-teal-100">
                Research Coordinator
              </p>
              <p className="mt-4 text-lg text-teal-200">
                Bridging academic research with championship results
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Researcher"
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
                Bonjour, hockey innovators! I'm Researcher, and I've dedicated my career to translating cutting-edge sports science research into practical applications that make hockey players faster, stronger, and more resilient. With advanced training and experience in both academic research and professional sports, I bridge the gap between what science discovers and what athletes actually need.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in a bilingual environment taught me that the best solutions often come from combining different perspectives and approaches. My role is taking the latest research from universities around the world and testing how it can be adapted to the unique demands of hockey performance and training.
              </p>
              <p className="text-gray-700 mb-8">
                I don't just read research papers - I design studies, coordinate trials, and implement evidence-based practices that give teams competitive advantages. Every training innovation, recovery protocol, and performance enhancement we use starts with solid science and gets validated through careful testing.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                The best research isn't published in journals - it's proven on the ice. Science only matters when it makes athletes better at what they love to do.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
                  <strong>"Today's experimental research becomes tomorrow's standard practice. We're always working one step ahead of the competition."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
                  <strong>"Evidence-based training isn't about following trends - it's about understanding principles and adapting them intelligently."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
                  <strong>"The most valuable research answers questions that athletes and coaches didn't even know they should be asking."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Researcher's Philosophy:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Practical application</strong>
                    <p className="text-gray-600 text-sm">Research that doesn't improve performance isn't worth pursuing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Rigorous testing</strong>
                    <p className="text-gray-600 text-sm">Every new method gets validated before it gets implemented</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Continuous learning</strong>
                    <p className="text-gray-600 text-sm">Sports science evolves rapidly, so must our approaches</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Collaborative innovation</strong>
                    <p className="text-gray-600 text-sm">The best solutions come from combining expertise across disciplines</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to train with methods that are years ahead of the competition? Let's apply tomorrow's science to today's performance.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
