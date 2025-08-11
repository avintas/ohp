import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function MindCoachPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-mindcoach.webp"
              alt="Mind Coach - Mental Performance Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Mind Coach</h1>
            <Badge variant="secondary" className="mb-4">Mental Performance Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Training the mind to unlock peak performance
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
                Welcome, hockey champions! I&apos;m Mind Coach, and I specialize in helping players develop the mental toughness and psychological skills needed to perform at their absolute best when it matters most.
              </p>
              <p>
                I&apos;ve worked with players at every level, from youth hockey to the professional ranks, and I&apos;ve seen firsthand how mental preparation can be the difference between good and great performance. My approach combines sports psychology, mindfulness techniques, and practical mental training exercises.
              </p>
              <p>
                Whether you&apos;re struggling with confidence, dealing with pressure, or just want to take your mental game to the next level, I have tools and strategies to help you develop the mindset of a champion.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              The mind is the most powerful tool in sports. Train it like you train your body - with consistency, purpose, and the understanding that mental strength is a skill that can be developed and improved.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your mind is like a muscle - the more you train it, the stronger it gets.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Confidence is not about being perfect. It&apos;s about trusting your preparation.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Pressure is a privilege. It means you&apos;re in a position to do something special.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Mental Training Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Mind Coach&apos;s Mental Training Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Visualize success</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">See it in your mind before it happens</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Control the controllables</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Focus on what you can influence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Embrace pressure</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Use it as fuel for performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Practice mental skills daily</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Consistency builds mental toughness</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to train your mind?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s unlock your mental potential and take your game to the next level.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
