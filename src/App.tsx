import React, { useState } from 'react';
import { EmailInput } from './components/EmailInput.js';
import { StyleSelector } from './components/StyleSelector.js';
import { OutputBox } from './components/OutputBox.js';

export default function App() {
  const [email, setEmail] = useState('');
  const [style, setStyle] = useState('Formal');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `You are an assistant. Reply to the following email in a ${style} tone under 150 words:\n\n"${email}"`;
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.text);
    setLoading(false);
  };

  return (
    <div className='max-w-xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>AI Email Reply Generator</h1>
      <EmailInput value={email} onChange={setEmail} />
      <div className='my-4 flex gap-2'>
        <StyleSelector style={style} onSelect={setStyle} />
        <button
          className='px-4 py-2 border rounded'
          onClick={handleGenerate}
          disabled={loading || !email}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
      {response && <OutputBox output={response} />}
    </div>
  );
}
