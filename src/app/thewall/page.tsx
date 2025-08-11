import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function TheWallPage() {
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
              alt="Coach The Wall - Goalie Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach The Wall</h1>
            <Badge variant="secondary" className="mb-4">Goalie Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Building fortresses between the pipes
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
                Hei, goalie warriors! I&apos;m Coach The Wall, and they call me that - not just because of my playing days, but because I build mental and technical walls that make goalies unbeatable. From professional goaltending to coaching the next generation, I&apos;ve dedicated my life to the art and science of goaltending.
              </p>
              <p>
                I understand that goaltending is 90% mental and the other 10% is mental too. My playing career taught me that technique gets you to the show, but mental strength keeps you there. Every save is a battle, every goal against is a lesson, and every shutout is a masterpiece.
              </p>
              <p>
                I work with goalies who want to be more than shot-stoppers - they want to be game-changers. The goalie who controls their crease controls the game.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Goaltending is about controlling what you can control: your preparation, your positioning, and your mindset. Everything else is just noise.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The puck doesn&apos;t care about your last save or your next one. Only this one matters.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;A great goalie makes the impossible save look routine and the routine save look impossible.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your crease is your castle. Defend it like your kingdom depends on it.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Goalie Fundamentals Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">The Wall&apos;s Goalie Fundamentals</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Positioning beats reflexes</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be in the right place before the shot comes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Read the play, not the puck</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Anticipate where the danger is coming from</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Control your rebounds</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every save should end the threat, not create a new one</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Mental reset between plays</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The next shot is the only shot that matters</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to become unbeatable between the pipes?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build your wall.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
