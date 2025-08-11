import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function LightningPage() {
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
              alt="Coach Lightning - Speed Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Lightning</h1>
            <Badge variant="secondary" className="mb-4">Speed Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Where lightning strikes, opportunities follow
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
                Konnichiwa, hockey speed demons! I&apos;m Lightning, and everyone calls me that because when I hit top gear, defensemen see me coming and goalies see me going. I represent the evolution of modern hockey - where speed, skill, and hockey IQ combine to create opportunities that didn&apos;t exist in previous generations.
              </p>
              <p>
                Growing up in a family that valued both precision and hockey passion, I learned that speed without purpose is just skating fast. Real speed in hockey is about timing - knowing when to go, where to go, and how to use that extra step to create advantages for your teammates.
              </p>
              <p>
                I&apos;ve built my game around being a breakaway threat every shift. Whether it&apos;s a steal at center ice, a quick outlet pass, or just wearing down defenders over 60 minutes, my job is using my speed to create space and opportunities that make everyone around me more dangerous.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Speed kills, but only if you use it intelligently. The fastest player on the ice isn&apos;t always the one moving quickest - it&apos;s the one who arrives at the right place at the right time.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You can&apos;t teach speed, but you can teach when to use it. Timing turns fast skaters into game-breakers.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best part about being fast isn&apos;t beating defenders - it&apos;s the split second of panic in their eyes when they realize they can&apos;t catch you.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Speed creates space, space creates options, options create goals.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Speed Secrets Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Lightning&apos;s Speed Secrets</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Pick your spots</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Save your best bursts for when they matter most</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Use your reputation</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Sometimes the threat of speed is as dangerous as speed itself</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Create for others</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When defenders focus on your speed, teammates get open</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Condition like your career depends on it</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Speed in the third period wins games</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to outrun the competition?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s turn your speed into lightning strikes that change games.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
