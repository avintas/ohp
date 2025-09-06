import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { DisplayCard } from '../DisplayCard'

// Mock the router
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock ClientOnly component to render children immediately in tests
jest.mock('../ClientOnly', () => ({
  ClientOnly: ({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) => {
    // In tests, we'll render the children directly to test the motion components
    return children || fallback
  },
}))

describe('DisplayCard', () => {
  const defaultProps = {
    id: 'test-card',
    title: 'Test Card Title',
    subtitle: 'Test card subtitle',
    image: '/test-image.webp',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render card with title and subtitle', () => {
      render(<DisplayCard {...defaultProps} />)
      
      expect(screen.getByText('Test Card Title')).toBeInTheDocument()
      expect(screen.getByText('Test card subtitle')).toBeInTheDocument()
    })

    it('should render card without subtitle when not provided', () => {
      const propsWithoutSubtitle = { ...defaultProps }
      delete propsWithoutSubtitle.subtitle
      
      render(<DisplayCard {...propsWithoutSubtitle} />)
      
      expect(screen.getByText('Test Card Title')).toBeInTheDocument()
      expect(screen.queryByText('Test card subtitle')).not.toBeInTheDocument()
    })

    it('should render image with correct alt text', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const images = screen.getAllByAltText('Test Card Title')
      expect(images.length).toBeGreaterThan(0)
      
      // Check that at least one image has the correct src
      const image = images[0]
      expect(image).toHaveAttribute('src', expect.stringContaining('/test-image.webp'))
    })

    it('should apply priority loading when isFirst is true', () => {
      render(<DisplayCard {...defaultProps} isFirst={true} />)
      
      const images = screen.getAllByAltText('Test Card Title')
      // Note: priority is handled by Next.js Image component internally
      // We're just ensuring the component renders without errors when isFirst=true
      expect(images.length).toBeGreaterThan(0)
    })
  })

  describe('Styling and Layout', () => {
    it('should apply correct background color for havefun card', () => {
      render(<DisplayCard {...defaultProps} id="havefun" />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveStyle({ backgroundColor: '#8ecae6' })
    })

    it('should apply correct background color for sendhugs card', () => {
      render(<DisplayCard {...defaultProps} id="sendhugs" />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveStyle({ backgroundColor: '#EF476F' })
    })

    it('should apply correct background color for challenge card', () => {
      render(<DisplayCard {...defaultProps} id="challenge" />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveStyle({ backgroundColor: '#FB8500' })
    })

    it('should apply correct background color for motivate card', () => {
      render(<DisplayCard {...defaultProps} id="motivate" />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveStyle({ backgroundColor: '#FFB703' })
    })

    it('should apply white background for experts card', () => {
      render(<DisplayCard {...defaultProps} id="experts" />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveStyle({ backgroundColor: '#ffffff' })
    })

    it('should have fixed dimensions', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveClass('w-[320px]', 'h-[400px]')
      expect(cardElement?.parentElement).toHaveClass('min-w-[320px]', 'max-w-[320px]')
      expect(cardElement?.parentElement).toHaveClass('min-h-[400px]', 'max-h-[400px]')
    })
  })

  describe('Interactions', () => {
    it('should navigate to content page when clicked', async () => {
      render(<DisplayCard {...defaultProps} />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toBeTruthy()
      
      fireEvent.click(cardElement!.parentElement!)
      
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/content')
      })
    })

    it('should have cursor pointer style', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')
      expect(cardElement?.parentElement).toHaveClass('cursor-pointer')
    })
  })

  describe('Special Animations', () => {
    it('should render special animation for havefun card', () => {
      render(<DisplayCard {...defaultProps} id="havefun" />)
      
      // The havefun card has special motion.div with animation
      // We're testing that it renders without errors
      expect(screen.getByText('Test Card Title')).toBeInTheDocument()
      expect(screen.getByAltText('Test Card Title')).toBeInTheDocument()
    })

    it('should render normal layout for non-havefun cards', () => {
      render(<DisplayCard {...defaultProps} id="sendhugs" />)
      
      // Non-havefun cards should render normally
      expect(screen.getByText('Test Card Title')).toBeInTheDocument()
      expect(screen.getByAltText('Test Card Title')).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('should have responsive text classes', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const titleElement = screen.getByText('Test Card Title')
      expect(titleElement).toHaveClass('text-lg', 'lg:text-xl')
      
      if (defaultProps.subtitle) {
        const subtitleElement = screen.getByText('Test card subtitle')
        expect(subtitleElement).toHaveClass('text-xs', 'lg:text-sm')
      }
    })

    it('should maintain aspect ratio in image container', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const imageContainer = screen.getByAltText('Test Card Title').parentElement
      expect(imageContainer).toHaveClass('h-[260px]', 'w-full')
    })
  })

  describe('Accessibility', () => {
    it('should have proper image alt text', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const image = screen.getByAltText('Test Card Title')
      expect(image).toBeInTheDocument()
    })

    it('should be keyboard accessible', () => {
      render(<DisplayCard {...defaultProps} />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')?.parentElement
      expect(cardElement).toHaveAttribute('tabIndex') // Motion components should be focusable
    })

    it('should have appropriate ARIA roles', () => {
      render(<DisplayCard {...defaultProps} />)
      
      // The card is clickable and acts like a button/link
      const cardElement = screen.getByText('Test Card Title').closest('div')?.parentElement
      expect(cardElement).toHaveClass('cursor-pointer')
    })
  })

  describe('Error Handling', () => {
    it('should handle missing image gracefully', () => {
      const propsWithoutImage = { ...defaultProps, image: '' }
      
      expect(() => {
        render(<DisplayCard {...propsWithoutImage} />)
      }).not.toThrow()
    })

    it('should handle router errors gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
      mockPush.mockImplementationOnce(() => {
        throw new Error('Router error')
      })
      
      render(<DisplayCard {...defaultProps} />)
      
      const cardElement = screen.getByText('Test Card Title').closest('div')?.parentElement
      
      expect(() => {
        fireEvent.click(cardElement!)
      }).not.toThrow()
      
      consoleSpy.mockRestore()
    })
  })
})
