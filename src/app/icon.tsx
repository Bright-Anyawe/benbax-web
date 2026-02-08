import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F4C81',
          color: 'white',
          fontSize: 18,
          fontWeight: 700,
          fontFamily: 'Arial',
        }}
      >
        B
      </div>
    ),
    {
      ...size,
    },
  );
}
