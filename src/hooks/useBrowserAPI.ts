'use client';

import { useEffect, useState } from 'react';

/**
 * Hook that safely checks if we're in a browser environment
 * Prevents hydration mismatches when using browser APIs
 */
export function useBrowserAPI() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser;
}

/**
 * Hook for safely using navigator APIs
 * Returns null on server, actual navigator on client after hydration
 */
export function useNavigator() {
  const isBrowser = useBrowserAPI();
  return isBrowser ? navigator : null;
}

/**
 * Hook for safely using window APIs
 * Returns null on server, actual window on client after hydration
 */
export function useWindow() {
  const isBrowser = useBrowserAPI();
  return isBrowser ? window : null;
}

/**
 * Hook for safely using document APIs
 * Returns null on server, actual document on client after hydration
 */
export function useDocument() {
  const isBrowser = useBrowserAPI();
  return isBrowser ? document : null;
}
