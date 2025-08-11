import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function MagicHandsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-magichands.webp"
              alt="Magic Hands - Equipment & Gear Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Magic Hands</h1>
            <Badge variant="secondary" className="mb-4">Equipment & Gear Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Making your gear work like magic
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
                Hey hockey family! I&apos;m Magic Hands, and I&apos;m the person who makes sure your equipment is working perfectly so you can focus on your game. I&apos;ve been working with hockey gear for years, and I know that the right equipment setup can make all the difference.
              </p>
              <p>
                My specialty is customizing gear to fit each player&apos;s unique needs and preferences. Whether it&apos;s getting your skates perfectly sharpened, adjusting your stick flex, or making sure your helmet fits like a glove, I have the skills and knowledge to optimize your equipment.
              </p>
              <p>
                I believe that when your gear feels right, you play right. Every adjustment, every tweak, every piece of equipment is an opportunity to improve your performance and comfort on the ice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Equipment is an extension of your body. When it&apos;s properly fitted and maintained, it becomes invisible - you don&apos;t think about it, you just play. That&apos;s when the magic happens.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best equipment is the equipment you don&apos;t notice.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Sharp skates are happy skates. Keep them that way.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your stick is your wand - treat it with respect and it will work magic.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Equipment Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Magic Hands&apos; Equipment Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Fit is everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Equipment that fits properly performs better</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Maintenance matters</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Regular care extends equipment life and performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Customization is key</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Tailor your gear to your unique needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Trust your gear</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">When equipment feels right, confidence follows</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Need equipment magic?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s make your gear work perfectly for you.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
