import { useState, useCallback } from 'react';
import { blobValidation } from '@/lib/blob-config';

interface BlobInfo {
  url: string;
  pathname: string;
  contentType: string;
  size: number;
  uploadedAt: Date;
}

interface UseBlobReturn {
  // State
  loading: boolean;
  error: string | null;
  
  // Actions for display only
  getBlobInfo: (url: string) => Promise<BlobInfo | null>;
  listBlobs: (storeId?: string) => Promise<BlobInfo[]>;
  checkBlobExists: (url: string) => Promise<boolean>;
  clearError: () => void;
}

export function useBlob(): UseBlobReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const getBlobInfo = useCallback(async (url: string): Promise<BlobInfo | null> => {
    if (!blobValidation.isValidBlobUrl(url)) {
      setError('Invalid blob URL format');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/blob?action=info&url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to get blob info');
        return null;
      }

      return data.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get blob info';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const listBlobs = useCallback(async (storeId?: string): Promise<BlobInfo[]> => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ action: 'list' });
      if (storeId) {
        params.append('storeId', storeId);
      }

      const response = await fetch(`/api/blob?${params.toString()}`);
      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to list blobs');
        return [];
      }

      return data.data || [];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to list blobs';
      setError(errorMessage);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const checkBlobExists = useCallback(async (url: string): Promise<boolean> => {
    if (!blobValidation.isValidBlobUrl(url)) {
      setError('Invalid blob URL format');
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/blob?action=exists&url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (!data.success) {
        setError(data.error || 'Failed to check blob existence');
        return false;
      }

      return data.exists || false;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to check blob existence';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getBlobInfo,
    listBlobs,
    checkBlobExists,
    clearError,
  };
}
