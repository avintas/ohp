import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function HealerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/personas-im/a-healer.webp"
              alt="The Healer - Recovery & Wellness Coach"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">The Healer</h1>
            <Badge variant="secondary" className="mb-4">Recovery & Wellness Coach</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Restoring body, mind, and spirit for peak performance
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
                Welcome, hockey warriors! I&apos;m The Healer, and I specialize in helping players recover, rejuvenate, and return to the ice stronger than ever. My approach combines traditional healing wisdom with modern sports science to create comprehensive recovery programs.
              </p>
              <p>
                I believe that true healing goes beyond just fixing injuries - it&apos;s about restoring balance to the whole person. Whether you&apos;re dealing with physical pain, mental fatigue, or emotional stress, I have tools and techniques to help you heal from the inside out.
              </p>
              <p>
                My methods include massage therapy, stretching, meditation, and personalized recovery protocols. I work with players at all levels, from rookies to veterans, helping them maintain peak condition throughout the grueling hockey season.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Healing is a natural process that we can accelerate and enhance. The body wants to heal itself - my job is to create the optimal conditions for that healing to happen faster and more completely.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Healing takes time, but it also takes intention.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Your body is your temple. Treat it with respect and it will serve you well.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Recovery isn&apos;t a sign of weakness - it&apos;s a sign of wisdom.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Healing Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">The Healer&apos;s Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Listen to your body</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your body knows what it needs to heal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Rest is productive</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Recovery time is training time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Heal holistically</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Address body, mind, and spirit together</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Prevention is healing</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Take care of yourself before you need healing</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Ready to heal and recover?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s restore your body and get you back to peak performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
