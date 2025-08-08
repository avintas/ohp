import { NextRequest, NextResponse } from 'next/server';
import { blobUtils } from '@/lib/blob';
import { BLOB_CONFIG, blobValidation } from '@/lib/blob-config';

// GET - List blobs or get blob info
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const url = searchParams.get('url');
    const storeId = searchParams.get('storeId') || BLOB_CONFIG.DEFAULT_STORE_ID;

    switch (action) {
      case 'list':
        const blobs = await blobUtils.listBlobs(storeId);
        return NextResponse.json({ success: true, data: blobs });

      case 'info':
        if (!url) {
          return NextResponse.json(
            { success: false, error: 'URL parameter is required' },
            { status: 400 }
          );
        }
        
        if (!blobValidation.isValidBlobUrl(url)) {
          return NextResponse.json(
            { success: false, error: BLOB_CONFIG.ERRORS.INVALID_URL },
            { status: 400 }
          );
        }

        const blobInfo = await blobUtils.getBlobInfo(url);
        if (!blobInfo) {
          return NextResponse.json(
            { success: false, error: 'Blob not found' },
            { status: 404 }
          );
        }

        return NextResponse.json({ success: true, data: blobInfo });

      case 'exists':
        if (!url) {
          return NextResponse.json(
            { success: false, error: 'URL parameter is required' },
            { status: 400 }
          );
        }

        const exists = await blobUtils.blobExists(url);
        return NextResponse.json({ success: true, exists });

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action. Use: list, info, or exists' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Blob API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a blob
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    if (!blobValidation.isValidBlobUrl(url)) {
      return NextResponse.json(
        { success: false, error: BLOB_CONFIG.ERRORS.INVALID_URL },
        { status: 400 }
      );
    }

    const deleted = await blobUtils.deleteBlob(url);
    
    if (deleted) {
      return NextResponse.json({ success: true, message: 'Blob deleted successfully' });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to delete blob' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Blob delete error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
