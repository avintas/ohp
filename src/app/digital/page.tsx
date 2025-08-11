import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function DigitalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-digital.webp"
              alt="Digital - Technology Innovator"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Digital</h1>
            <Badge variant="secondary" className="mb-4">Technology Innovator</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Bridging hockey and technology, creating the future of the game
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
                Hey hockey tech world! I&apos;m Digital, and I&apos;m the guy who&apos;s bringing the future of hockey into the present. I&apos;ve spent years exploring how technology can enhance every aspect of the game, from player development to team analytics, and I&apos;m here to make sure hockey doesn&apos;t get left behind in the digital revolution.
              </p>
              <p>
                I&apos;m not just a tech guy who likes hockey - I&apos;m a hockey guy who understands technology. I know that the best innovations are the ones that serve the game, not the other way around. Whether it&apos;s developing apps that help players track their progress, creating platforms that connect teams and fans, or building tools that give coaches better insights, I&apos;m focused on solutions that make hockey better.
              </p>
              <p>
                My mission is to bridge the gap between traditional hockey culture and modern technology. I want to preserve what makes this game special while giving it the tools it needs to grow and evolve. The future of hockey is digital, and I&apos;m here to make sure it&apos;s a future worth playing in.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Technology should enhance hockey, not replace it. I&apos;m here to create digital solutions that make the game more accessible, more engaging, and more successful for everyone involved.
            </p>
          </CardContent>
        </Card>

        {/* Technology Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Digital&apos;s Technology Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Enhance, don&apos;t replace</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Technology should serve the game</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">User experience first</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Make it simple and intuitive</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Connect communities</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Bring fans, players, and teams together</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Continuous innovation</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Always looking for the next breakthrough</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to digitize your hockey experience?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build the future of hockey together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
