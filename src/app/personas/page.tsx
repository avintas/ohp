import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

interface PersonaInfo {
  name: string;
  nickname?: string;
  title: string;
  tagline: string;
  slug: string;
}

// Function to extract basic info from markdown files
function extractPersonaInfo(content: string, slug: string): PersonaInfo {
  const headerMatch = content.match(/# Meet (.+?) - (.+?)\n\n\*(.+?)\*/);
  const name = headerMatch?.[1] || '';
  const title = headerMatch?.[2] || '';
  const tagline = headerMatch?.[3] || '';
  
  // Extract nickname if it exists
  const nicknameMatch = name.match(/"([^"]+)"/);
  const nickname = nicknameMatch?.[1];
  const displayName = name.replace(/"[^"]+"/, '').trim();
  
  return {
    name: displayName,
    nickname,
    title,
    tagline,
    slug
  };
}

// Function to get all personas
async function getPersonas(): Promise<PersonaInfo[]> {
  const personasDir = path.join(process.cwd(), 'public/personas-md');
  const files = fs.readdirSync(personasDir);
  
  const personas = files
    .filter(file => file.endsWith('_bio.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(personasDir, file), 'utf-8');
      const slug = file.replace('_bio.md', '').replace(/_/g, '-');
      return extractPersonaInfo(content, slug);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
  
  return personas;
}

export default async function PersonasPage() {
  const personas = await getPersonas();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-background px-4 pt-8 pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">Meet Our Hockey Personas</h1>
          <p className="text-muted-foreground text-lg">
            Discover the characters behind OnlyHockey's content. Each persona brings their unique perspective, 
            expertise, and personality to help you improve your game.
          </p>
        </div>
      </div>

      {/* Personas Grid */}
      <div className="px-4 pb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <Link key={persona.slug} href={`/${persona.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {persona.name}
                    {persona.nickname && (
                      <span className="text-primary block text-sm font-normal">
                        &ldquo;{persona.nickname}&rdquo;
                      </span>
                    )}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {persona.title}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {persona.tagline}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <strong>{personas.length} personas</strong> ready to share their hockey wisdom with you.
          </p>
        </div>
      </div>
    </div>
  );
}
