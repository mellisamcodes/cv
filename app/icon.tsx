import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = {
  width: 48,
  height: 48,
}
export const contentType = 'image/png'

export default function Icon() {
  // Read the image file and convert to base64
  const imagePath = join(process.cwd(), 'public', 'mel.png')
  const imageData = readFileSync(imagePath)
  const base64Image = `data:image/png;base64,${imageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <img
          src={base64Image}
          alt=""
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
