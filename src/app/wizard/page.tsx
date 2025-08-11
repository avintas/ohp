import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function WizardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-ppwizard.webp"
              alt="Coach Wizard - Power Play Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Coach Wizard</h1>
            <Badge variant="secondary" className="mb-4">Power Play Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Turning man advantages into goal celebrations
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
                Ciao, hockey artists! I&apos;m Coach Wizard, and they call me that because I turn power plays into pure magic. With creativity and hockey passion, I&apos;ve spent my career transforming man advantages from wasted opportunities into goal-scoring masterpieces.
              </p>
              <p>
                Growing up watching the best teams, I learned that hockey is an art form - especially on the power play. You have space, you have time, you have an extra skater. That&apos;s not just an advantage, that&apos;s a canvas waiting for a masterpiece.
              </p>
              <p>
                I don&apos;t just teach systems, I teach creativity within structure. The best power plays look chaotic to opponents but feel like poetry to the players executing them. It&apos;s about reading the ice, finding seams, and having the confidence to make the perfect pass.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              A power play isn&apos;t about forcing plays - it&apos;s about creating space, reading reactions, and finding the moment when defense becomes impossible.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best power play goal is the one the goalie never sees coming.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Patience on the power play isn&apos;t waiting - it&apos;s hunting for the perfect moment to strike.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Five skaters with one mind beat six skaters with six different ideas.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Power Play Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Wizard&apos;s Power Play Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Movement creates opportunity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Static players create static power plays</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Read the penalty killer</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Let their aggression create your openings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">The pass creates the shot</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Great goals start with perfect setups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Confidence is contagious</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Believe in the play and your teammates will too</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to turn your power play into a weapon?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s create some magic on the ice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
