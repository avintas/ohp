import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function SteadyPage() {
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
              alt="Coach Steady - Backup Goalie"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Steady</h1>
            <Badge variant="secondary" className="mb-4">Backup Goalie</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Always ready, always prepared, always a teammate first
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
                Hey there, hockey family! I&apos;m Steady, and everyone calls me that because no matter what the situation - emergency start, back-to-back games, or playoff pressure - I bring the same calm, prepared mindset to every opportunity. I&apos;ve learned that being a backup goalie isn&apos;t about waiting for your chance - it&apos;s about being ready when your team needs you most.
              </p>
              <p>
                My journey taught me that success isn&apos;t always measured in starts or statistics. Sometimes it&apos;s measured in how you prepare your teammate for the biggest game of his career, how you support the team during tough stretches, and how you perform when called upon with everything on the line.
              </p>
              <p>
                I&apos;ve embraced my role as the ultimate team player. Whether I&apos;m starting game seven or backing up game one, my job is the same: give this team the goaltending it needs to win, whenever and however that&apos;s required.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Being ready isn&apos;t about when you play - it&apos;s about how you prepare, how you support, and how you respond when opportunity meets preparation.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best backup goalies make their starters better by pushing them in practice and supporting them in games.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;You&apos;re always one phone call, one injury, or one hot streak away from changing your career. Stay ready.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Team success matters more than individual glory. When we win, we all win.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Backup Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Steady&apos;s Backup Philosophy</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Preparation equals opportunity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">You never know when your number gets called</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Support your starter</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Competition in practice, unity in games</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Embrace your role</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every position on the team matters for championship success</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Stay mentally sharp</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Practice like you&apos;re starting, support like you&apos;re family</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to be the goalie your team can count on?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s stay steady and stay prepared.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
