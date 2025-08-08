import { del, head, list } from '@vercel/blob';

// Vercel Blob configuration
export const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

if (!BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN environment variable is required');
}

// Basic Blob utility functions (infrastructure only - no upload implementation)
export const blobUtils = {
  // Get blob info by URL
  async getBlobInfo(url: string) {
    try {
      const blob = await head(url);
      return blob;
    } catch (error) {
      console.error('Error getting blob info:', error);
      return null;
    }
  },

  // List blobs in a store
  async listBlobs() {
    try {
      const { blobs } = await list();
      return blobs;
    } catch (error) {
      console.error('Error listing blobs:', error);
      return [];
    }
  },

  // Delete a blob by URL
  async deleteBlob(url: string) {
    try {
      await del(url);
      return true;
    } catch (error) {
      console.error('Error deleting blob:', error);
      return false;
    }
  },

  // Check if blob exists
  async blobExists(url: string) {
    try {
      await head(url);
      return true;
    } catch {
      return false;
    }
  }
};

// Type definitions for Blob operations
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
