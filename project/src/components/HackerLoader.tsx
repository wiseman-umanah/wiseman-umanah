import { useEffect, useState } from 'react';

const progressBarLength = 22;
const loaderText = '> Decrypting portfolio';

const HackerLoader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (progress < progressBarLength) {
      const t = setTimeout(() => setProgress(p => p + 1), 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDone(true);
        setTimeout(onDone, 600); // fade out
      }, 900);
      return () => clearTimeout(t);
    }
  }, [progress, onDone]);

  const bar = '█'.repeat(progress) + ' '.repeat(progressBarLength - progress);
  const percent = Math.floor((progress / progressBarLength) * 100);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${done ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="bg-black/90 rounded-lg px-8 py-6 border border-green-700 shadow-xl flex flex-col items-center">
          <div className="font-mono text-green-400 text-lg animate-fade-in flex items-center gap-2">
            <span className="text-green-300">{loaderText}</span>
            <span className="text-green-400">[<span className="tracking-widest">{bar}</span>]</span>
            <span className="text-green-300">{percent}%</span>
            {progress < progressBarLength && <span className="animate-blink-cursor">|</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerLoader; 