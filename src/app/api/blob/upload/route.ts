import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '@/lib/blob';

export async function POST(request: NextRequest) {
  try {
    if (!BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        { success: false, error: 'BLOB_READ_WRITE_TOKEN environment variable is required' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const filename = formData.get('filename') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Upload to Vercel Blob
    const blob = await put(filename || file.name, file, {
      access: 'public',
    });

    return NextResponse.json({
      success: true,
      data: {
        url: blob.url,
        pathname: blob.pathname,
        contentType: blob.contentType,
        uploadedAt: blob.uploadedAt,
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
