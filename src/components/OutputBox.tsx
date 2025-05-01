import React from 'react';

interface Props {
  output: string;
}
export const OutputBox: React.FC<Props> = ({ output }) => (
  <div className='w-full p-4 border rounded bg-gray-50'>
    <pre className='whitespace-pre-wrap'>{output}</pre>
    <button
      className='mt-2 px-4 py-2 border rounded'
      onClick={() => navigator.clipboard.writeText(output)}
    >
      Copy
    </button>
  </div>
);
