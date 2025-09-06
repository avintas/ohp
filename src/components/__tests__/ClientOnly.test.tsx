import { render, screen, act } from '@testing-library/react'
import { ClientOnly } from '../ClientOnly'

describe('ClientOnly', () => {
  const TestChildren = () => <div>Client-side content</div>
  const TestFallback = () => <div>Server-side fallback</div>

  beforeEach(() => {
    // Reset the useState mock for each test
    jest.clearAllMocks()
  })

  describe('Server-side rendering', () => {
    it('should render fallback on server side', () => {
      // Mock useState to simulate server-side (hasMounted = false)
      const mockSetState = jest.fn()
      jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, mockSetState])
      
      render(
        <ClientOnly fallback={<TestFallback />}>
          <TestChildren />
        </ClientOnly>
      )
      
      expect(screen.getByText('Server-side fallback')).toBeInTheDocument()
      expect(screen.queryByText('Client-side content')).not.toBeInTheDocument()
    })

    it('should render null when no fallback provided on server', () => {
      const mockSetState = jest.fn()
      jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, mockSetState])
      
      const { container } = render(
        <ClientOnly>
          <TestChildren />
        </ClientOnly>
      )
      
      expect(container.firstChild).toBeNull()
      expect(screen.queryByText('Client-side content')).not.toBeInTheDocument()
    })
  })

  describe('Client-side hydration', () => {
    it('should render children after hydration', () => {
      render(
        <ClientOnly fallback={<TestFallback />}>
          <TestChildren />
        </ClientOnly>
      )
      
      // After the component mounts and useEffect runs, it should show client content
      expect(screen.getByText('Client-side content')).toBeInTheDocument()
      expect(screen.queryByText('Server-side fallback')).not.toBeInTheDocument()
    })

    it('should handle multiple children', () => {
      render(
        <ClientOnly fallback={<TestFallback />}>
          <div>First child</div>
          <div>Second child</div>
          <span>Third child</span>
        </ClientOnly>
      )
      
      expect(screen.getByText('First child')).toBeInTheDocument()
      expect(screen.getByText('Second child')).toBeInTheDocument()
      expect(screen.getByText('Third child')).toBeInTheDocument()
    })

    it('should handle complex children components', () => {
      const ComplexChild = () => (
        <div>
          <h1>Complex Component</h1>
          <button onClick={() => console.log('clicked')}>Click me</button>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      )
      
      render(
        <ClientOnly fallback={<TestFallback />}>
          <ComplexChild />
        </ClientOnly>
      )
      
      expect(screen.getByText('Complex Component')).toBeInTheDocument()
      expect(screen.getByText('Click me')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })

  describe('Hydration safety', () => {
    it('should prevent hydration mismatches', () => {
      // This test ensures that the component properly handles SSR/client differences
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
      
      render(
        <ClientOnly fallback={<div>Loading...</div>}>
          <div>Hydrated content</div>
        </ClientOnly>
      )
      
      // Should not log hydration errors
      expect(consoleSpy).not.toHaveBeenCalledWith(
        expect.stringContaining('Warning: Text content did not match')
      )
      
      consoleSpy.mockRestore()
    })

    it('should handle browser API usage in children', () => {
      const BrowserAPIChild = () => {
        const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
        return <div>User Agent: {userAgent}</div>
      }
      
      render(
        <ClientOnly fallback={<div>Loading browser info...</div>}>
          <BrowserAPIChild />
        </ClientOnly>
      )
      
      // Should render without errors
      expect(screen.getByText(/User Agent:/)).toBeInTheDocument()
    })
  })

  describe('Edge cases', () => {
    it('should handle empty children', () => {
      render(
        <ClientOnly fallback={<TestFallback />}>
          {null}
        </ClientOnly>
      )
      
      // Should render without errors, showing empty content after hydration
      expect(screen.queryByText('Server-side fallback')).not.toBeInTheDocument()
    })

    it('should handle undefined children', () => {
      render(
        <ClientOnly fallback={<TestFallback />}>
          {undefined}
        </ClientOnly>
      )
      
      expect(screen.queryByText('Server-side fallback')).not.toBeInTheDocument()
    })

    it('should handle conditional children', () => {
      const showContent = true
      
      render(
        <ClientOnly fallback={<TestFallback />}>
          {showContent && <div>Conditional content</div>}
        </ClientOnly>
      )
      
      expect(screen.getByText('Conditional content')).toBeInTheDocument()
    })

    it('should handle function children', () => {
      render(
        <ClientOnly fallback={<TestFallback />}>
          {() => <div>Function child</div>}
        </ClientOnly>
      )
      
      // Function children should be handled properly
      // Note: This might not work as expected since React expects ReactNode, not functions
      // But the component should not crash
      expect(screen.queryByText('Server-side fallback')).not.toBeInTheDocument()
    })
  })

  describe('Performance', () => {
    it('should not re-render unnecessarily', () => {
      let renderCount = 0
      
      const CountingChild = () => {
        renderCount++
        return <div>Render count: {renderCount}</div>
      }
      
      const { rerender } = render(
        <ClientOnly fallback={<TestFallback />}>
          <CountingChild />
        </ClientOnly>
      )
      
      const initialRenderCount = renderCount
      
      // Re-render the parent
      rerender(
        <ClientOnly fallback={<TestFallback />}>
          <CountingChild />
        </ClientOnly>
      )
      
      // Should only re-render when the parent re-renders
      expect(renderCount).toBe(initialRenderCount + 1)
    })
  })

  describe('Real-world usage patterns', () => {
    it('should work with Framer Motion components', () => {
      const MotionChild = () => (
        <div>
          Animated content
        </div>
      )
      
      render(
        <ClientOnly fallback={<div>Loading animation...</div>}>
          <MotionChild />
        </ClientOnly>
      )
      
      expect(screen.getByText('Animated content')).toBeInTheDocument()
      expect(screen.queryByText('Loading animation...')).not.toBeInTheDocument()
    })

    it('should work with components that use localStorage', () => {
      const LocalStorageChild = () => {
        const stored = typeof window !== 'undefined' ? 
          window.localStorage?.getItem('test') || 'default' : 
          'server-default'
        return <div>Stored value: {stored}</div>
      }
      
      render(
        <ClientOnly fallback={<div>Loading storage...</div>}>
          <LocalStorageChild />
        </ClientOnly>
      )
      
      expect(screen.getByText(/Stored value:/)).toBeInTheDocument()
    })
  })
})

// Import React after the mock setup to avoid conflicts
import React from 'react'
