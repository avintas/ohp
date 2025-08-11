import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function BrickWallPage() {
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
              alt="Brick Wall - Starting Goaltender"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Brick Wall</h1>
            <Badge variant="secondary" className="mb-4">Starting Goaltender</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Between the pipes, beyond the possible
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
                Salut, hockey faithful! I&apos;m Brick Wall, and fans call me that because I&apos;ve built my career on making the impossible save look routine and the routine save look impossible. From frozen ponds to championship conversations, I&apos;ve learned that goaltending isn&apos;t just about stopping pucks - it&apos;s about stopping momentum, stopping doubt, and giving your team the confidence to play fearlessly.
              </p>
              <p>
                Growing up in rich goaltending tradition, I learned that being a goalie means carrying the hopes of everyone who believes in your team. Every save matters, every goal against hurts, but what defines you is how you respond when the pressure is highest and the stakes are everything.
              </p>
              <p>
                The crease is my sanctuary and my battlefield. When I&apos;m between those pipes, time slows down, the noise fades away, and it&apos;s just me, the puck, and the opportunity to be the difference between winning and losing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Goaltending is 90% mental and the other 10% is mental too. Master your mind, and your body will follow.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The save you make in the first period can be just as important as the one you make in overtime.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Goalies don&apos;t stop pucks - we stop dreams, break hearts, and change destinies. Handle that responsibility with respect.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best goaltenders make their teammates play better because they know someone has their back.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Goalie Code Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Brick Wall&apos;s Goalie Code</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Stay in the moment</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The last goal and the next shot don&apos;t exist, only this one matters</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Control your crease</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Own your territory and make shooters uncomfortable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Lead through calmness</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When your team is panicking, your composure guides them home</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Respect the position</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Goaltending is a privilege earned through dedication</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to stand between your team and defeat?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build a wall they can&apos;t break.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
