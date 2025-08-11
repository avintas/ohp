import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function ShutterPage() {
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
              alt="Shutter - Team Photographer"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Shutter</h1>
            <Badge variant="secondary" className="mb-4">Team Photographer</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Freezing moments, capturing magic
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
                Aloha, hockey ohana! I&apos;m Shutter, and everyone calls me that because I capture the moments that tell hockey&apos;s greatest stories. From unexpected backgrounds to frozen arenas, I&apos;ve learned that hockey&apos;s beauty isn&apos;t just in its speed - it&apos;s in the split-second emotions that reveal the soul of the game.
              </p>
              <p>
                Growing up where ice was something you put in drinks, I discovered hockey through photography. The combination of athletic artistry, raw emotion, and perfect timing made hockey the ultimate photographic challenge. Now I get to freeze those magical moments that happen too fast for the naked eye to fully appreciate.
              </p>
              <p>
                I don&apos;t just take pictures - I capture stories. The determination in a rookie&apos;s eyes, the celebration of a championship goal, the quiet moment of reflection after a tough loss. These images become the memories that last forever.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Great hockey photography isn&apos;t about perfect technical settings - it&apos;s about being in the right place at the right moment with the right heart to recognize magic when it happens.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best hockey photos aren&apos;t taken - they&apos;re felt first, then captured.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Every game has a thousand stories. My job is finding the ones worth remembering forever.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Hockey moves too fast for second chances. When the moment happens, you better be ready.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Photography Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Shutter&apos;s Photography Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Anticipate emotion</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The best shots happen after the play, not during it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Know the game</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Understanding hockey helps you predict where magic will happen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Respect the moment</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Some pictures are too important to miss for technical perfection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Tell complete stories</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">One great image can capture an entire season&apos;s journey</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to see hockey through a lens that captures its true beauty?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s freeze some magic together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
