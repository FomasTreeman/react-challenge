import { useState } from 'react';
export default function Shouter() {
  const [input, setInput] = useState('');

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <output>{input.toUpperCase()}</output>
    </>
  );
}
