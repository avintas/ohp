import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function GearGuyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-gearguy.webp"
              alt="Gear Guy - Equipment Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Gear Guy</h1>
            <Badge variant="secondary" className="mb-4">Equipment Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Perfect fit, peak performance, player comfort
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
                Hey hockey equipment world! I&apos;m Gear Guy, and I&apos;m the guy who makes sure every player feels like they&apos;re wearing a second skin when they hit the ice. I&apos;ve spent years learning the ins and outs of every piece of hockey equipment, from skates to helmets, and I know how to get that perfect fit that makes players forget they&apos;re wearing gear.
              </p>
              <p>
                I&apos;m not just about selling equipment - I&apos;m about understanding what each player needs to perform at their best. Whether it&apos;s a forward who needs lightweight, flexible gear for speed, or a defenseman who needs maximum protection, I know how to match the right equipment to the right player and the right position.
              </p>
              <p>
                My philosophy is simple: when players are comfortable and confident in their gear, they play better. I&apos;m here to make sure every piece of equipment fits perfectly, feels right, and gives players the confidence to focus on their game instead of their gear.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              The right gear in the right fit can make the difference between a good player and a great one. I&apos;m here to ensure every player has the equipment they need to perform at their absolute best.
            </p>
          </CardContent>
        </Card>

        {/* Equipment Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Gear Guy&apos;s Equipment Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Fit is everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Comfort leads to confidence and performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Position-specific gear</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Different positions need different equipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Quality over price</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Invest in equipment that lasts and protects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Ongoing support</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Equipment care and maintenance guidance</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to gear up for success?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s find the perfect fit for your game.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
