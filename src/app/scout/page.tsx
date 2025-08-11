import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function ScoutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-scout.webp"
              alt="Scout - Talent Scout & Evaluator"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Scout</h1>
            <Badge variant="secondary" className="mb-4">Talent Scout & Evaluator</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Finding the next generation of hockey stars
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
                Welcome, hockey community! I&apos;m Scout, and I have one of the most exciting jobs in hockey - I get to discover and evaluate the next generation of talent. I spend countless hours watching games, analyzing players, and identifying those special qualities that separate good players from great ones.
              </p>
              <p>
                My expertise goes beyond just watching players skate and shoot. I evaluate character, work ethic, hockey IQ, and potential for growth. I look for players who not only have the physical tools but also the mental makeup to succeed at higher levels.
              </p>
              <p>
                Whether I&apos;m scouting for a junior team, college program, or professional organization, my goal is the same - to find players who can make a positive impact on and off the ice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Talent is everywhere, but character and work ethic are what separate the good from the great. I look for players who love the game, work hard, and have the potential to grow into something special.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best players aren&apos;t always the most talented ones.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Character counts as much as skill when evaluating talent.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Potential is what you see, but work ethic is what you get.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Scouting Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Scout&apos;s Evaluation Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Watch multiple games</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">One game doesn&apos;t tell the full story</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Evaluate character</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Skills can be taught, character is harder</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Project potential</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Look beyond current ability to future growth</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Trust your instincts</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Experience teaches you to recognize talent</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Want to be discovered?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Keep working hard and playing with passion - scouts are always watching.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
