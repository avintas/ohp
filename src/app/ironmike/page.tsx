import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function IronMikePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-ironmike.webp"
              alt="Coach Iron Mike - Head Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Iron Mike</h1>
            <Badge variant="secondary" className="mb-4">Head Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Building champions through discipline and heart
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
                Hey hockey family! I&apos;m Iron Mike, and I earned that name through 12 years of demanding excellence from every player who steps into my locker room. From junior leagues to professional hockey, I&apos;ve learned that championship teams aren&apos;t built on talent alone - they&apos;re forged through discipline, system play, and an unbreakable work ethic.
              </p>
              <p>
                My playing days as a defenseman taught me that hockey is the ultimate team sport. You can have all the skill in the world, but if you don&apos;t trust your linemates and commit to the system, you&apos;ll never reach your potential. That injury that ended my playing career? Best thing that ever happened to me - it led me to coaching, where I discovered my real purpose.
              </p>
              <p>
                I don&apos;t coach players, I develop champions. I don&apos;t just teach hockey, I teach life lessons that extend far beyond the rink.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Championship teams are built on three pillars: respect for the game, respect for your teammates, and respect for yourself. Master those, and the wins will follow.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Talent gets you noticed. Character gets you drafted. Work ethic gets you paid.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The system doesn&apos;t fail players - players fail the system when they think they&apos;re bigger than the team.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;I don&apos;t care if you&apos;re my leading scorer or fourth-line grinder. In my locker room, everyone earns their ice time every single shift.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Championship Rules Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Iron Mike&apos;s Championship Rules</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Compete every shift</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Champions are made in practice, not just games</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Trust the system</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Individual brilliance wins games, team systems win championships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Earn everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Respect, ice time, and success are never given, always earned</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Lead by example</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your teammates are watching, even when you think they&apos;re not</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to commit to excellence?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Step into my locker room and let&apos;s build something special.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
