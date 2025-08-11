import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function NumbersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-numbers.webp"
              alt="Numbers - Analytics Expert"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Numbers</h1>
            <Badge variant="secondary" className="mb-4">Analytics Expert</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Data-driven decisions, statistical insights, winning formulas
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
                Hey hockey analytics world! I&apos;m Numbers, and I&apos;m the guy who turns raw data into winning strategies. I&apos;ve spent years studying the numbers that make hockey teams successful, from possession metrics to scoring efficiency, and I know how to translate those insights into actionable game plans.
              </p>
              <p>
                I&apos;m not just a stats guy - I&apos;m a hockey guy who happens to love numbers. I understand that analytics are tools to enhance decision-making, not replace hockey sense. My job is to find the patterns that others miss, identify the metrics that actually matter, and present the information in ways that coaches and players can use.
              </p>
              <p>
                Whether it&apos;s analyzing opponent tendencies, optimizing line combinations, or identifying undervalued players, I&apos;m here to make sure every decision is backed by solid data. The numbers don&apos;t lie, but they need to be interpreted correctly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Data without insight is just noise. I&apos;m here to find the meaningful patterns that give teams the competitive edge they need to win.
            </p>
          </CardContent>
        </Card>

        {/* Analytics Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Numbers&apos; Analytics Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Context matters</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Numbers need hockey context to be useful</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Find the signal in the noise</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Identify what actually matters</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Predict, don&apos;t just describe</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Use data to forecast future performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Communicate clearly</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Make complex data simple to understand</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to let the numbers guide you?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build a data-driven championship team.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
