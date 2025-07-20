import './App.css'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import TerminalNav from './components/TerminalNav'
import DisplayPanel from './components/DisplayPanel'
import { useState, useEffect } from 'react'
import HackerLoader from './components/HackerLoader'

function App() {
  const [activeCommand, setActiveCommand] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [autoType, setAutoType] = useState(true);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!loading && autoType) {
      let i = 0;
      const typeInterval = setInterval(() => {
        setTyped((prev) => prev + 'about'[i]);
        i++;
        if (i >= 'about'.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setActiveCommand('about');
            setAutoType(false);
            setTyped('');
          }, 400);
        }
      }, 120);
      return () => clearInterval(typeInterval);
    }
  }, [loading, autoType]);

  if (loading) {
    return <HackerLoader onDone={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono">
      <MatrixRain />
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex flex-1 flex-col md:flex-row w-full mt-4 gap-4">
          <div className="md:w-1/3 w-full">
            <TerminalNav onCommand={setActiveCommand} autoType={autoType} typed={typed} />
          </div>
          <div className="md:w-2/3 w-full">
            <DisplayPanel command={activeCommand} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
