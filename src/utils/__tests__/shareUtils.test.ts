import { safeShare, safeUpdateMeta } from '../shareUtils'

// Mock navigator and document for testing
const mockNavigator = {
  share: jest.fn(),
  clipboard: {
    writeText: jest.fn(),
  },
}

const mockDocument = {
  createElement: jest.fn(),
  querySelector: jest.fn(),
  body: {
    appendChild: jest.fn(),
    removeChild: jest.fn(),
  },
  head: {
    appendChild: jest.fn(),
  },
  execCommand: jest.fn(),
}

describe('shareUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    
    // Reset global mocks
    Object.defineProperty(global, 'navigator', {
      value: mockNavigator,
      writable: true,
    })
    
    Object.defineProperty(global, 'document', {
      value: mockDocument,
      writable: true,
    })
    
    Object.defineProperty(global, 'window', {
      value: { location: { href: 'https://onlyhockey.com' } },
      writable: true,
    })
  })

  describe('safeShare', () => {
    it('should use native sharing when available', async () => {
      mockNavigator.share.mockResolvedValue(undefined)
      
      const shareData = {
        title: 'OnlyHockey',
        text: 'Check out this hockey content!',
        url: 'https://onlyhockey.com/content',
      }
      
      const result = await safeShare(shareData, 'Fallback text')
      
      expect(result).toBe(true)
      expect(mockNavigator.share).toHaveBeenCalledWith({
        title: 'OnlyHockey',
        text: 'Check out this hockey content!',
        url: 'https://onlyhockey.com/content',
      })
    })

    it('should fallback to clipboard when native sharing fails', async () => {
      mockNavigator.share = undefined
      mockNavigator.clipboard.writeText.mockResolvedValue(undefined)
      
      const shareData = {
        title: 'OnlyHockey',
        text: 'Check out this hockey content!',
      }
      
      const result = await safeShare(shareData, 'Fallback text for clipboard')
      
      expect(result).toBe(true)
      expect(mockNavigator.clipboard.writeText).toHaveBeenCalledWith('Fallback text for clipboard')
    })

    it('should use textarea fallback when clipboard is not available', async () => {
      mockNavigator.share = undefined
      mockNavigator.clipboard = undefined
      
      const mockTextarea = {
        value: '',
        select: jest.fn(),
      }
      mockDocument.createElement.mockReturnValue(mockTextarea)
      mockDocument.execCommand.mockReturnValue(true)
      
      const result = await safeShare({}, 'Final fallback text')
      
      expect(result).toBe(true)
      expect(mockDocument.createElement).toHaveBeenCalledWith('textarea')
      expect(mockTextarea.value).toBe('Final fallback text')
      expect(mockTextarea.select).toHaveBeenCalled()
      expect(mockDocument.execCommand).toHaveBeenCalledWith('copy')
    })

    it('should return false when running on server side', async () => {
      // Mock server environment
      Object.defineProperty(global, 'window', {
        value: undefined,
        writable: true,
      })
      
      const result = await safeShare({}, 'test')
      
      expect(result).toBe(false)
    })

    it('should handle errors gracefully', async () => {
      mockNavigator.share.mockRejectedValue(new Error('Share failed'))
      
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation()
      
      const result = await safeShare({}, 'test')
      
      expect(result).toBe(false)
      expect(consoleSpy).toHaveBeenCalledWith('Share failed:', expect.any(Error))
      
      consoleSpy.mockRestore()
    })
  })

  describe('safeUpdateMeta', () => {
    it('should update existing meta tag', () => {
      const existingMeta = {
        setAttribute: jest.fn(),
      }
      mockDocument.querySelector.mockReturnValue(existingMeta)
      
      safeUpdateMeta('description', 'New hockey content description')
      
      expect(mockDocument.querySelector).toHaveBeenCalledWith('meta[name="description"]')
      expect(existingMeta.setAttribute).toHaveBeenCalledWith('content', 'New hockey content description')
    })

    it('should create new meta tag when it does not exist', () => {
      mockDocument.querySelector.mockReturnValue(null)
      
      const newMeta = {
        setAttribute: jest.fn(),
      }
      mockDocument.createElement.mockReturnValue(newMeta)
      
      safeUpdateMeta('keywords', 'hockey, sports, community')
      
      expect(mockDocument.createElement).toHaveBeenCalledWith('meta')
      expect(newMeta.setAttribute).toHaveBeenCalledWith('name', 'keywords')
      expect(newMeta.setAttribute).toHaveBeenCalledWith('content', 'hockey, sports, community')
      expect(mockDocument.head.appendChild).toHaveBeenCalledWith(newMeta)
    })

    it('should not run on server side', () => {
      Object.defineProperty(global, 'document', {
        value: undefined,
        writable: true,
      })
      
      safeUpdateMeta('test', 'test')
      
      // Should not throw or call any methods
      expect(mockDocument.querySelector).not.toHaveBeenCalled()
    })

    it('should handle errors gracefully', () => {
      mockDocument.querySelector.mockImplementation(() => {
        throw new Error('DOM error')
      })
      
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation()
      
      safeUpdateMeta('test', 'test')
      
      expect(consoleSpy).toHaveBeenCalledWith('Meta update failed:', expect.any(Error))
      
      consoleSpy.mockRestore()
    })
  })
})
