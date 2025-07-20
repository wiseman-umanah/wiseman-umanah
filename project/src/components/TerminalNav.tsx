import { useState, useRef, useEffect } from 'react';

const commands = [
  { cmd: 'about', desc: 'Show about section' },
  { cmd: 'projects', desc: 'Show projects' },
  { cmd: 'skills', desc: 'Show skills' },
  { cmd: 'contact', desc: 'Show contact info' },
  { cmd: 'help', desc: 'List available commands' },
  { cmd: 'clear', desc: 'Clear the terminal' },
];

interface TerminalNavProps {
  onCommand?: (cmd: string) => void;
  autoType?: boolean;
  typed?: string;
}

const TerminalNav = ({ onCommand, autoType = false, typed = '' }: TerminalNavProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Type "help" to see available commands.']);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Refocus input after every command
  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  // Handle auto-typing
  useEffect(() => {
    if (autoType) {
      setInput(typed);
    }
  }, [autoType, typed]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (autoType) return;
    if (e.key === 'Enter') {
      const value = input.trim();
      setHistory((h) => [...h, `> ${value}`]);
      setInput('');
      if (value === 'help') {
        setHistory((h) => [...h, ...commands.map(c => `${c.cmd} - ${c.desc}`)]);
      } else if (value === 'clear') {
        setHistory([]);
      } else if (commands.some(c => c.cmd === value)) {
        setHistory((h) => [...h, `Opening ${value}...`]);
        if (onCommand) onCommand(value);
      } else if (value) {
        setHistory((h) => [...h, `Unknown command: ${value}`]);
      }
    }
  };

  // Refocus input on click anywhere in the terminal area
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/80 rounded-lg p-6 shadow-lg border border-green-700" onClick={handleContainerClick}>
      <div className="font-mono text-green-400 text-lg min-h-[180px]">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div className="flex items-center">
          <span className="text-green-500">$</span>
          <input
            ref={inputRef}
            className="bg-transparent border-none outline-none text-green-400 ml-2 w-full"
            value={autoType ? typed : input}
            onChange={e => !autoType && setInput(e.target.value)}
            onKeyDown={handleInput}
            spellCheck={false}
            autoFocus
            disabled={autoType}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalNav; 