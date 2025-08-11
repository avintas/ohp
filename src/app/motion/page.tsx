import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function MotionPage() {
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
              alt="Coach Motion - Biomechanics Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Motion</h1>
            <Badge variant="secondary" className="mb-4">Biomechanics Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Perfecting movement, optimizing efficiency
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
                Namaste, hockey movement artists! I&apos;m Motion, and everyone calls me that because I&apos;ve spent my career studying, analyzing, and perfecting the beautiful biomechanics of human athletic movement. With advanced training in biomechanics and a passion for hockey&apos;s unique movement patterns, I help players discover the most efficient ways their bodies can generate power, speed, and precision.
              </p>
              <p>
                Growing up watching different sports, I was fascinated by how slight changes in technique could dramatically improve performance. When I discovered hockey&apos;s complex movement demands - skating, shooting, checking, all while handling a puck - I found my calling in helping athletes move better, not just harder.
              </p>
              <p>
                I use motion capture technology, force plates, and advanced analysis to break down every aspect of hockey movement. But technology is just the tool - the real magic happens when we translate that data into cues that help players feel the difference in their bodies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Perfect movement isn&apos;t about looking textbook - it&apos;s about finding the most efficient way for YOUR body to generate maximum performance with minimum energy waste.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Every great hockey player is a movement genius, whether they know it or not. My job is helping them understand their own brilliance.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Efficiency beats power. The player who wastes less energy in movement has more energy for performance when it matters.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Small adjustments in biomechanics create large improvements in results. We&apos;re often just one cue away from a breakthrough.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Movement Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Motion&apos;s Movement Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Individual optimization</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your ideal technique might look different from the textbook</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Efficiency over effort</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Work smarter, not just harder</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Feel before force</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Understand the movement before you try to power through it</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Progressive refinement</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Perfect practice makes permanent, so let&apos;s make it perfectly efficient</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to unlock your body&apos;s movement potential?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s optimize every stride, shot, and play through better biomechanics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
