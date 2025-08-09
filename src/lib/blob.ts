import { head } from '@vercel/blob';

// Vercel Blob configuration
export const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN environment variable is required');
}

// Blob utility functions for display operations only
export const blobUtils = {
  // Get blob info by URL for display
  async getBlobInfo(url: string) {
    try {
      const blob = await head(url);
      return blob;
    } catch (error) {
      console.error('Error getting blob info:', error);
      return null;
    }
  },

  // Check if blob exists for display
  async blobExists(url: string) {
    try {
      await head(url);
      return true;
    } catch {
      return false;
    }
  }
};

// Type definitions for Blob display operations
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
