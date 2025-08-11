import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function MilesPage() {
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
              alt="Miles - Distance Runner"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Miles</h1>
            <Badge variant="secondary" className="mb-4">Distance Runner</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Endurance athlete, mental toughness, relentless determination
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
                Hey hockey endurance world! I&apos;m Miles, and I&apos;m the guy who knows that the game isn&apos;t won in the first period - it&apos;s won in the third period when everyone else is tired and you&apos;re still going strong. I&apos;ve built my entire game around being the player who can outlast the competition.
              </p>
              <p>
                I&apos;m not the fastest player on the ice, and I don&apos;t need to be. My strength is my ability to maintain the same level of intensity from the opening faceoff to the final buzzer. When other players are slowing down, I&apos;m speeding up. When they&apos;re getting tired, I&apos;m getting stronger.
              </p>
              <p>
                My teammates know they can count on me to be there when it matters most. I&apos;m the guy who wins races to loose pucks in the third period, who can still make crisp passes when everyone else is exhausted, and who has the mental toughness to push through when the body wants to quit.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Endurance is a choice, not a gift. I&apos;m here to prove that mental toughness and physical conditioning can overcome any obstacle the game throws at you.
            </p>
          </CardContent>
        </Card>

        {/* Endurance Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Miles&apos; Endurance Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Pace yourself</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Start strong, finish stronger</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Mental toughness</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When the body quits, the mind takes over</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Consistent effort</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Same intensity from start to finish</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Third period hero</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be the difference when it matters most</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to go the distance?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build the endurance that wins championships.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
