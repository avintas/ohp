import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function FuelPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-fuel.webp"
              alt="Fuel - Nutrition & Energy Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Fuel</h1>
            <Badge variant="secondary" className="mb-4">Nutrition & Energy Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Powering your performance with smart nutrition
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
                What&apos;s up, hockey warriors! I&apos;m Fuel, and I&apos;m here to help you understand that what you put in your body directly impacts what you get out on the ice. Nutrition isn&apos;t just about eating healthy - it&apos;s about fueling your performance.
              </p>
              <p>
                I&apos;ve worked with players at every level, helping them optimize their energy levels, recovery, and overall performance through smart nutrition strategies. My approach is practical and personalized - I understand that every player has different needs, preferences, and schedules.
              </p>
              <p>
                Whether you&apos;re looking to gain strength, improve endurance, or just feel better during games and practices, I have the knowledge and tools to help you fuel your hockey journey properly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Food is fuel, and your body is a high-performance engine. Give it the right fuel at the right time, and it will perform at its absolute best. Nutrition is the foundation of athletic success.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You can&apos;t out-train a bad diet. Fuel your body like the athlete you are.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Timing is everything - eat for performance, not just for hunger.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Hydration is the secret weapon of champions.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Fuel&apos;s Nutrition Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Timing matters</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Eat the right foods at the right times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Quality over quantity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Choose nutrient-dense foods that fuel performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Hydration is key</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Water is essential for peak performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Recovery nutrition</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">What you eat after training is just as important</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to fuel your performance?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s optimize your nutrition and take your game to the next level.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
