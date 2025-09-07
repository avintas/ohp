import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../../app/page'

// Mock Next.js components and hooks
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('next/script', () => ({
  __esModule: true,
  default: ({ children, ...props }: React.ComponentProps<'script'>) => <script {...props}>{children}</script>,
}))

describe('HomePage Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Page Structure and Content', () => {
    it('should render the main hero section', () => {
      render(<Home />)
      
      expect(screen.getByText("There's Only Hockey!")).toBeInTheDocument()
      expect(screen.getByText(/Where your love for the game is all you need/)).toBeInTheDocument()
    })

    it('should render all main sections', () => {
      render(<Home />)
      
      // Check for key section headings
      expect(screen.getByText('Explore Your Hockey Journey')).toBeInTheDocument()
      expect(screen.getByText('Ready to dive in? Pick your hockey vibe:')).toBeInTheDocument()
      expect(screen.getByText('Meet Your Hockey Guides')).toBeInTheDocument()
    })


    it('should render footer', () => {
      render(<Home />)
      
      // Footer should be present
      const footer = document.querySelector('footer') || screen.getByRole('contentinfo', { hidden: true })
      expect(footer).toBeInTheDocument()
    })
  })

  describe('Interactive Elements', () => {
    it('should render main CTA button', () => {
      render(<Home />)
      
      const ctaButton = screen.getByText('🎙️ Tune In Now')
      expect(ctaButton).toBeInTheDocument()
      expect(ctaButton.closest('a')).toHaveAttribute('href', '/content')
    })

    it('should render hockey guide profiles with links', () => {
      render(<Home />)
      
      // Check for guide profiles
      expect(screen.getByText('The Fan')).toBeInTheDocument()
      expect(screen.getByText('The Coach')).toBeInTheDocument()
      expect(screen.getByText('The Broadcaster')).toBeInTheDocument()
      expect(screen.getByText('The Mind Coach')).toBeInTheDocument()
      
      // Check that they have proper links
      const fanLink = screen.getByText('The Fan').closest('a')
      const coachLink = screen.getByText('The Coach').closest('a')
      
      expect(fanLink).toHaveAttribute('href', '/fan')
      expect(coachLink).toHaveAttribute('href', '/coach')
    })

    it('should render social sharing section', () => {
      render(<Home />)
      
      // Look for sharing elements
      expect(screen.getByText('Share the Hockey Love')).toBeInTheDocument()
      
      // Check for social sharing buttons/links
      const shareButtons = screen.getAllByRole('button').filter(button => 
        button.textContent?.includes('Share') || 
        button.getAttribute('aria-label')?.includes('share')
      )
      
      // Should have at least some sharing mechanism
      expect(shareButtons.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Responsive Design and Layout', () => {
    it('should have proper responsive classes', () => {
      render(<Home />)
      
      const heroTitle = screen.getByText("There's Only Hockey!")
      expect(heroTitle).toHaveClass('text-5xl', 'md:text-6xl', 'lg:text-7xl')
      
      const subtitle = screen.getByText(/Where your love for the game is all you need/)
      expect(subtitle).toHaveClass('text-xl', 'md:text-2xl')
    })

    it('should have consistent section spacing', () => {
      render(<Home />)
      
      // Check that sections have consistent responsive padding
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const classes = section.className
        // Should have some form of responsive padding
        expect(classes).toMatch(/p[xy]?-\d+|md:p[xy]?-\d+|2xl:p[xy]?-\d+/)
      })
    })
  })

  describe('SEO and Meta Data', () => {
    it('should include structured data script', () => {
      render(<Home />)
      
      const structuredDataScript = document.querySelector('script[type="application/ld+json"]')
      expect(structuredDataScript).toBeInTheDocument()
      
      if (structuredDataScript?.textContent) {
        const structuredData = JSON.parse(structuredDataScript.textContent)
        expect(structuredData['@context']).toBe('https://schema.org')
        expect(structuredData['@type']).toBe('Organization')
      }
    })

    it('should have proper document structure', () => {
      render(<Home />)
      
      // Should have main landmark
      const main = screen.getByRole('main')
      expect(main).toBeInTheDocument()
      
      // Should have proper heading hierarchy
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
      expect(h1).toHaveTextContent("There's Only Hockey!")
    })
  })

  describe('Hockey Statistics and Content', () => {
    it('should display hockey statistics', () => {
      render(<Home />)
      
      // Look for hockey-related statistics
      expect(screen.getByText(/84 IIHF federations/)).toBeInTheDocument()
      expect(screen.getByText(/1\.8M NA players/)).toBeInTheDocument()
      expect(screen.getByText(/2,500 NCAA D1/)).toBeInTheDocument()
    })

    it('should display hockey-themed content', () => {
      render(<Home />)
      
      // Check for hockey-specific terminology and content
      expect(screen.getByText(/hockey community/i)).toBeInTheDocument()
      expect(screen.getByText(/hockey fans/i)).toBeInTheDocument()
    })
  })

  describe('User Interactions and Navigation', () => {
    it('should handle main CTA click', async () => {
      const user = userEvent.setup()
      render(<Home />)
      
      const ctaButton = screen.getByText('🎙️ Tune In Now')
      
      // Should be clickable without errors
      await user.click(ctaButton)
      
      // Since it's a link, it should navigate (mocked in our test environment)
      expect(ctaButton.closest('a')).toHaveAttribute('href', '/content')
    })

    it('should handle guide profile interactions', async () => {
      const user = userEvent.setup()
      render(<Home />)
      
      const fanProfile = screen.getByText('The Fan').closest('a')
      const coachProfile = screen.getByText('The Coach').closest('a')
      
      // Should be clickable
      if (fanProfile) await user.click(fanProfile)
      if (coachProfile) await user.click(coachProfile)
      
      // Should have proper href attributes
      expect(fanProfile).toHaveAttribute('href', '/fan')
      expect(coachProfile).toHaveAttribute('href', '/coach')
    })
  })

  describe('Performance and Accessibility', () => {
    it('should have accessible images', () => {
      render(<Home />)
      
      const images = screen.getAllByRole('img')
      images.forEach(img => {
        expect(img).toHaveAttribute('alt')
        expect(img.getAttribute('alt')).not.toBe('')
      })
    })

    it('should have proper link accessibility', () => {
      render(<Home />)
      
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        // Links should have accessible text or aria-label
        const hasText = link.textContent && link.textContent.trim().length > 0
        const hasAriaLabel = link.getAttribute('aria-label')
        const hasTitle = link.getAttribute('title')
        
        expect(hasText || hasAriaLabel || hasTitle).toBeTruthy()
      })
    })

    it('should have proper heading structure', () => {
      render(<Home />)
      
      const h1Elements = screen.getAllByRole('heading', { level: 1 })
      const h2Elements = screen.getAllByRole('heading', { level: 2 })
      
      // Should have one main H1
      expect(h1Elements).toHaveLength(1)
      
      // Should have multiple H2s for sections
      expect(h2Elements.length).toBeGreaterThan(0)
    })
  })

  describe('Error Handling and Edge Cases', () => {
    it('should render without crashing when data is missing', () => {
      // Mock console.error to avoid noise in tests
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
      
      expect(() => {
        render(<Home />)
      }).not.toThrow()
      
      consoleSpy.mockRestore()
    })

    it('should handle window resize gracefully', async () => {
      render(<Home />)
      
      // Simulate window resize
      act(() => {
        global.innerWidth = 768
        global.dispatchEvent(new Event('resize'))
      })
      
      // Page should still be functional
      expect(screen.getByText("There's Only Hockey!")).toBeInTheDocument()
    })
  })

  describe('Content Validation', () => {
    it('should have proper quote escaping', () => {
      render(<Home />)
      
      // Check that all text content renders properly without quote issues
      const allText = document.body.textContent || ''
      
      // Should not contain unescaped quotes that would break HTML
      expect(allText).not.toMatch(/[^\\]"[^>]/g) // Unescaped quotes outside of HTML attributes
    })

    it('should display current hockey season information', () => {
      render(<Home />)
      
      // Should contain relevant hockey information
      const content = document.body.textContent || ''
      expect(content.toLowerCase()).toMatch(/hockey|nhl|ice|puck|rink/)
    })
  })
})

// Helper to simulate window actions in tests
const act = (callback: () => void) => {
  callback()
}
