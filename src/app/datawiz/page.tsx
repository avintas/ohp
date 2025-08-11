import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function DataWizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Data Wiz
              </h1>
              <p className="mt-6 text-xl text-purple-100">
                Data Scientist
              </p>
              <p className="mt-4 text-lg text-purple-200">
                Turning data into decisions, statistics into strategy
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/personas-im/a-notfound.webp"
                alt="Data Wiz"
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
                안녕하세요, hockey innovators! I'm Data Wiz, and everyone calls me that because I have the ability to find meaningful patterns in the chaos of hockey statistics. From engineering to analytics departments, I've learned that data doesn't lie - but it also doesn't speak until someone who understands both hockey and mathematics translates it into actionable insights.
              </p>
              <p className="text-gray-700 mb-6">
                Growing up in a tech-savvy family, I learned to love both programming and hockey. When I discovered I could combine my data science skills with my passion for the game, I found my calling: helping teams make smarter decisions through better analysis of player performance, game situations, and strategic opportunities.
              </p>
              <p className="text-gray-700 mb-8">
                I don't just crunch numbers - I tell stories with data. Every statistic represents a human moment, a strategic decision, or a performance opportunity. My job is finding the numbers that matter and presenting them in ways that coaches, players, and managers can use to win games.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Philosophy
              </h3>
              <p className="text-gray-700 mb-8 italic text-lg">
                Data is only as valuable as the decisions it enables. The best analysis doesn't just describe what happened - it predicts what could happen and prescribes what should happen.
              </p>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Favorite Quotes & Advice
              </h3>
              <div className="space-y-4 mb-8">
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                  <strong>"Traditional stats tell you what happened. Advanced analytics tell you why it happened and how to make it happen again."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                  <strong>"The most important number isn't always the biggest one. Sometimes the smallest edge creates the biggest advantage."</strong>
                </blockquote>
                <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
                  <strong>"Players play, coaches coach, but data never lies about what actually works."</strong>
                </blockquote>
              </div>

              <Separator className="my-8" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Data Wiz's Analytics Approach:
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <strong className="text-gray-900">Context over numbers</strong>
                    <p className="text-gray-600 text-sm">Every statistic exists within a situation that affects its meaning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <strong className="text-gray-900">Predictive over descriptive</strong>
                    <p className="text-gray-600 text-sm">Focus on what will happen, not just what did happen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <strong className="text-gray-900">Actionable insights</strong>
                    <p className="text-gray-600 text-sm">Analysis that doesn't lead to better decisions is just trivia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <strong className="text-gray-900">Human-centered data</strong>
                    <p className="text-gray-600 text-sm">Remember that every number represents real people and real performance</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600 italic">
                  <em>Ready to let data drive your decisions? Let's find the numbers that unlock your competitive advantage.</em>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
