import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function SilkyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-silky.webp"
              alt="Coach Silky - Skills Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Silky</h1>
            <Badge variant="secondary" className="mb-4">Skills Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Where artistry meets athletics
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
                Privyet, hockey artists! I&apos;m Coach Silky, and they call me that because I believe hockey should be as smooth and beautiful as it is competitive. With precision and passion, I&apos;ve dedicated my career to teaching players that skill isn&apos;t just about what you do with the puck - it&apos;s about how effortlessly you do it.
              </p>
              <p>
                My background in figure skating taught me that every movement should have purpose and grace. When I transitioned to hockey coaching, I brought that artistic eye to skill development. Great hockey players don&apos;t just execute techniques - they make them look like poetry in motion.
              </p>
              <p>
                I work with players who want to elevate their game beyond the ordinary. Anyone can learn to handle the puck, but not everyone can make it dance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              True skill isn&apos;t about complex moves - it&apos;s about making simple things look effortless and difficult things look simple.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Skill without creativity is just going through the motions. Creativity without skill is just chaos.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The puck should feel like an extension of your stick, and your stick should feel like an extension of your mind.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Masters practice until they can&apos;t get it wrong. Artists practice until they can&apos;t make it ugly.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Skill Development Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Silky&apos;s Skill Development</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Perfect the fundamentals</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Creativity is built on a foundation of solid basics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Practice with purpose</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every repetition should have intention behind it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Feel the ice</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Great players sense opportunities others never see</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Express yourself</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your style should be as unique as your fingerprint</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to turn your hockey into art?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s make magic with the puck.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
