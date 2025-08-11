import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function BulldogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-bulldog.webp"
              alt="Bulldog - Defensive Enforcer"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Bulldog</h1>
            <Badge variant="secondary" className="mb-4">Defensive Enforcer</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Unstoppable force, immovable object
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
                Hey hockey world! I&apos;m Bulldog, and I&apos;m exactly what my name suggests - tenacious, relentless, and impossible to move once I&apos;m set in my position. I&apos;m the guy who makes forwards think twice about coming into my zone, because they know they&apos;re going to pay the price.
              </p>
              <p>
                I&apos;ve built my game on being the immovable object in front of our net. When the other team thinks they&apos;ve got a clear path to our goalie, they find me instead. I&apos;m not the fastest skater, but I&apos;m the most determined. Every shift, I&apos;m out there to make sure our goalie has a clear view of the puck.
              </p>
              <p>
                My teammates know they can count on me to clear the crease, block shots, and make the simple, effective plays that win games. I might not make the highlight reels, but coaches and teammates know my value.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Defense wins championships. I&apos;m here to make sure the other team doesn&apos;t score, and I&apos;ll do whatever it takes to keep that puck out of our net.
            </p>
          </CardContent>
        </Card>

        {/* Defensive Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Bulldog&apos;s Defensive Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Position over speed</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be in the right place at the right time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Clear the crease</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Give your goalie a clear view of the puck</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Block every shot</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Sacrifice your body for the team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Simple, effective plays</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">No fancy moves, just solid defense</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to lock down the defense?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build a wall they can&apos;t break through.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
