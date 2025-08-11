import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function RookiePage() {
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
              alt="Rookie - Rookie Forward"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Rookie</h1>
            <Badge variant="secondary" className="mb-4">Rookie Forward</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Dream big, work harder, never stop learning
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
                What&apos;s up, hockey world! I&apos;m Rookie, and I&apos;m living proof that dreams really do come true if you&apos;re willing to work for them. As someone who just finished their first professional season, I&apos;m still pinching myself every time I step on the ice with players I used to watch on TV.
              </p>
              <p>
                Growing up with hockey tradition and work ethic, I learned that talent might get you noticed, but character and dedication get you to the show. My family moved to give me better opportunities, and I&apos;m determined to make every sacrifice they made worth it.
              </p>
              <p>
                Every day in the pros is a masterclass. I&apos;m like a sponge, soaking up everything I can from veterans who&apos;ve been where I want to go. The speed is incredible, the skill level is unreal, but what surprises me most is how much these guys care about helping younger players succeed.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Stay hungry, stay humble, and never forget that every shift is an opportunity to prove you belong here.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You don&apos;t get a second chance to make a first impression, but you get 82 games to prove your first impression was just the beginning.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The difference between juniors and the pros isn&apos;t just speed - it&apos;s making the right decision at that speed.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Every veteran was once a rookie who refused to give up on their dream.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Rookie Rules Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Rookie&apos;s Rules</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Earn your ice time</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Nothing is given at this level, everything is earned</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Learn from everyone</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Even the fourth-line guy has wisdom you need</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Stay confident but coachable</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Believe in yourself while staying open to improvement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Remember where you came from</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Success is sweeter when you share it</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to chase your pro dreams?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s work harder than everyone thinks is possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
