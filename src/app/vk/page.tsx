import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function VKPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-vk.webp"
              alt="VK - Veteran Knowledge"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">VK</h1>
            <Badge variant="secondary" className="mb-4">Veteran Knowledge</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Decades of wisdom, battle-tested experience, proven leadership
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
                Hey hockey world! I&apos;m VK, which stands for Veteran Knowledge, and I&apos;m the guy who&apos;s been through every situation this game can throw at you. I&apos;ve played in championship games, I&apos;ve been through losing streaks, I&apos;ve seen teams fall apart and teams come together, and I&apos;ve learned what it takes to win when everything is on the line.
              </p>
              <p>
                My role isn&apos;t to be the fastest or the strongest player on the ice anymore - it&apos;s to be the guy who knows how to win. I&apos;m the one who can read the game before it happens, who knows what adjustments need to be made, and who can calm down a team when the pressure is mounting.
              </p>
              <p>
                I&apos;m here to pass on the knowledge that only comes from experience. Whether it&apos;s teaching young players how to handle the mental side of the game, or helping coaches understand what players are really thinking, I&apos;m the bridge between what the game looks like and what it actually is.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Experience is the best teacher, but only if you&apos;re willing to learn from it. I&apos;m here to share the lessons that can only be learned through time and trial.
            </p>
          </CardContent>
        </Card>

        {/* Veteran Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">VK&apos;s Veteran Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Read the game</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Anticipate what&apos;s coming before it happens</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Stay composed</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Pressure reveals character, don&apos;t let it change yours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Lead by example</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Young players watch everything you do</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Pass on knowledge</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your experience is valuable to the next generation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to learn from experience?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build on the wisdom that wins championships.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
