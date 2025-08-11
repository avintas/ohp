import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function CapPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-cap.webp"
              alt="Cap - Team Captain"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Cap</h1>
            <Badge variant="secondary" className="mb-4">Team Captain</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Leading by example, inspiring by action
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
                Hey team! I&apos;m Cap, and I wear the &ldquo;C&rdquo; with pride and purpose. Being a captain isn&apos;t about being the best player on the ice - it&apos;s about being the best teammate, the best leader, and the best example of what our organization stands for.
              </p>
              <p>
                I&apos;ve learned that leadership isn&apos;t about giving speeches or being the loudest voice in the room. It&apos;s about showing up every day, working harder than anyone else, and making sure every player in that locker room knows they&apos;re valued and supported.
              </p>
              <p>
                My job is to bridge the gap between coaches and players, to keep the team focused when things get tough, and to remind everyone why we&apos;re here - to win together, as a family.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Leadership is earned, not given. I lead by example, speak with action, and make sure every player knows they have a voice in this team.
            </p>
          </CardContent>
        </Card>

        {/* Leadership Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Cap&apos;s Leadership Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Lead by example</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Actions speak louder than words</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Protect your teammates</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">On and off the ice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Communicate effectively</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Between coaches, players, and officials</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Stay composed under pressure</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">The team follows your lead</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to lead this team to victory?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build a championship culture together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
