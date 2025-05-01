import React from 'react';
export const EmailInput = ({ value, onChange }) => (React.createElement("textarea", { className: 'w-full h-32 p-2 border rounded', placeholder: 'Paste the incoming email here...', value: value, onChange: (e) => onChange(e.target.value) }));
