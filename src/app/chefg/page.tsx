import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function ChefGPage() {
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
              alt="Chef G - Team Chef"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Chef G</h1>
            <Badge variant="secondary" className="mb-4">Team Chef</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Fueling champions with passion and precision
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
                Ciao, hockey famiglia! I&apos;m Chef G, and everyone calls me that because I&apos;ve spent my career proving that great food and peak performance aren&apos;t opposites - they&apos;re partners. As a third-generation chef who discovered sports nutrition, I&apos;ve learned that feeding athletes is about more than calories and macros - it&apos;s about creating meals that fuel both body and soul.
              </p>
              <p>
                Growing up in my nonna&apos;s kitchen, I learned that food is love, tradition, and nourishment all in one. When I started working with hockey teams, I discovered that athletes needed more than just healthy food - they needed food that tasted incredible, supported their performance goals, and reminded them that someone cared about every detail of their success.
              </p>
              <p>
                I don&apos;t just cook meals - I craft performance fuel that happens to taste like it came from the best restaurant in town. Pre-game energy, post-workout recovery, travel nutrition - every plate is designed with purpose and prepared with passion.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              The best performance nutrition doesn&apos;t feel like a diet - it feels like a celebration of how good healthy food can taste when it&apos;s prepared with skill and love.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You can&apos;t out-train a bad diet, but you shouldn&apos;t have to suffer through a good one either.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Food is the fuel that powers dreams. Every meal is an opportunity to get closer to championship performance.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Nonna always said: &apos;Cook with love, eat with purpose.&apos; That&apos;s performance nutrition at its finest.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Kitchen Wisdom Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Chef G&apos;s Kitchen Wisdom</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Taste drives compliance</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Athletes won&apos;t eat healthy food consistently if it doesn&apos;t taste great</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Timing is everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">What you eat matters, when you eat it matters more</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Cultural comfort</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Familiar flavors help athletes feel at home, even on the road</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Fresh ingredients always</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Peak performance deserves peak quality in every component</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to fuel your performance with food that tastes as good as it works?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Benvenuti to my kitchen!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
