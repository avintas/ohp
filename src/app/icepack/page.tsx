import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function IcePackPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-icepack.webp"
              alt="Ice Pack - Injury Prevention Specialist"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Ice Pack</h1>
            <Badge variant="secondary" className="mb-4">Injury Prevention Specialist</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Keeping you healthy and on the ice
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
                What&apos;s up, hockey warriors! I&apos;m Ice Pack, and I&apos;m here to help you stay healthy and avoid injuries so you can keep doing what you love - playing hockey. I specialize in injury prevention, mobility work, and keeping your body functioning at its best.
              </p>
              <p>
                My approach focuses on proactive care rather than reactive treatment. I work with players to identify potential injury risks, improve movement patterns, and build the strength and flexibility needed to handle the demands of hockey. Prevention is always better than recovery.
              </p>
              <p>
                Whether you&apos;re a young player just starting out or a veteran looking to extend your career, I have the knowledge and tools to help you stay healthy, mobile, and performing at your peak.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              An ounce of prevention is worth a pound of cure. By taking care of your body proactively, you can avoid the pain, frustration, and lost time that comes with injuries. Stay healthy, stay on the ice.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your body is your most important piece of equipment. Take care of it.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Mobility is the foundation of athletic performance.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Prevention is the best medicine. Stay ahead of injuries.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Prevention Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Ice Pack&apos;s Prevention Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Move well first</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Quality movement prevents injuries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Build resilience</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Strong bodies handle stress better</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Listen to warning signs</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Address issues before they become problems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Consistency is key</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Small daily efforts prevent big problems</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to prevent injuries?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s keep you healthy and performing at your best.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
