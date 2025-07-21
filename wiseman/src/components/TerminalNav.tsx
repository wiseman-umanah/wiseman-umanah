import { useState, useRef, useEffect } from 'react';

const commands = [
  { cmd: 'about', desc: 'Show about section' },
  { cmd: 'projects', desc: 'Show projects' },
  { cmd: 'skills', desc: 'Show skills' },
  { cmd: 'contact', desc: 'Show contact info' },
  { cmd: 'help', desc: 'List available commands' },
  { cmd: 'clear', desc: 'Clear the terminal' },
  { cmd: 'download', desc: 'Download my CV as PDF' },
];

const helpLines = [
  "Welcome to Wiseman Umanah's portfolio!",
  'Type a command below to interact:',
  '- about:      Show about section',
  '- projects:   Show projects',
  '- skills:     Show skills',
  '- download:   Download my CV',
  '- help:       List available commands',
  '- clear:      Clear the terminal',
];

interface TerminalNavProps {
  onCommand?: (cmd: string) => void;
  autoType?: boolean;
  typed?: string;
}

const TerminalNav = ({ onCommand, autoType = false, typed = '' }: TerminalNavProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(helpLines);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [_, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (autoType) {
      setInput(typed);
    }
  }, [autoType, typed]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;

    if (key === 'Enter') {
      const value = input.trim();
      if (!value) return;
      setCommandHistory(prev => [...prev, value]);
      setHistoryIndex(-1);
      setHistory(h => [...h, `> ${value}`]);
      setInput('');

      if (value === 'help') {
        setHistory(h => [...h, ...helpLines]);
      } else if (value === 'clear') {
        setHistory(helpLines);
      } else if (value === 'download') {
        let progress = 0;
        const total = 20;
        setHistory(h => [...h, 'curl -O cv.pdf']);
        const interval = setInterval(() => {
          progress++;
          setHistory(h => [
            ...h.filter(line => !line.startsWith('[')),
            `[${'='.repeat(progress)}${' '.repeat(total - progress)}] ${Math.floor((progress / total) * 100)}%`
          ]);
          if (progress >= total) {
            clearInterval(interval);
            setHistory(h => [...h, 'Download complete']);
            const link = document.createElement('a');
            link.href = '/cv.pdf';
            link.download = 'cv.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        }, 80);
      } else if (commands.some(c => c.cmd === value)) {
        setHistory(h => [...h, `Opening ${value}...`]);
        onCommand?.(value);
      } else {
        setHistory(h => [...h, `Unknown command: ${value}`]);
      }
    }

    if (key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIndex(i => {
        const newIndex = i < commandHistory.length - 1 ? i + 1 : i;
        const cmd = commandHistory[commandHistory.length - 1 - newIndex];
        setInput(cmd ?? '');
        return newIndex;
      });
    }

    if (key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIndex(i => {
        const newIndex = i > 0 ? i - 1 : -1;
        const cmd = commandHistory[commandHistory.length - 1 - newIndex] ?? '';
        setInput(cmd);
        return newIndex;
      });
    }

    if (key === 'Tab') {
      e.preventDefault();
      const matches = commands.map(c => c.cmd).filter(cmd => cmd.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(h => [...h, ...matches.map(m => `  ${m}`)]);
      }
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/80 rounded-lg p-6 shadow-lg border border-green-700" onClick={handleContainerClick}>
      <div ref={historyRef} className="font-mono text-green-400 text-lg max-h-72 overflow-y-auto min-h-[120px] pr-2">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div className="flex items-center sticky bottom-0 bg-black/80">
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
