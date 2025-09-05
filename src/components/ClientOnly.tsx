'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * ClientOnly component prevents hydration mismatches by only rendering
 * children on the client side after hydration is complete.
 * 
 * Use this wrapper for:
 * - Components with animations (framer-motion)
 * - Components using browser APIs (window, navigator, document)
 * - Components with dynamic state that differs between server/client
 * - Date/time sensitive content
 * - Components with scroll listeners or viewport-dependent logic
 * - Share functionality, clipboard API, geolocation
 * 
 * @param children - Component to render only on client
 * @param fallback - Optional placeholder during server render
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
