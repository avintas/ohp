import { renderHook, act } from '@testing-library/react'
import { useBrowserAPI, useNavigator, useWindow, useDocument } from '../useBrowserAPI'

describe('useBrowserAPI hooks', () => {
  describe('useBrowserAPI', () => {
    it('should return false initially and true after hydration', () => {
      const { result } = renderHook(() => useBrowserAPI())
      
      // Initially should be false (server-side)
      expect(result.current).toBe(false)
      
      // After useEffect runs (simulating client-side hydration)
      act(() => {
        // The useEffect will run automatically in the test environment
      })
      
      expect(result.current).toBe(true)
    })

    it('should maintain stable reference after hydration', () => {
      const { result, rerender } = renderHook(() => useBrowserAPI())
      
      const firstRender = result.current
      
      rerender()
      
      // After hydration, the value should be consistent
      expect(result.current).toBe(firstRender)
    })
  })

  describe('useNavigator', () => {
    it('should return null initially and navigator after hydration', () => {
      const { result } = renderHook(() => useNavigator())
      
      // Initially should be null (server-side)
      expect(result.current).toBe(null)
      
      // After hydration, should return the mocked navigator
      act(() => {
        // Allow useEffect to run
      })
      
      expect(result.current).toBe(navigator)
    })

    it('should return mocked navigator methods', () => {
      const { result } = renderHook(() => useNavigator())
      
      act(() => {
        // Allow hydration
      })
      
      expect(result.current?.share).toBeDefined()
      expect(result.current?.clipboard).toBeDefined()
    })
  })

  describe('useWindow', () => {
    it('should return null initially and window after hydration', () => {
      const { result } = renderHook(() => useWindow())
      
      // Initially should be null (server-side)
      expect(result.current).toBe(null)
      
      // After hydration
      act(() => {
        // Allow useEffect to run
      })
      
      expect(result.current).toBe(window)
    })

    it('should provide access to window methods after hydration', () => {
      const { result } = renderHook(() => useWindow())
      
      act(() => {
        // Allow hydration
      })
      
      expect(result.current?.location).toBeDefined()
      expect(result.current?.document).toBeDefined()
    })
  })

  describe('useDocument', () => {
    it('should return null initially and document after hydration', () => {
      const { result } = renderHook(() => useDocument())
      
      // Initially should be null (server-side)
      expect(result.current).toBe(null)
      
      // After hydration
      act(() => {
        // Allow useEffect to run
      })
      
      expect(result.current).toBe(document)
    })

    it('should provide access to document methods after hydration', () => {
      const { result } = renderHook(() => useDocument())
      
      act(() => {
        // Allow hydration
      })
      
      expect(result.current?.querySelector).toBeDefined()
      expect(result.current?.createElement).toBeDefined()
    })
  })

  describe('SSR safety', () => {
    it('should prevent hydration mismatches', () => {
      // Test that all hooks return null/false initially
      const browserAPI = renderHook(() => useBrowserAPI())
      const navigator = renderHook(() => useNavigator())
      const windowHook = renderHook(() => useWindow())
      const documentHook = renderHook(() => useDocument())
      
      // All should be safe for SSR
      expect(browserAPI.result.current).toBe(false)
      expect(navigator.result.current).toBe(null)
      expect(windowHook.result.current).toBe(null)
      expect(documentHook.result.current).toBe(null)
      
      // After hydration, all should have proper values
      act(() => {
        // Allow all useEffects to run
      })
      
      expect(browserAPI.result.current).toBe(true)
      expect(navigator.result.current).toBe(global.navigator)
      expect(windowHook.result.current).toBe(global.window)
      expect(documentHook.result.current).toBe(global.document)
    })
  })

  describe('hook stability', () => {
    it('should not cause unnecessary re-renders', () => {
      let renderCount = 0
      
      const TestComponent = () => {
        renderCount++
        const isBrowser = useBrowserAPI()
        const navigator = useNavigator()
        const window = useWindow()
        const document = useDocument()
        
        return { isBrowser, navigator, window, document }
      }
      
      const { rerender } = renderHook(() => TestComponent())
      
      const initialRenderCount = renderCount
      
      // Multiple rerenders should not increase render count unnecessarily
      rerender()
      rerender()
      
      expect(renderCount).toBe(initialRenderCount + 2) // Only the explicit rerenders
    })
  })
})
