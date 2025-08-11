import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function AnalyticsAcePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-analyticsace.webp"
              alt="Coach Analytics Ace - Analytics Coordinator"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Analytics Ace</h1>
            <Badge variant="secondary" className="mb-4">Analytics Coordinator</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Where data meets hockey intelligence
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
                你好, hockey strategists! I&apos;m Analytics Ace, and I&apos;ve dedicated my career to proving that the right data analysis can give teams competitive advantages that traditional scouting might miss. With technical precision and hockey passion, I bring both analytical skills and game understanding to the growing field of sports analytics.
              </p>
              <p>
                My journey from computer science to hockey analytics started when I realized that the same pattern recognition skills that work in tech can identify performance trends, strategic opportunities, and player development paths that the human eye might overlook. I don&apos;t replace traditional hockey knowledge - I enhance it with data-driven insights.
              </p>
              <p>
                I work with coaches, scouts, and management to translate complex statistics into clear recommendations. Whether we&apos;re evaluating trade targets, optimizing line combinations, or identifying system weaknesses, my job is making data useful for people who need to make hockey decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Data doesn&apos;t make decisions - people do. My job is presenting information clearly enough that smart hockey people can make even smarter choices.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best analytics don&apos;t replace hockey instincts - they confirm them with evidence and reveal blind spots.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Every shift generates data. The teams that use that information best will have advantages others never see coming.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Numbers don&apos;t lie, but they don&apos;t always tell the whole truth either. Context is everything.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Approach Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Analytics Ace&apos;s Approach</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Hockey context first</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every statistic exists within game situations that affect its meaning</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Actionable insights</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Analysis that doesn&apos;t lead to better decisions is just interesting trivia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Visual communication</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The right chart can explain what paragraphs of text cannot</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Continuous refinement</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every game teaches us how to analyze the next one better</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to gain competitive advantages through smarter analysis?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s turn your data into better hockey decisions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
