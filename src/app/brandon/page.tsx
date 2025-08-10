import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BrandonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/brandon-headshot-avatar.webp"
              alt="Brandon 'Edge' Lemaire - Skating Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Brandon "Edge" Lemaire</h1>
            <Badge variant="secondary" className="mb-4">Skating Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Perfect your stride, perfect your game
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
                What's up, hockey fam! I'm Brandon, but everyone calls me "Edge" because I'm obsessed with helping players master their edge work. For the past 8 years, I've been teaching one simple truth: everything great in hockey starts with great skating.
              </p>
              <p>
                Growing up playing AAA hockey in Toronto, I learned that skill gets you noticed, but skating gets you paid. After my junior career, I discovered my real talent wasn't putting pucks in nets - it was helping others find their skating superpowers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Skating is your hockey superpower. Master it, and everything else becomes easier. Stick-handling, shooting, checking - it all starts with being comfortable on your blades.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                "Smooth is fast. Fast isn't always smooth. Be smooth first."
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                "Your edges are your steering wheel. Learn to drive before you try to race."
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                "Every pro was once a beginner who refused to give up on their fundamentals."
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Brandon's Quick Tips</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Bend your knees</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Power comes from your legs, not your back</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Trust your edges</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Commit to your turns and crossovers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Small steps lead to big strides</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Perfect the basics daily</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Balance beats speed</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Control first, velocity second</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beyond the Ice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Beyond the Ice</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                When I'm not coaching, I'm studying how the game's evolving. Today's players are faster and more agile than ever, but the fundamentals never change. I work with house league heroes and elite prospects alike - because everyone deserves to feel confident on skates.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to find your edge?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let's get to work.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
