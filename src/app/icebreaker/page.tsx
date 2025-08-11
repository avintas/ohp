import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function IcebreakerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-icebreaker.webp"
              alt="Icebreaker - Team Energizer"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Icebreaker</h1>
            <Badge variant="secondary" className="mb-4">Team Energizer</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Breaking tension, building momentum, creating energy
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
                Hey hockey world! I&apos;m Icebreaker, and I&apos;m the guy who knows how to turn a tense locker room into a confident, energized team ready to dominate. I&apos;ve always had this ability to read the room and know exactly what the team needs to hear to get fired up and focused.
              </p>
              <p>
                Whether it&apos;s before a big game, during a losing streak, or when the pressure is mounting, I know how to break through that tension and get everyone back on the same page. I&apos;m not just the funny guy - I&apos;m the guy who can turn nervous energy into positive momentum.
              </p>
              <p>
                My superpower is timing. I know when to crack a joke, when to share a story, when to challenge someone, and when to just listen. Every team needs someone who can break the ice and get the real conversations flowing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Energy is contagious. I&apos;m here to break through the tension and create the positive momentum that turns good teams into great ones.
            </p>
          </CardContent>
        </Card>

        {/* Energy Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Icebreaker&apos;s Energy Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Read the room</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Know what energy the team needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Timing is everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Know when to speak and when to listen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Turn tension into energy</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Transform nervous energy into momentum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Keep it authentic</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Be real, not just entertaining</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to break through the tension?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s create the energy that wins championships.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
