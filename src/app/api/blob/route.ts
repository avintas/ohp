import { NextRequest, NextResponse } from 'next/server';
import { blobUtils } from '@/lib/blob';
import { BLOB_CONFIG, blobValidation } from '@/lib/blob-config';

// GET - Get blob info or check existence for display only
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const url = searchParams.get('url');

    switch (action) {
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
          { success: false, error: 'Invalid action. Use: info or exists' },
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
