# Vercel Blob Integration for Display

This document describes the Vercel Blob integration infrastructure set up in this project for displaying content.

## Overview

The Blob integration provides infrastructure for displaying content from Vercel Blob storage. This setup allows you to:

- Get information about existing blobs for display
- List blobs in a store to show available content
- Check if blobs exist before displaying them
- Validate blob URLs and file types for display

## Files Structure

```
src/
├── lib/
│   ├── blob.ts              # Core Blob utility functions for display
│   ├── blob-config.ts       # Configuration and validation
│   ├── hooks/
│   │   └── useBlob.ts      # React hook for Blob display operations
│   └── types/
│       └── blob.ts          # TypeScript type definitions for display
└── app/
    └── api/
        └── blob/
            └── route.ts     # API routes for Blob display operations
```

## Environment Variables

Add the following to your `.env.local` file:

```env
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
BLOB_STORE_ID=your_store_id_here  # Optional, defaults to 'default'
```

## API Endpoints

### GET /api/blob

Query parameters:
- `action`: Required. One of: `list`, `info`, `exists`
- `url`: Required for `info` and `exists` actions
- `storeId`: Optional. Store ID for listing blobs

Examples:
```bash
# List all blobs for display
GET /api/blob?action=list

# List blobs in specific store for display
GET /api/blob?action=list&storeId=my-store

# Get blob info for display
GET /api/blob?action=info&url=https://...

# Check if blob exists before displaying
GET /api/blob?action=exists&url=https://...
```

## React Hook Usage

```typescript
import { useBlob } from '@/lib/hooks/useBlob';

function MyComponent() {
  const { 
    loading, 
    error, 
    getBlobInfo, 
    listBlobs, 
    checkBlobExists,
    clearError 
  } = useBlob();

  const handleGetInfo = async (url: string) => {
    const info = await getBlobInfo(url);
    if (info) {
      console.log('Blob info:', info);
    }
  };

  const handleListBlobs = async () => {
    const blobs = await listBlobs();
    console.log('Blobs:', blobs);
  };

  const handleCheckExists = async (url: string) => {
    const exists = await checkBlobExists(url);
    console.log('Blob exists:', exists);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* Your UI components */}
    </div>
  );
}
```

## Utility Functions

### blobUtils

Direct utility functions for server-side display operations:

```typescript
import { blobUtils } from '@/lib/blob';

// Get blob info for display
const info = await blobUtils.getBlobInfo(url);

// List blobs for display
const blobs = await blobUtils.listBlobs(storeId);

// Check if blob exists before displaying
const exists = await blobUtils.blobExists(url);
```

### blobValidation

Validation utilities for display:

```typescript
import { blobValidation } from '@/lib/blob-config';

// Validate blob URL
const isValid = blobValidation.isValidBlobUrl(url);

// Check if file type is allowed for display
const isAllowed = blobValidation.isAllowedFileType(contentType);

// Check if file size is valid for display
const isValidSize = blobValidation.isFileSizeValid(size);
```

## Configuration

The configuration is defined in `src/lib/blob-config.ts`:

- **Allowed file types**: Images, PDFs, text files, JSON
- **Max file size**: 10MB
- **URL pattern**: Validates Vercel Blob URLs
- **Error messages**: Standardized error messages

## Type Definitions

All TypeScript types are defined in `src/lib/types/blob.ts`:

- `BlobInfo`: Information about a blob for display
- `BlobApiResponse`: API response wrapper
- `UseBlobReturn`: React hook return type for display
- `BlobConfig`: Configuration interface

## Security Notes

- All blob URLs are validated against the Vercel Blob URL pattern
- File types and sizes are validated before display operations
- Environment variables are required for operation
- Error handling is implemented throughout the system

## Display Operations

This infrastructure is ready for displaying content from Vercel Blob. The foundation provides:

1. ✅ Blob information retrieval for display
2. ✅ Blob listing for content galleries
3. ✅ Blob existence checking before display
4. ✅ URL validation for secure display
5. ✅ Type safety for display operations
6. ✅ Error handling for display failures
7. ✅ React hooks for client-side display operations
8. ✅ API routes for server-side display operations

You can now display blob content on your pages using the blob URLs directly in `<img>`, `<video>`, or other media elements.
