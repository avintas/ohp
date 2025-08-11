import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function ArchitectPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-architect.webp"
              alt="The Architect - General Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">The Architect</h1>
            <Badge variant="secondary" className="mb-4">General Manager</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Building championship teams, one smart move at a time
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
                Hey hockey family! I&apos;m The Architect, and they call me that because I don&apos;t just build rosters - I design championship cultures. With years in hockey management, from player agent to GM, I&apos;ve learned that winning teams aren&apos;t assembled by accident - they&apos;re constructed with vision, patience, and strategic thinking.
              </p>
              <p>
                Growing up watching construction work, I learned that every great building starts with a solid foundation. Same principle applies to hockey teams. You can have the flashiest talent in the world, but without the right foundation players, the right culture, and the right plan, you&apos;re just building a house of cards.
              </p>
              <p>
                I make the tough decisions so players can focus on playing. Every trade, every signing, every draft pick is about one thing: bringing home a championship for the fans who deserve it.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Championship teams aren&apos;t bought - they&apos;re built. Every decision I make today should make us better tomorrow and help us win when it matters most.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Good GMs make good trades. Great GMs make trades that look good three years later.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Culture beats talent when talent doesn&apos;t have culture.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The salary cap doesn&apos;t care about your feelings. Build a team that fits the math and the heart.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Management Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">The Architect&apos;s Management Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Plan three moves ahead</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every decision creates ripple effects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Culture is non-negotiable</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Skill gets you hired, character keeps you employed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Trust your scouts</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The best talent is often hidden in plain sight</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Patience builds champions</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The right move at the wrong time is still wrong</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to build something special?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s construct a championship together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
