import React from 'react';
const options = ['Formal', 'Friendly', 'Neutral'];
export const StyleSelector = ({ style, onSelect }) => (React.createElement("select", { className: 'p-2 border rounded', value: style, onChange: (e) => onSelect(e.target.value) }, options.map((opt) => (React.createElement("option", { key: opt, value: opt }, opt)))));
