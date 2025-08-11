import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function BigBodyPage() {
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
              alt="Big Body - Power Forward"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Big Body</h1>
            <Badge variant="secondary" className="mb-4">Power Forward</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Size with skill, power with purpose
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
                Hey there, hockey grinders! I&apos;m Big Body, and everyone calls me that because at 6&apos;4&quot; and 220 pounds, I&apos;ve learned to use my size as both weapon and shield in the battles that happen around the net. I combine skill with grit to create problems for defenders and opportunities for my teammates.
              </p>
              <p>
                Growing up, coaches always told me to use my size, but I learned that being big isn&apos;t enough - you have to be smart, skilled, and purposeful with how you play. I&apos;m not just a big player, I&apos;m a complete player who happens to be big.
              </p>
              <p>
                My office is the area in front of the net where goals are scored the hard way. I screen goalies, battle for rebounds, deflect shots, and make life miserable for defenders. But I also create plays with my hands and vision that surprise people who only see my size.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Size is a gift, but skill is a choice. The best power forwards combine both to create matchup problems that teams can&apos;t solve.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The net-front isn&apos;t for everyone, but it&apos;s where championships are won. I&apos;ll take that real estate every time.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Big players who can handle the puck change games. Big players who can think change careers.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Physical play with purpose intimidates. Physical play with skill dominates.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Power Game Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Big Body&apos;s Power Game</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Own your space</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When you plant yourself somewhere, make others move around you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Hands match your heart</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Size gets you there, skill keeps you there</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Screen with purpose</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Blocking the goalie&apos;s view is an art form</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Create chaos</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When you&apos;re strong on the puck, good things happen around you</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to dominate the dirty areas?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s use size and skill to control the game where it matters most.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
