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
          fontSize: 16,
          background: '#46144A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C2952B',
          borderRadius: 8,
          fontWeight: 'bold',
          fontFamily: 'serif',
          border: '1px solid #C2952B',
        }}
      >
        PR
      </div>
    ),
    {
      ...size,
    }
  );
}
