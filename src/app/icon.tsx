import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default async function Icon() {
  const logoPath = join(process.cwd(), 'public', 'images', 'Benbax_logo-removebg-preview.png');
  const logoBuffer = await readFile(logoPath);
  const logoDataUri = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${logoDataUri})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    ),
    {
      ...size,
    },
  );
}
