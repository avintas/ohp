import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function AnalyzerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-notfound.webp"
              alt="Coach Analyzer - Performance Analyst"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Analyzer</h1>
            <Badge variant="secondary" className="mb-4">Performance Analyst</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Real-time insights for real-time results
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-8 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        {/* About Me Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">About Me</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                Hello, hockey strategists! I&apos;m Analyzer, and I live at the intersection of live game action and instant performance analysis. I&apos;ve built my career on turning real-time hockey data into immediate tactical advantages that coaches and players can use while games are still being decided.
              </p>
              <p>
                Growing up with an analytical mindset, I learned to love both the passion of hockey and the precision of data analysis. My specialty is taking the overwhelming amount of information generated during games and distilling it into clear, actionable insights that can change strategies, improve individual performance, and win crucial moments.
              </p>
              <p>
                I&apos;m not watching games as a fan - I&apos;m watching as a detective, looking for patterns, trends, and opportunities that others might miss. When a coach needs to know why the power play isn&apos;t working or how to exploit an opponent&apos;s defensive weakness, I provide the answers backed by data.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              The best analysis isn&apos;t the most complex - it&apos;s the most useful. Information becomes powerful when it&apos;s delivered clearly at the moment decisions need to be made.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Games are won in moments. My job is identifying those moments before they happen and helping teams capitalize when they arrive.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The difference between winning and losing is often hidden in the data that everyone sees but nobody analyzes.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Real-time analysis isn&apos;t about being perfect - it&apos;s about being useful when decisions matter most.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Framework Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Analyzer&apos;s Framework</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Timing is everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The right insight at the wrong time helps nobody</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Clarity over complexity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Coaches need answers, not equations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Pattern recognition</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Trends reveal opportunities and threats before they become obvious</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Continuous refinement</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every game teaches you how to analyze the next one better</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to turn real-time data into competitive advantages?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s analyze our way to better performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
