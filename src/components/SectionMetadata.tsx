import { Metadata } from 'next';

interface SectionMetadataProps {
  section: 'greetings' | 'heart' | 'challenge' | 'motivate' | 'experts';
}

export function generateSectionMetadata(section: SectionMetadataProps['section']): Metadata {
  const baseUrl = 'https://onlyhockey.com';
  
  const sectionData = {
    greetings: {
      title: "Welcome to the Hockey Family - ONLYHOCKEY",
      description: "Join the hockey community! Share hockey news, discover legendary moments, learn skills & strategies, and connect with hockey fans worldwide.",
      image: "/gims/gim-00010.webp",
      keywords: "hockey community, hockey family, hockey news, hockey stories, hockey skills, hockey strategies"
    },
    heart: {
      title: "Heart & Share - Join the Hockey Team - ONLYHOCKEY",
      description: "Join 500+ hockey enthusiasts! Share love through greeting cards, motivate fellow players, and support your hockey family with kindness.",
      image: "/gims/gim-00013.webp",
      keywords: "hockey team, hockey enthusiasts, hockey greeting cards, hockey motivation, hockey community support"
    },
    challenge: {
      title: "Test Your Hockey IQ - Knowledge Quizzes - ONLYHOCKEY",
      description: "Take hockey knowledge quizzes, learn from expert content, challenge yourself with different topics, and track your progress with achievements.",
      image: "/gims/gim-00004.webp",
      keywords: "hockey quiz, hockey knowledge, hockey IQ test, hockey learning, hockey challenges, hockey achievements"
    },
    motivate: {
      title: "Hockey Wisdom & Motivation - Inspirational Quotes - ONLYHOCKEY",
      description: "Get inspired with 'Skate Like Wind' and other legendary hockey wisdom. Access motivational stories from hockey greats and share motivation.",
      image: "/gims/gim-00012.webp",
      keywords: "hockey motivation, hockey wisdom, hockey quotes, hockey inspiration, hockey stories, hockey legends"
    },
    experts: {
      title: "Meet the Hockey Experts - Coach, Broadcaster, Equipment Manager - ONLYHOCKEY",
      description: "Choose from expert hockey personas: coach, broadcaster, equipment manager, passionate fan, or supportive mom. Each has unique knowledge & insights.",
      image: "/gims/gim-00024.webp",
      keywords: "hockey experts, hockey coach, hockey broadcaster, hockey equipment manager, hockey fan, hockey mom"
    }
  };

  const data = sectionData[section];
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}/#${section}`,
      siteName: "ONLYHOCKEY",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.image],
    },
    alternates: {
      canonical: `${baseUrl}/#${section}`,
    },
  };
}

// Component for rendering section-specific structured data
interface SectionStructuredDataProps {
  section: 'greetings' | 'heart' | 'challenge' | 'motivate' | 'experts';
  title: string;
  description: string[] | string;
  image: string;
}

export function SectionStructuredData({ section, title, description, image }: SectionStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": Array.isArray(description) ? description.join(" ") : description,
    "image": `https://onlyhockey.com${image}`,
    "author": {
      "@type": "Organization",
      "name": "ONLYHOCKEY"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ONLYHOCKEY",
      "logo": {
        "@type": "ImageObject",
        "url": "https://onlyhockey.com/gims/gim-00010.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://onlyhockey.com/#${section}`
    },
    "articleSection": "Hockey Community",
    "keywords": "hockey, community, " + section,
    "datePublished": "2024-12-19",
    "dateModified": "2024-12-19"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
