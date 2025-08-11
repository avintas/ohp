import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function EagleEyePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-eagleeye.webp"
              alt="Eagle Eye - Talent Scout"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Eagle Eye</h1>
            <Badge variant="secondary" className="mb-4">Talent Scout</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Spotting potential, discovering diamonds, building futures
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
                Hey hockey scouting world! I&apos;m Eagle Eye, and I&apos;m the guy who can spot a future star from a mile away. I&apos;ve spent years developing the ability to see beyond the obvious, to recognize the potential that others might miss, and to identify the players who have what it takes to succeed at the highest levels.
              </p>
              <p>
                My job isn&apos;t just about watching games - it&apos;s about understanding what makes players special. I look for the intangibles that don&apos;t show up on stat sheets: work ethic, hockey IQ, character, and the ability to rise to the occasion when it matters most. I&apos;m not just looking for the best player today; I&apos;m looking for the player who will be the best tomorrow.
              </p>
              <p>
                I&apos;ve learned that the best scouts are the ones who can see the complete picture. It&apos;s not just about skill or size or speed - it&apos;s about how all those elements come together, and how a player fits into a team&apos;s culture and system. I&apos;m here to find the players who will make teams better, not just the players who look good on paper.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Talent is everywhere, but greatness is rare. I&apos;m here to find the players who have both the skill and the character to become something special.
            </p>
          </CardContent>
        </Card>

        {/* Scouting Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Eagle Eye&apos;s Scouting Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Look beyond the obvious</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Find the hidden gems others miss</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Character over skill</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Talent gets you noticed, character keeps you employed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Project future potential</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">See what a player can become, not just what they are</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Fit matters</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Great players in the wrong system often fail</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to discover the next superstar?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s find the talent that will win championships.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
