import { useEffect, useState } from 'react';
import { randomMatrixString } from '../utils/tools';
import Skills from './sections/Skills';
import About from './sections/About';
import Projects from './sections/Projects';

interface DisplayPanelProps {
  command: string;
}

const contentMap: any = {
  about: <About />,
  projects: <Projects />,
  skills: <Skills />
};

const MatrixBlockDecoder = ({ onDone }: { onDone: () => void }) => {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let running = true;
    const interval = setInterval(() => {
      if (!running) return;
      setDisplay(randomMatrixString(600));
    }, 40);
    const timeout = setTimeout(() => {
      running = false;
      clearInterval(interval);
      onDone();
    }, 1000);
    return () => {
      running = false;
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onDone]);
  return <pre className="whitespace-pre-line text-green-400 font-mono text-[1.1rem] select-none min-h-[300px] flex items-center justify-center">{display}</pre>;
};

const DisplayPanel = ({ command }: DisplayPanelProps) => {
  const [_, setDecoding] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (['about', 'skills', 'projects', 'download'].includes(command)) {
      setShowContent(false);
      setDecoding(true);
    } else {
      setShowContent(false);
      setDecoding(false);
    }
  }, [command]);

  const handleMatrixDone = () => {
    setShowContent(true);
    setDecoding(false);
  };

  return (
    <div className="w-full bg-black/80 rounded-lg p-6 shadow-lg border border-green-700 font-mono text-green-400 text-lg select-text max-h-screen overflow-y-auto">
      {['about', 'skills', 'projects', 'download'].includes(command) ? (
        showContent ? contentMap[command] : <MatrixBlockDecoder onDone={handleMatrixDone} />
      ) : (
        contentMap[command] || (command ? 'Decoding...' : 'Awaiting command...')
      )}
    </div>
  );
};

export default DisplayPanel;
