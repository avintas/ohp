"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"

interface BlobUploadProps {
  onUploadComplete?: (url: string) => void
}

export function BlobUpload({ onUploadComplete }: BlobUploadProps) {
  const [uploading, setUploading] = React.useState(false)
  const [uploadedUrl, setUploadedUrl] = React.useState<string>("")
  const [error, setError] = React.useState<string>("")

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('filename', file.name)

      const response = await fetch('/api/blob/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setUploadedUrl(data.data.url)
        onUploadComplete?.(data.data.url)
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (err) {
      setError('Upload failed')
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Upload Hero Image</h3>
      
      <div className="space-y-4">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {uploading && (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm text-gray-600">Uploading...</span>
          </div>
        )}

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        {uploadedUrl && (
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Uploaded successfully!</div>
            <div className="text-xs text-gray-500 break-all">{uploadedUrl}</div>
            <img 
              src={uploadedUrl} 
              alt="Uploaded" 
              className="w-32 h-32 object-cover rounded"
            />
          </div>
        )}
      </div>
    </Card>
  )
}
