import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function StrategistPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-strategist.webp"
              alt="Coach Strategist - Assistant Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Strategist</h1>
            <Badge variant="secondary" className="mb-4">Assistant Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Chess master on ice, building tomorrow&apos;s game today
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
                What&apos;s up, hockey innovators! I&apos;m Coach Strategist, and they call me that because I see hockey like a chess match - every move has consequences three plays down the line. With precision thinking and hockey intelligence, I&apos;ve spent my career breaking down barriers and building up game plans that turn good teams into great ones.
              </p>
              <p>
                My playing days taught me that hockey intelligence beats raw talent every time. I discovered that hockey could learn a lot from systematic thinking and tactical innovation. Now I bridge different approaches, bringing strategic innovation to teams ready to evolve.
              </p>
              <p>
                I specialize in special teams because that&apos;s where games are won and lost. Power plays and penalty kills aren&apos;t just about X&apos;s and O&apos;s - they&apos;re about reading opponents, anticipating patterns, and staying one step ahead.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Hockey is a game of constant decisions. The best teams don&apos;t just react - they anticipate, adapt, and always have a plan for what happens next.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best players think three moves ahead. The best teams think three games ahead.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Special teams aren&apos;t special because of the players - they&apos;re special because of the preparation.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Hockey IQ isn&apos;t about being the smartest person in the room. It&apos;s about making everyone around you smarter.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Strategist&apos;s Strategic Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Study tendencies</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every opponent has patterns, find them first</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Practice scenarios</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Preparation beats improvisation every time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Communicate constantly</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Information is only powerful when it&apos;s shared</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Adapt quickly</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The best game plan means nothing if you can&apos;t adjust</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to think the game at the next level?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s break down some film and unlock your hockey IQ.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
