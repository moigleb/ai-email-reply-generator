import React from 'react';
export const OutputBox = ({ output }) => (React.createElement("div", { className: 'w-full p-4 border rounded bg-gray-50' },
    React.createElement("pre", { className: 'whitespace-pre-wrap' }, output),
    React.createElement("button", { className: 'mt-2 px-4 py-2 border rounded', onClick: () => navigator.clipboard.writeText(output) }, "Copy")));
