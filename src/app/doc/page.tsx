import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MobileNav } from '@/components/mobile-nav';

export default function DocPage() {
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
              alt="Doc - Medical & Training Staff"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover object-top"
            />
            <h1 className="mb-2 text-2xl md:text-3xl font-bold">Doc</h1>
            <Badge variant="secondary" className="mb-4">Medical & Training Staff</Badge>
            <p className="text-muted-foreground italic text-sm md:text-base">
              Keeping players healthy and performing at their peak
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
                Hey hockey family! I&apos;m Doc, and I&apos;m the person who keeps our players healthy, strong, and ready to compete at the highest level. With years of experience in sports medicine and athletic training, I&apos;ve seen it all - from minor bumps and bruises to serious injuries that require careful rehabilitation.
              </p>
              <p>
                My background combines traditional medical knowledge with cutting-edge sports science. I believe that prevention is always better than treatment, so I work closely with our strength coaches, nutritionists, and players to create comprehensive health and wellness programs.
              </p>
              <p>
                I&apos;m not just here to patch you up when you&apos;re hurt - I&apos;m here to help you stay healthy, recover faster, and perform better than ever before.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">My Philosophy</h2>
            <p className="text-sm md:text-base">
              Health is wealth in hockey. A healthy player is a productive player, and a healthy team is a winning team. Prevention, proper care, and smart recovery are the keys to long-term success.
            </p>
          </CardContent>
        </Card>

        {/* Quotes & Advice Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Favorite Quotes & Advice</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Listen to your body - it&apos;s smarter than you think.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;The best treatment is prevention. Take care of yourself before you have to.&rdquo;</strong>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm md:text-base">
                <strong>&ldquo;Recovery isn&apos;t optional - it&apos;s essential for peak performance.&rdquo;</strong>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Health Principles Section */}
        <Card className="mb-6">
          <CardContent className="p-4 md:p-6">
            <h2 className="mb-4 text-lg md:text-xl font-semibold">Doc&apos;s Health Principles</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Prevention first</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Regular check-ups and maintenance prevent bigger problems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Listen to your body</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Pain is your body&apos;s way of communicating</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Recovery is training</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Your body needs rest to get stronger</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-medium text-sm md:text-base">Communication is key</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Tell me what&apos;s happening before it becomes serious</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-4 md:p-6 text-center">
            <h3 className="mb-2 text-primary-foreground text-lg md:text-xl font-semibold">Need medical attention?</h3>
            <p className="text-primary-foreground/90 text-sm md:text-base">
              Let&apos;s keep you healthy and performing at your best.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
