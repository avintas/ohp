# Vercel Blob Integration

This document describes the Vercel Blob integration infrastructure set up in this project.

## Overview

The Blob integration provides infrastructure for interacting with Vercel Blob storage without implementing file upload or content management features. This setup allows you to:

- Get information about existing blobs
- List blobs in a store
- Delete blobs
- Check if blobs exist
- Validate blob URLs and file types

## Files Structure

```
src/
├── lib/
│   ├── blob.ts              # Core Blob utility functions
│   ├── blob-config.ts       # Configuration and validation
│   ├── hooks/
│   │   └── useBlob.ts      # React hook for Blob operations
│   └── types/
│       └── blob.ts          # TypeScript type definitions
└── app/
    └── api/
        └── blob/
            └── route.ts     # API routes for Blob operations
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
# List all blobs
GET /api/blob?action=list

# List blobs in specific store
GET /api/blob?action=list&storeId=my-store

# Get blob info
GET /api/blob?action=info&url=https://...

# Check if blob exists
GET /api/blob?action=exists&url=https://...
```

### DELETE /api/blob

Query parameters:
- `url`: Required. URL of the blob to delete

Example:
```bash
DELETE /api/blob?url=https://...
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
    deleteBlob, 
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

  const handleDeleteBlob = async (url: string) => {
    const success = await deleteBlob(url);
    if (success) {
      console.log('Blob deleted successfully');
    }
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

Direct utility functions for server-side operations:

```typescript
import { blobUtils } from '@/lib/blob';

// Get blob info
const info = await blobUtils.getBlobInfo(url);

// List blobs
const blobs = await blobUtils.listBlobs(storeId);

// Delete blob
const success = await blobUtils.deleteBlob(url);

// Check if blob exists
const exists = await blobUtils.blobExists(url);
```

### blobValidation

Validation utilities:

```typescript
import { blobValidation } from '@/lib/blob-config';

// Validate blob URL
const isValid = blobValidation.isValidBlobUrl(url);

// Check if file type is allowed
const isAllowed = blobValidation.isAllowedFileType(contentType);

// Check if file size is valid
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

- `BlobInfo`: Information about a blob
- `BlobApiResponse`: API response wrapper
- `UseBlobReturn`: React hook return type
- `BlobConfig`: Configuration interface

## Security Notes

- All blob URLs are validated against the Vercel Blob URL pattern
- File types and sizes are validated before operations
- Environment variables are required for operation
- Error handling is implemented throughout the system

## Next Steps

This infrastructure is ready for you to implement your own file upload and content management features. The foundation provides:

1. ✅ Blob information retrieval
2. ✅ Blob listing and management
3. ✅ Blob deletion
4. ✅ URL validation
5. ✅ Type safety
6. ✅ Error handling
7. ✅ React hooks for client-side operations
8. ✅ API routes for server-side operations

You can now build your upload functionality on top of this infrastructure.
