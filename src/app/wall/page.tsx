import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function WallPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-wall.webp"
              alt="Wall - Defensive Foundation"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Wall</h1>
            <Badge variant="secondary" className="mb-4">Defensive Foundation</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Unbreakable defense, immovable presence, team backbone
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
                Hey hockey world! I&apos;m Wall, and I&apos;m exactly what my name suggests - an immovable force that forwards simply cannot get past. I&apos;ve built my entire game around being the defensive foundation that my team can always count on, no matter what the situation.
              </p>
              <p>
                I&apos;m not the flashiest player on the ice, and I don&apos;t need to be. My job is to be the rock-solid presence that makes forwards think twice about coming into our zone. When the other team sees me on the ice, they know they&apos;re going to have to work for every inch of space they get.
              </p>
              <p>
                My teammates know they can trust me to hold down the fort while they make plays. I&apos;m the guy who blocks shots, clears the crease, and makes the simple, effective defensive plays that win games. I might not make the highlight reels, but coaches and teammates know my value.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Defense wins championships. I&apos;m here to be the foundation that makes every other player on this team better by doing the dirty work that needs to be done.
            </p>
          </CardContent>
        </Card>

        {/* Defensive Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Wall&apos;s Defensive Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Position over everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be in the right place at the right time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Block every shot</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Sacrifice your body for the team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Clear the crease</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Give your goalie a clear view of the puck</p>
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
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to build an unbreakable defense?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s create a wall they can&apos;t penetrate.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
