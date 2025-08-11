import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function FilmPage() {
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
              alt="Film - Video Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Film</h1>
            <Badge variant="secondary" className="mb-4">Video Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Teaching through technology, winning through preparation
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
                ¡Hola, hockey students! I&apos;m Film, and everyone calls me that because I&apos;ve mastered the art of turning game footage into game-changing insights. As someone who played college hockey before discovering my calling in video analysis, I&apos;ve learned that preparation beats improvisation every single time.
              </p>
              <p>
                Growing up in a state where hockey wasn&apos;t traditional, I learned to study the game differently. Video became my teacher, showing me defensive rotations, offensive patterns, and strategic tendencies that you can&apos;t see when you&apos;re playing. Now I help players and coaches see the game the way chess masters see the board - three moves ahead.
              </p>
              <p>
                I don&apos;t just edit highlight reels - I create learning experiences. Whether we&apos;re breaking down opponent tendencies, reviewing our own system breakdowns, or preparing for specific game situations, my job is making video sessions that actually make players smarter and more prepared.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Video doesn&apos;t just show what happened - it reveals why it happened and how to make it happen again (or prevent it from happening again).
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The camera never lies, but it also never tells the whole story. My job is providing the context that makes the footage meaningful.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Players see the game at ice level. Video lets them see it from the coach&apos;s perspective and the opponent&apos;s perspective.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best video sessions don&apos;t just show mistakes - they show solutions and give players confidence to execute them.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Video Mastery Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Film&apos;s Video Mastery</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Focus on learning</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Every video session should make players smarter about something specific</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Tell stories with footage</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Random clips don&apos;t teach, organized sequences do</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Balance criticism with solutions</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Showing problems without answers just creates confusion</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Make it relevant</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The best analysis connects directly to the next game situation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to see the game from angles you&apos;ve never considered?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s break down film that breaks down opponents.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
