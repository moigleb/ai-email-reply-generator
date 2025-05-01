import React from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}
export const EmailInput: React.FC<Props> = ({ value, onChange }) => (
  <textarea
    className='w-full h-32 p-2 border rounded'
    placeholder='Paste the incoming email here...'
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
