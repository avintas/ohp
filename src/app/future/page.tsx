import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function FuturePage() {
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
              alt="Coach Future - Future Planning Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Future</h1>
            <Badge variant="secondary" className="mb-4">Future Planning Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Building tomorrow&apos;s champions today
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
                What&apos;s up, hockey visionaries! I&apos;m Coach Future, and I&apos;m here to help you see beyond the next game, the next season, even the next contract. My specialty is helping players and teams build sustainable success that lasts.
              </p>
              <p>
                I&apos;ve spent my career studying the patterns of championship teams and the career trajectories of successful players. What I&apos;ve learned is that the best teams don&apos;t just win today - they position themselves to win tomorrow, next year, and for years to come.
              </p>
              <p>
                My approach combines data analysis, trend forecasting, and strategic planning to help you make decisions that benefit your long-term hockey career and life beyond the rink.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Success in hockey isn&apos;t just about what you do today - it&apos;s about building the foundation for what you&apos;ll become tomorrow. Plan your future, don&apos;t just hope for it.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best time to plant a tree was 20 years ago. The second best time is now.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your future self is watching you right now through memories.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Championship teams are built in the offseason, not just during the season.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Future Planning Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Future&apos;s Planning Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Think long-term</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every decision today affects tomorrow</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Build sustainable habits</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Small daily improvements compound over time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Plan for multiple scenarios</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be ready for whatever the future brings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Invest in yourself</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your greatest asset is your potential</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to build your future?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s create a roadmap to your hockey dreams.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
