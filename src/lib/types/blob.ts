// Vercel Blob Type Definitions for Display Operations

export interface BlobInfo {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  uploadedAt: Date;
}

export interface BlobListResponse {
  blobs: BlobInfo[];
  cursor?: string;
  hasMore: boolean;
}

export interface BlobApiResponse<T = BlobInfo | BlobInfo[]> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface BlobExistsResponse {
  success: boolean;
  exists: boolean;
  error?: string;
}

// API Request Types for Display
export interface GetBlobInfoRequest {
  url: string;
}

export interface ListBlobsRequest {
  storeId?: string;
  cursor?: string;
  limit?: number;
}

export interface CheckBlobExistsRequest {
  url: string;
}

// Validation Types
export interface BlobValidationResult {
  isValid: boolean;
  error?: string;
}

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
  contentType?: string;
  size?: number;
}

// Configuration Types
export interface BlobConfig {
  BLOB_READ_WRITE_TOKEN: string | undefined;
  DEFAULT_STORE_ID: string;
  ALLOWED_FILE_TYPES: string[];
  MAX_FILE_SIZE: number;
  BLOB_URL_PATTERN: RegExp;
  ERRORS: {
    TOKEN_MISSING: string;
    INVALID_URL: string;
    FILE_TOO_LARGE: string;
    UNSUPPORTED_TYPE: string;
  };
}

// Hook Return Types for Display
export interface UseBlobReturn {
  loading: boolean;
  error: string | null;
  getBlobInfo: (url: string) => Promise<BlobInfo | null>;
  listBlobs: (storeId?: string) => Promise<BlobInfo[]>;
  checkBlobExists: (url: string) => Promise<boolean>;
  clearError: () => void;
}

// Utility Types
export type BlobAction = 'list' | 'info' | 'exists';

export interface BlobApiParams {
  action?: BlobAction;
  url?: string;
  storeId?: string;
}
