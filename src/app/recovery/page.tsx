import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function RecoveryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-recovery.webp"
              alt="Recovery - Rehabilitation Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Recovery</h1>
            <Badge variant="secondary" className="mb-4">Rehabilitation Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Getting you back on the ice stronger than before
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
                What&apos;s up, hockey warriors! I&apos;m Recovery, and I specialize in getting injured players back on the ice safely and effectively. I&apos;ve worked with players recovering from everything from minor sprains to major surgeries, and I know that every injury is unique.
              </p>
              <p>
                My approach is based on the latest sports medicine research and years of practical experience. I don&apos;t just focus on healing the injury - I work to prevent future injuries by addressing underlying weaknesses and imbalances.
              </p>
              <p>
                I believe that rehabilitation is an opportunity to come back stronger than ever. With the right program, proper patience, and consistent effort, you can not only recover from your injury but also improve your overall game.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Recovery is a journey, not a destination. Every step forward, no matter how small, is progress. Trust the process, stay committed, and you&apos;ll come back stronger than ever.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Injuries are setbacks, not endings. How you respond defines your comeback.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Recovery is a marathon, not a sprint. Pace yourself for the long haul.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your body is resilient. Give it time, give it care, and it will reward you.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Recovery&apos;s Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Patience is power</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Rushing recovery leads to setbacks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Consistency beats intensity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Small daily efforts compound over time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Listen to your body</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Pain is information, not just discomfort</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Prevention is the goal</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Build strength to avoid future injuries</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to start your recovery?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s get you back on the ice stronger than ever.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
