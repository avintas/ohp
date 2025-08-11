import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function VoicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-voice.webp"
              alt="The Voice - Team Communicator"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">The Voice</h1>
            <Badge variant="secondary" className="mb-4">Team Communicator</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Speaking truth, building bridges, uniting teams
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
                Hey hockey family! I&apos;m The Voice, and I&apos;ve made it my mission to be the bridge between players, coaches, management, and fans. I&apos;m the guy who can translate complex strategies into simple language, who can calm tensions in the locker room, and who can rally the troops when the going gets tough.
              </p>
              <p>
                I&apos;ve always had a way with words, but more importantly, I&apos;ve learned how to listen. Being The Voice isn&apos;t about being the loudest - it&apos;s about being heard when it matters most. I know how to read a room, how to deliver tough messages with compassion, and how to turn individual concerns into team solutions.
              </p>
              <p>
                My role is to make sure everyone feels heard, understood, and valued. Whether it&apos;s mediating conflicts, explaining game plans, or just being a sounding board, I&apos;m here to make sure communication flows smoothly in both directions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Communication is the foundation of every great team. I&apos;m here to ensure that every voice is heard and every message is delivered with clarity and purpose.
            </p>
          </CardContent>
        </Card>

        {/* Communication Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">The Voice&apos;s Communication Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Listen first, speak second</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Understanding comes before solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Speak truth with compassion</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Hard messages delivered softly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Bridge divides</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Connect different perspectives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Maintain confidentiality</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Trust is earned through discretion</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to find your voice?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s build a team that communicates and connects.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
