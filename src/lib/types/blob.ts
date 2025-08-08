// Vercel Blob Type Definitions

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

export interface BlobApiResponse<T = any> {
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

export interface BlobDeleteResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// API Request Types
export interface GetBlobInfoRequest {
  url: string;
}

export interface ListBlobsRequest {
  storeId?: string;
  cursor?: string;
  limit?: number;
}

export interface DeleteBlobRequest {
  url: string;
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

// Hook Return Types
export interface UseBlobReturn {
  loading: boolean;
  error: string | null;
  getBlobInfo: (url: string) => Promise<BlobInfo | null>;
  listBlobs: (storeId?: string) => Promise<BlobInfo[]>;
  deleteBlob: (url: string) => Promise<boolean>;
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
