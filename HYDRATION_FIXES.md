# Hydration Error Prevention Guide

This document outlines the systematic fixes implemented to prevent hydration errors in the OnlyHockey application.

## Root Causes Identified & Fixed

### 1. Browser API Usage
**Problem**: Components using `window`, `document`, `navigator` APIs during server-side rendering caused mismatches.

**Solution**: 
- Created `ClientOnly` wrapper component
- Implemented safe browser API hooks in `src/hooks/useBrowserAPI.ts`
- Created utility functions in `src/utils/shareUtils.ts`

### 2. Dynamic State Management
**Problem**: Components with scroll listeners and dynamic state differed between server and client.

**Solution**:
- Wrapped `StickyNavbar` with `ClientOnly` and static fallback
- Provided identical server-side fallback component

### 3. Service Worker Registration
**Problem**: Service worker registration in `layout.tsx` could cause hydration issues.

**Solution**: Added proper browser environment checks.

## Implementation Details

### ClientOnly Component (`src/components/ClientOnly.tsx`)
```tsx
// Prevents hydration mismatches by only rendering children on client
<ClientOnly fallback={<StaticFallback />}>
  <ComponentWithBrowserAPIs />
</ClientOnly>
```

### Safe Browser API Hooks (`src/hooks/useBrowserAPI.ts`)
```tsx
// Safe hooks that return null on server, actual APIs on client
const navigator = useNavigator();
const window = useWindow();
const document = useDocument();
```

### Share Utilities (`src/utils/shareUtils.ts`)
```tsx
// Safe sharing with fallbacks
await safeShare(shareData, fallbackText);

// Safe meta tag updates
safeUpdateMeta('description', 'New description');
```

## Components Fixed

1. **StickyNavbar**: Wrapped with ClientOnly, added static fallback
2. **PowerBrain**: Updated share functionality to use safe utilities
3. **CastMachine**: Wrapped with ClientOnly for complex state management
4. **PowerBrain Page**: Fixed meta tag manipulation
5. **Layout**: Added browser checks for service worker

## Best Practices Going Forward

### ✅ DO
- Use `ClientOnly` wrapper for components with browser APIs
- Use safe utility functions for sharing, clipboard, meta updates
- Provide meaningful fallback components during SSR
- Test components in both server and client environments

### ❌ DON'T
- Access `window`, `document`, `navigator` directly in component render
- Use dynamic state that differs between server and client
- Nest `ClientOnly` components unnecessarily
- Forget to provide fallbacks for loading states

## Testing Hydration Issues

1. **Disable JavaScript** in browser dev tools to see server-rendered HTML
2. **Compare with client render** - they should be identical initially
3. **Check console** for hydration warnings
4. **Use React DevTools** Profiler to identify problematic components

## Common Patterns

### Browser API Usage
```tsx
// ❌ Wrong - causes hydration errors
const handleClick = () => {
  navigator.share(data); // Undefined on server
};

// ✅ Correct - safe pattern
const handleClick = async () => {
  const { safeShare } = await import('../utils/shareUtils');
  await safeShare(data, fallbackText);
};
```

### Dynamic Content
```tsx
// ❌ Wrong - different on server/client
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

// ✅ Correct - use ClientOnly wrapper
<ClientOnly fallback={<StaticVersion />}>
  <DynamicComponent />
</ClientOnly>
```

## Files Modified

- `src/components/StickyNavbar.tsx` - Wrapped with ClientOnly
- `src/components/ClientOnly.tsx` - Enhanced documentation
- `src/components/PowerBrain.tsx` - Safe share implementation
- `src/app/content/page.tsx` - Wrapped CastMachine
- `src/app/powerbrain/page.tsx` - Safe meta updates
- `src/app/layout.tsx` - Safe service worker registration
- `src/hooks/useBrowserAPI.ts` - New safe browser API hooks
- `src/utils/shareUtils.ts` - New safe utility functions

## Monitoring

Watch for these console warnings:
- "Hydration failed because the server rendered text didn't match the client"
- "Text content does not match server-rendered HTML"
- "Expected server HTML to contain a matching..."

These indicate new hydration issues that need addressing using the patterns above.
