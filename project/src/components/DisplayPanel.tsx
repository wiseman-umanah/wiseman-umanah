import { useEffect, useState, useCallback } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaTelegramPlane, FaCode, FaProjectDiagram, FaTools, FaUserFriends, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiExpress, SiFlask, SiGit, SiDocker, SiVercel } from 'react-icons/si';

interface DisplayPanelProps {
  command: string;
}

const AboutCV = () => (
  <div className="space-y-8">
    {/* ACCESS GRANTED Banner */}
    <div className="w-fit mx-auto mb-2">
      <div className="font-mono text-green-400 text-lg bg-black/90 rounded px-8 py-2 border-l-4 border-green-500 shadow flex items-center gap-3 relative overflow-hidden">
        <span className="text-green-500">$</span>
        <span className="tracking-widest font-bold text-green-300">ACCESS GRANTED</span>
        <span className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-scanline" />
      </div>
    </div>
    {/* Header with Avatar */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-green-700 pb-4 mb-4">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img src="/me.jpg" alt="Wiseman Umanah" className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-700 shadow-lg" />
          {/* Matrix glow */}
          <span className="absolute inset-0 rounded-full border-4 border-green-400 opacity-30 blur-md animate-pulse pointer-events-none" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-300 tracking-tight drop-shadow-lg glitch-text">Wiseman Umanah</h1>
          <div className="flex flex-wrap gap-4 mt-3 text-green-200 text-base items-center">
            <span className="flex items-center gap-2"><FaEnvelope className="text-green-400" /> wisemanumanah@gmail.com</span>
            <span className="flex items-center gap-2"><FaPhone className="text-green-400" /> +234 802 7820 607</span>
            <a href="https://www.linkedin.com/in/wisemanumanah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-green-100 transition"><FaLinkedin className="text-green-400" /> wisemanumanah</a>
            <span className="flex items-center gap-2"><FaTelegramPlane className="text-green-400" /> @knoxdev</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="bg-green-900/60 border border-green-700 rounded px-4 py-1 text-green-200 font-mono text-sm shadow">Software Engineer</span>
      </div>
    </div>
    {/* Short Intro */}
    <div className="flex flex-col md:flex-row gap-6">
      {/* Quick Facts */}
      <div className="flex-1 bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-lg"><FaUserFriends className="text-green-400" /> Quick Facts</div>
        <div className="flex flex-col gap-2 text-green-100 font-mono">
          <span><span className="text-green-400">Location:</span> Nigeria</span>
          <span><span className="text-green-400">Experience:</span> 4+ years</span>
          <span><span className="text-green-400">Specialty:</span> Full-Stack, UI/UX, AI Integration</span>
        </div>
      </div>
      {/* What I Do */}
      <div className="flex-1 bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-lg"><FaTools className="text-green-400" /> What I Do</div>
        <ul className="list-disc list-inside text-green-100 font-mono space-y-1 ml-2">
          <li>Build seamless user experiences</li>
          <li>Architect robust backend systems</li>
          <li>Lead and collaborate in teams</li>
          <li>Integrate AI and automation</li>
        </ul>
      </div>
      {/* Fun Fact */}
      <div className="flex-1 bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-lg"><FaCheckCircle className="text-green-400" /> Fun Fact</div>
        <div className="text-green-100 font-mono">
          <span><span className="text-green-400">Hacker alias:</span> knoxdev</span><br />
          <span><span className="text-green-400">Loves:</span> Solving complex challenges, Matrix movies, and creative coding</span>
        </div>
      </div>
    </div>
    {/* Key Skills */}
    <div className="bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg">
      <h2 className="text-2xl font-bold text-green-300 mb-2 tracking-wide">Key Skills</h2>
      <div className="flex flex-wrap gap-3">
        {['Teamwork', 'Communication', 'Problem Solving', 'Leadership', 'Project Management', 'Adaptability', 'Creativity', 'Software Design', 'Development'].map(skill => (
          <span key={skill} className="bg-green-900/60 border border-green-700 rounded px-3 py-1 text-green-200 font-mono text-sm shadow hover:bg-green-800 transition cursor-default">{skill}</span>
        ))}
      </div>
    </div>
  </div>
);

const aboutCVText = `Wiseman Umanah\nPhone: +234 802 7820 607 | Email: wisemanumanah@gmail.com\nLinkedIn: https://www.linkedin.com/in/wisemanumanah\n\nProfile Summary\nA results-oriented software engineer with strong expertise in full-stack development, dedicated to crafting seamless user experiences and robust backend solutions. Skilled in designing and deploying scalable applications, with hands-on experience across technologies. Proven ability to collaborate effectively in dynamic team environments, as demonstrated in successful projects. Adept at clear communication, fostering a culture of knowledge sharing and teamwork to deliver impactful results. Passionate about solving complex challenges and continuously enhancing systems to meet evolving user needs. Ready to bring a collaborative and innovative mindset to drive success in a software engineering role.\n\nKey Skills\n- Excellent teamwork and collaboration\n- Clear and effective communication\n- Problem-solving and critical thinking\n- Leadership and project management\n- Adaptability in dynamic environments\n- Creativity\n- Software Design / Development skill\n\nProjects And Contributions\nQuestion Genius - Exams Preparation System for students (09/2024 - 10/2024)\nThe Exams Preparation Engine is a unique and systematic tool designed to assist students in their academic pursuits by helping them study and prepare for exams.\n  • Led the development and implementation of a tool that generates exam-like questions from PDFs, text files, and images, enhancing academic preparation for students.\n  • Leveraged Reactjs, Express.js, Tesseract.js, and PDFParser libraries to process content into study-ready material.\n  • Successfully tested the tool with positive results for PDFs containing text, images, and standard documents.\n  • Implemented feedback-driven iterations, receiving requests for the tool to go live for broader student use.\n  • Overcame technical challenges, including fixing inconsistent JSON outputs from the AI model (Gemini) and optimizing hosting for speed and efficiency using Vercel and Render.\n  • Directed a collaborative team, employing Git for version control and ensuring seamless project delivery.\n  • Future plans include improving character recognition speed, handling complex image-based PDFs, and exploring handwriting support.\n\nTravel Planner - A system for planning travel trips (09/2024)\nDeveloped a travel preparation tool with Python-Flask and React.js to provide essential travel insights, including weather forecasts, recommendations, and budget planning.\n  • Integrated APIs; Gemini, OpenWeather and Google Maps for analytical weather data, location and location-based recommendation to enhance user travel experience.\n  • Handled API integration, routing and retrieving weather data based on user location requests.\n  • Recognized by ALX for creativity and suitability, leading the team to the next stage of the SEFaceOff Cup.\n  • The tool will be scaled to support a global user base and deployed to ensure accessibility for users worldwide.\n`;

const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function randomMatrixString(length: number) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += matrixChars[Math.floor(Math.random() * matrixChars.length)];
  }
  return str;
}

const projectsData = [
  {
    id: 'question-genius',
    name: 'question-genius.exe',
    title: 'Question Genius - Exams Preparation System',
    period: '09/2024 - 10/2024',
    description: 'A unique and systematic tool designed to assist students in their academic pursuits by helping them study and prepare for exams.',
    achievements: [
      'Led the development and implementation of a tool that generates exam-like questions from PDFs, text files, and images.',
      'Leveraged Reactjs, Express.js, Tesseract.js, and PDFParser libraries to process content into study-ready material.',
      'Successfully tested the tool with positive results for PDFs containing text, images, and standard documents.',
      'Implemented feedback-driven iterations, receiving requests for the tool to go live for broader student use.',
      'Overcame technical challenges, including fixing inconsistent JSON outputs from the AI model (Gemini) and optimizing hosting for speed and efficiency using Vercel and Render.',
      'Directed a collaborative team, employing Git for version control and ensuring seamless project delivery.',
      'Future plans include improving character recognition speed, handling complex image-based PDFs, and exploring handwriting support.'
    ],
    tech: ['React', 'Express.js', 'Tesseract.js', 'PDFParser', 'Vercel', 'Render'],
    github: 'https://github.com/yourusername/question-genius',
    demo: '',
  },
  {
    id: 'travel-planner',
    name: 'travel-planner.py',
    title: 'Travel Planner - Trip Planning System',
    period: '09/2024',
    description: 'A travel preparation tool with Python-Flask and React.js to provide essential travel insights, including weather forecasts, recommendations, and budget planning.',
    achievements: [
      'Integrated APIs; Gemini, OpenWeather and Google Maps for analytical weather data, location and location-based recommendation.',
      'Handled API integration, routing and retrieving weather data based on user location requests.',
      'Recognized by ALX for creativity and suitability, leading the team to the next stage of the SEFaceOff Cup.',
      'The tool will be scaled to support a global user base and deployed to ensure accessibility for users worldwide.'
    ],
    tech: ['Python', 'Flask', 'React', 'OpenWeather', 'Google Maps', 'Gemini'],
    github: 'https://github.com/yourusername/travel-planner',
    demo: '',
  },
  // Add more projects as desired
];

const ProjectMatrixDecoder = ({ text, onDone }: { text: string; onDone: () => void }) => {
  const [display, setDisplay] = useState<string>('');
  useEffect(() => {
    let progress = 0;
    let revealed = Array(text.length).fill(false);
    let frame = 0;
    const charsPerFrame = 6;
    const interval = setInterval(() => {
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (revealed[i] || text[i] === '\n') {
          out += text[i];
        } else if (i <= progress) {
          out += randomMatrixString(1);
        } else {
          out += ' ';
        }
      }
      setDisplay(out);
      if (frame % 1 === 0 && progress < text.length) {
        for (let j = 0; j < charsPerFrame && progress < text.length; j++) {
          revealed[progress] = true;
          progress++;
        }
      }
      frame++;
      if (progress >= text.length) {
        clearInterval(interval);
        setDisplay(text);
        onDone();
      }
    }, 8);
    return () => clearInterval(interval);
  }, [text, onDone]);
  return <pre className="whitespace-pre-line text-green-100 font-mono text-[1rem]">{display}</pre>;
};

const ProjectDetails = ({ project }: { project: typeof projectsData[0] }) => (
  <div className="space-y-3 animate-fade-in bg-black/70 border border-green-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center gap-2 mb-2">
      <FaProjectDiagram className="text-green-400 text-xl" />
      <span className="text-2xl font-bold text-green-300">{project.title}</span>
      <span className="text-xs text-green-400">({project.period})</span>
    </div>
    <div className="text-green-200 text-sm mb-1">{project.description}</div>
    <div>
      <span className="font-semibold text-green-300">Tech Stack:</span>
      <span className="ml-2 flex flex-wrap gap-2 mt-1">
        {project.tech.map(t => (
          <span key={t} className="bg-green-900/60 border border-green-700 rounded px-2 py-0.5 text-xs text-green-200 font-mono shadow-sm hover:bg-green-800 transition cursor-default">{t}</span>
        ))}
      </span>
    </div>
    <div>
      <span className="font-semibold text-green-300">Achievements:</span>
      <ul className="list-disc list-inside text-green-100 space-y-1 ml-4">
        {project.achievements.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
    <div className="flex gap-4 mt-2">
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline text-green-400 hover:text-green-200 flex items-center gap-1"><FaCode className="text-green-400" />GitHub <FaExternalLinkAlt className="text-green-500 text-xs" /></a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="underline text-green-400 hover:text-green-200 flex items-center gap-1">Live Demo <FaExternalLinkAlt className="text-green-500 text-xs" /></a>}
    </div>
  </div>
);

const ProjectCardsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="mb-4 flex items-center gap-2 text-green-300 font-bold text-lg">
        <FaProjectDiagram className="text-green-400" />
        /projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((p, idx) => (
          <a
            key={p.id}
            href={p.demo || p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/80 border border-green-800 rounded-xl p-6 shadow-lg flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-green-400 text-2xl" />
              <span className="text-xl font-bold text-green-200 group-hover:text-green-100 transition">{p.title}</span>
            </div>
            <div className="text-green-300 text-sm mb-2 line-clamp-3">{p.description}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map(t => (
                <span key={t} className="bg-green-900/60 border border-green-700 rounded px-2 py-0.5 text-xs text-green-200 font-mono shadow hover:bg-green-800 transition cursor-default flex items-center gap-1">
                  {skillIcons[t]}
                  {t}
                </span>
              ))}
            </div>
            <button className="mt-auto px-4 py-2 bg-green-700/80 text-green-100 rounded shadow font-mono text-sm tracking-wide border border-green-500 group-hover:bg-green-500 group-hover:text-black transition flex items-center gap-2">
              View Project <FaExternalLinkAlt className="text-green-200 text-xs" />
            </button>
            {/* Animated scanline effect */}
            <span className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-scanline" />
          </a>
        ))}
      </div>
    </div>
  );
};

const skillsByCategory = [
  {
    category: 'Languages',
    icon: <FaCode className="text-green-400" />,
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frameworks',
    icon: <FaProjectDiagram className="text-green-400" />,
    skills: ['React', 'Node.js', 'Express.js', 'Flask'],
  },
  {
    category: 'Tools',
    icon: <FaTools className="text-green-400" />,
    skills: ['Git', 'Docker', 'Vercel'],
  },
  {
    category: 'Soft Skills',
    icon: <FaUserFriends className="text-green-400" />,
    skills: ['Teamwork', 'Communication', 'Problem Solving', 'Creativity', 'Leadership', 'Adaptability'],
  },
];

const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript className="text-green-400" />,
  TypeScript: <SiTypescript className="text-green-400" />,
  Python: <SiPython className="text-green-400" />,
  React: <SiReact className="text-green-400" />,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  'Express.js': <SiExpress className="text-green-400" />,
  Flask: <SiFlask className="text-green-400" />,
  Git: <SiGit className="text-green-400" />,
  Docker: <SiDocker className="text-green-400" />,
  Vercel: <SiVercel className="text-green-400" />,
};

const SkillsPanel = () => {
  const [scanning, setScanning] = useState(true);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    setScanning(true);
    setRevealed(0);
    const scanTimeout = setTimeout(() => {
      setScanning(false);
      let i = 0;
      const revealInterval = setInterval(() => {
        i++;
        setRevealed(i);
        if (i >= skillsByCategory.length) clearInterval(revealInterval);
      }, 400);
    }, 900);
    return () => clearTimeout(scanTimeout);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4 text-green-400 font-mono text-lg">
        <FaTools className="text-green-300" />
        {scanning ? '[ SCANNING SKILLS... ]' : '[ SKILLS DECRYPTED ]'}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsByCategory.slice(0, revealed).map((cat, idx) => (
          <div key={cat.category} className="bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              {cat.icon}
              <span className="text-green-200 font-bold text-lg tracking-wide">{cat.category}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="bg-green-900/60 border border-green-700 rounded px-3 py-1 text-green-200 font-mono text-sm shadow hover:bg-green-800 transition cursor-default flex items-center gap-2">
                  {skillIcons[skill]}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const contactInfo = [
  {
    label: 'Email',
    value: 'wisemanumanah@gmail.com',
    action: 'copy',
    display: 'wisemanumanah@gmail.com',
  },
  {
    label: 'Phone',
    value: '+234 802 7820 607',
    action: 'copy',
    display: '+234 802 7820 607',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/wisemanumanah',
    action: 'open',
    display: '/wisemanumanah',
  },
  {
    label: 'Telegram',
    value: '@knoxdev',
    action: 'copy',
    display: '@knoxdev',
  },
];

const ContactPanel = () => {
  const [revealed, setRevealed] = useState(0);
  const [terminalMsg, setTerminalMsg] = useState('');

  useEffect(() => {
    setRevealed(0);
    setTerminalMsg('');
    let i = 0;
    const revealInterval = setInterval(() => {
      i++;
      setRevealed(i);
      if (i >= contactInfo.length) clearInterval(revealInterval);
    }, 350);
    return () => clearInterval(revealInterval);
  }, []);

  const handleAction = (item: typeof contactInfo[0]) => {
    if (item.action === 'copy') {
      navigator.clipboard.writeText(item.value);
      setTerminalMsg(`[ ${item.label} copied to clipboard! ]`);
    } else if (item.action === 'open') {
      window.open(item.value, '_blank');
      setTerminalMsg(`[ Opening ${item.label}... ]`);
    }
    setTimeout(() => setTerminalMsg(''), 1800);
  };

  return (
    <div>
      <div className="mb-4 text-green-400 font-mono text-lg">[ DECODING CONTACT... ]</div>
      <div className="space-y-3 font-mono text-green-200">
        {contactInfo.slice(0, revealed).map((item, idx) => (
          <div key={item.label} className="flex items-center gap-2 animate-fade-in cursor-pointer group" onClick={() => handleAction(item)}>
            <span className="text-green-400">&gt;</span>
            <span className="font-bold text-green-300">{item.label}:</span>
            <span className="underline group-hover:text-green-100 transition">{item.display}</span>
            <span className="text-xs text-green-700">[{item.action === 'copy' ? 'copy' : 'open'}]</span>
          </div>
        ))}
      </div>
      {terminalMsg && <div className="mt-6 text-green-400 font-mono animate-fade-in">{terminalMsg}</div>}
    </div>
  );
};

const contentMap: Record<string, JSX.Element> = {
  about: <AboutCV />,
  projects: <ProjectCardsPanel />,
  skills: <SkillsPanel />,
  contact: <ContactPanel />,
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
  const [decoding, setDecoding] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (['about', 'skills', 'projects', 'contact'].includes(command)) {
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
      {['about', 'skills', 'projects', 'contact'].includes(command) ? (
        showContent ? contentMap[command] : <MatrixBlockDecoder onDone={handleMatrixDone} />
      ) : (
        contentMap[command] || (command ? 'Decoding...' : 'Awaiting command...')
      )}
    </div>
  );
};

export default DisplayPanel; 