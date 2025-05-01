import React from 'react';
interface Props {
  style: string;
  onSelect: (s: string) => void;
}
const options = ['Formal', 'Friendly', 'Neutral'];
export const StyleSelector: React.FC<Props> = ({ style, onSelect }) => (
  <select
    className='p-2 border rounded'
    value={style}
    onChange={(e) => onSelect(e.target.value)}
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
