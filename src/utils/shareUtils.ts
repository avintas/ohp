'use client';

interface ShareData {
  title?: string;
  text?: string;
  url?: string;
}

/**
 * Safely handles sharing with fallback to clipboard
 * Prevents hydration errors by only running on client
 */
export async function safeShare(data: ShareData, fallbackText: string) {
  // Only run on client side
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    // Try native sharing first
    if (navigator?.share) {
      await navigator.share({
        title: data.title,
        text: data.text,
        url: data.url || window.location.href
      });
      return true;
    }

    // Fallback to clipboard
    if (navigator?.clipboard) {
      await navigator.clipboard.writeText(fallbackText);
      return true;
    }

    // Final fallback - create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = fallbackText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;

  } catch (error) {
    console.warn('Share failed:', error);
    return false;
  }
}

/**
 * Safely updates document meta tags
 * Only runs on client side to prevent hydration issues
 */
export function safeUpdateMeta(name: string, content: string) {
  if (typeof document === 'undefined') {
    return;
  }

  try {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  } catch (error) {
    console.warn('Meta update failed:', error);
  }
}
