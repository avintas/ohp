import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function BooksPage() {
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
              alt="Books - Team Historian"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Books</h1>
            <Badge variant="secondary" className="mb-4">Team Historian</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Preserving yesterday&apos;s legends, inspiring tomorrow&apos;s champions
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
                Greetings, hockey scholars! I&apos;m Books, and everyone calls me that because I&apos;ve spent decades documenting, preserving, and sharing the rich history of hockey. From frozen ponds to modern arenas, I&apos;ve dedicated my life to ensuring that hockey&apos;s greatest stories never get forgotten.
              </p>
              <p>
                My journey began as a young academic fascinated by how sports reflect culture and community. Hockey captured my imagination because it&apos;s more than entertainment - it&apos;s a living history of courage, innovation, and human achievement. Every record broken today stands on the shoulders of legends who came before.
              </p>
              <p>
                I don&apos;t just collect statistics - I preserve stories. The rookie who changed the game, the team that overcame impossible odds, the moments that defined generations of fans. These narratives are hockey&apos;s true treasure, and I&apos;m their guardian.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Hockey history isn&apos;t just about what happened - it&apos;s about understanding why it mattered then and how it shapes what&apos;s possible now.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Every current record was once impossible. Today&apos;s impossibilities are tomorrow&apos;s milestones.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best players honor the past by pushing beyond what previous generations thought possible.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Statistics tell you what happened. Stories tell you why it mattered.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Historical Wisdom Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Books&apos; Historical Wisdom</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Context creates meaning</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Understanding the era helps appreciate the achievement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Patterns predict futures</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">History doesn&apos;t repeat, but it often rhymes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Preserve everything</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Today&apos;s footnote might be tomorrow&apos;s legend</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Share stories widely</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">History only lives when it&apos;s told and retold</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to discover the stories that shaped hockey?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s explore the rich history that makes today&apos;s game possible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
