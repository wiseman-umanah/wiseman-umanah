import { useEffect, useState } from 'react';
import MatrixRain from './MatrixRain';

const progressBarLength = 22;

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
      <MatrixRain />
      <div className="relative z-10 flex flex-col items-center gap-4 w-full px-2">
        <div className="bg-black/90 rounded-lg px-2 py-4 sm:px-6 sm:py-6 border border-green-700 shadow-xl flex flex-col items-center w-full max-w-xs sm:max-w-md md:max-w-lg">
          <div className="font-mono text-green-400 text-base sm:text-lg md:text-xl animate-fade-in flex flex-col items-center gap-2 text-center break-words w-full">
            <span className="text-green-300 w-full flex flex-col items-center">
              <span className="tracking-widest break-all w-full">[{bar}]</span>
              <span className="text-green-300">{percent}%</span>
            </span>
            {progress < progressBarLength && <span className="animate-blink-cursor">|</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackerLoader; 