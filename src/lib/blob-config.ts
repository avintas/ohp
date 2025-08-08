// Vercel Blob Configuration
export const BLOB_CONFIG = {
  // Environment variables
  BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
  
  // Default settings
  DEFAULT_STORE_ID: process.env.BLOB_STORE_ID || 'default',
  
  // Allowed file types (for validation purposes)
  ALLOWED_FILE_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'application/pdf',
    'text/plain',
    'application/json'
  ] as const,
  
  // File size limits (in bytes)
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  
  // Blob URL patterns
  BLOB_URL_PATTERN: /^https:\/\/[a-zA-Z0-9-]+\.public\.blob\.vercel-storage\.com\/.+/,
  
  // Error messages
  ERRORS: {
    TOKEN_MISSING: 'BLOB_READ_WRITE_TOKEN environment variable is required',
    INVALID_URL: 'Invalid blob URL format',
    FILE_TOO_LARGE: 'File size exceeds maximum limit',
    UNSUPPORTED_TYPE: 'File type not supported'
  }
} as const;

// Validation utilities
export const blobValidation = {
  isValidBlobUrl(url: string): boolean {
    return BLOB_CONFIG.BLOB_URL_PATTERN.test(url);
  },
  
  isAllowedFileType(contentType: string): boolean {
    return (BLOB_CONFIG.ALLOWED_FILE_TYPES as readonly string[]).includes(contentType);
  },
  
  isFileSizeValid(size: number): boolean {
    return size <= BLOB_CONFIG.MAX_FILE_SIZE;
  }
};
