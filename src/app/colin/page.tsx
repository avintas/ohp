import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ColinPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/colin-headshot-avatar.webp"
              alt="Colin Anderson - Physical Therapist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Colin Anderson</h1>
            <Badge variant="secondary" className="mb-4">Physical Therapist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              From State of Hockey to state of recovery
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
                                 What&apos;s up, hockey warriors! I&apos;m Colin, born and raised in Minneapolis - the State of Hockey - where we learn to skate before we can walk and where &ldquo;playing through pain&rdquo; is practically a religion. But after 12 years as a physical therapist specializing in hockey injuries, I&apos;ve learned there&apos;s a smarter way to be tough.
              </p>
              <p>
                                 Growing up playing pond hockey on Lake Minnetonka and high school hockey at Edina, I thought I knew everything about the game. Then I tore my ACL senior year and discovered the real battle isn&apos;t always on the ice - sometimes it&apos;s in the PT clinic, grinding through recovery when no one&apos;s watching.
              </p>
              <p>
                                 That injury changed my life. Instead of playing college hockey, I studied exercise science and became the therapist I wish I&apos;d had. Now I help Minnesota hockey players - from Squirts to old-timers in beer leagues - understand that smart recovery isn&apos;t giving up, it&apos;s gearing up for what&apos;s next.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
                             In Minnesota, we don&apos;t just survive winter - we thrive in it. Same approach to injuries: we don&apos;t just get through them, we get stronger because of them. Every setback is a setup for a comeback, and every day in rehab is a day closer to your best hockey.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
                             <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                 &ldquo;Tough isn&apos;t playing hurt. Tough is doing the work to never get hurt the same way twice.&rdquo;
               </blockquote>
                             <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                 &ldquo;Your comeback story starts the day you admit you need help, not the day you return to play.&rdquo;
               </blockquote>
                             <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                 &ldquo;In Minnesota, we know ice. Trust me when I tell you: take time to heal properly, or the ice will humble you again.&rdquo;
               </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Rules Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Colin&apos;s Recovery Rules</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Respect the process</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Healing has its own timeline, not yours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Consistency beats intensity</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Small daily improvements win championships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Pain is data, not weakness</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Listen to what your body is telling you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Mental reps count too</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Visualize your return while your body heals</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Minnesota Hockey Medicine Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Minnesota Hockey Medicine</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                What makes Minnesota hockey players different? We understand that the season is long, the ice is unforgiving, and your body is your most important equipment. I combine old-school Minnesota work ethic with cutting-edge recovery science.
              </p>
              <p>
                                 I&apos;ve worked with everyone from Bantam AA teams heading to state tournaments to former Gophers trying to keep playing men&apos;s league into their 40s. Every player deserves to feel confident in their body, whether they&apos;re chasing a scholarship or just chasing the puck with their buddies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Beyond the Clinic Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Beyond the Clinic</h2>
            <div className="space-y-4 text-sm md:text-base">
              <p>
                                 You&apos;ll find me at Mariucci Arena watching the Gophers, analyzing how modern training is changing the game. I volunteer with youth hockey programs, teaching injury prevention because the best recovery is the one you never need.
              </p>
              <p>
                                 When the lakes freeze, I&apos;m still out there playing pickup - because staying connected to the game makes me a better therapist. I remember what it feels like to want that perfect pass, that game-winning goal, that feeling of flying across fresh ice.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to get back to the game you love?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
                             Let&apos;s start your Minnesota-tough comeback today.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
