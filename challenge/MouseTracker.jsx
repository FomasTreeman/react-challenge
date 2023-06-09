import { useEffect, useState } from 'react';

export default function MouseTracker() {
  const [clientX, setClientX] = useState('');
  const [clientY, setClientY] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setClientX(e.clientX);
      setClientY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <output>
      {clientX},{clientY}
    </output>
  );
}
