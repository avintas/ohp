import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function BullPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-bull.webp"
              alt="Coach Bull - Strength & Conditioning Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Bull</h1>
            <Badge variant="secondary" className="mb-4">Strength & Conditioning Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Building bodies that can&apos;t be broken
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
                ¡Órale, hockey warriors! I&apos;m Coach Bull, and I earned that nickname by building players who are strong as bulls and twice as determined. From football fields to hockey training facilities, I&apos;ve spent my career understanding one truth: your body is your most important piece of equipment.
              </p>
              <p>
                My background taught me about building explosive power, but hockey showed me the importance of functional strength and injury prevention. Hockey players need to be strong enough to battle in corners, fast enough to chase down breakaways, and durable enough to play 82 games plus playoffs.
              </p>
              <p>
                I don&apos;t just build muscle - I build hockey athletes. Every exercise has a purpose, every rep has meaning, and every player leaves my gym better than they arrived.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Strength without purpose is just lifting weights. True hockey strength comes from training movements that make you dominant on the ice.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You can&apos;t fire a cannon from a canoe. Build a strong foundation first.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The weight room doesn&apos;t care about your stats. It only respects your effort.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Champions are built in the summer when no one is watching.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Training Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Bull&apos;s Training Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Hockey-specific movements</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every exercise should transfer to the ice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Injury prevention first</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The best ability is availability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Progressive overload</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Get a little better every single session</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Mental toughness</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Physical training builds mental resilience</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to build a body that dominates on the ice?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s get to work, champion.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}