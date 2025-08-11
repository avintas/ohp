import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function TankPage() {
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
              alt="Coach Tank - Enforcer/Tough Guy"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Tank</h1>
            <Badge variant="secondary" className="mb-4">Enforcer/Tough Guy</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Protecting teammates, policing the game, playing with honor
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
                Ahoj, hockey warriors! I&apos;m Tank, and everyone calls me that because I roll through everything in my path to protect my teammates and uphold the honor of this game. From tough neighborhoods to professional rinks, I&apos;ve learned that being an enforcer isn&apos;t about looking for fights - it&apos;s about making sure nobody else has to fight because they know I will.
              </p>
              <p>
                My hockey heritage taught me that toughness comes in many forms. Sometimes it&apos;s dropping the gloves to defend a teammate. Sometimes it&apos;s playing through pain when your team needs you. Always, it&apos;s about respect - for the game, for your opponents, and especially for the guys who count on you to have their backs.
              </p>
              <p>
                People think enforcers are just fighters, but we&apos;re students of the game. I know when a hit crosses the line, when emotions are boiling over, and how to defuse situations before they explode. But when words aren&apos;t enough, I&apos;m ready to settle things the old-fashioned way.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              True toughness isn&apos;t about hurting people - it&apos;s about protecting people and making sure the game is played with respect and honor.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;I&apos;d rather fight one guy today than have my teammates worry about cheap shots tomorrow.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Respect is earned through your actions, not your words. Act like a warrior, fight like a gentleman.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best enforcers don&apos;t start trouble - we finish it.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Warrior Code Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Tank&apos;s Warrior Code</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Protect your teammates</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Their safety and confidence come before your statistics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Fight with purpose</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every battle should send a message about how your team will be treated</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Know the line</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Separate hard hockey from dirty hockey, police both</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Earn your ice time</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Toughness gets you respect, hockey skills keep you employed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to stand up for what&apos;s right?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s protect this team and honor this game.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
