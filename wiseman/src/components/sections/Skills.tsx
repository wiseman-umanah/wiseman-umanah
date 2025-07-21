import { useState, useEffect } from 'react';
import { FaCode, FaProjectDiagram, FaTools, FaUserFriends } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiExpress, SiFlask, SiGit, SiDocker, SiVercel, SiDjango, SiShell, SiC, SiSolidity } from 'react-icons/si';



const skillsByCategory = [
  {
    category: 'Languages',
    icon: <FaCode className="text-green-400" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'Solidity'],
  },
  {
    category: 'Frameworks',
    icon: <FaProjectDiagram className="text-green-400" />,
    skills: ['React', 'Node.js', 'Express.js', 'Flask', 'Django'],
  },
  {
    category: 'Tools',
    icon: <FaTools className="text-green-400" />,
    skills: ['Git', 'Docker', 'Vercel', 'Bash'],
  },
  {
    category: 'Soft Skills',
    icon: <FaUserFriends className="text-green-400" />,
    skills: ['Teamwork', 'Communication', 'Problem Solving', 'Creativity', 'Leadership', 'Adaptability'],
  },
];

const skillIcons: any = {
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
  Django: <SiDjango className="text-green-400" />,
  Bash: <SiShell className="text-green-400" />,
  C: <SiC className="text-green-400" />,
  Solidity: <SiSolidity className="text-green-400" />,
};

const Skills = () => {
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
        {skillsByCategory.slice(0, revealed).map((cat) => (
          <div key={cat.category} className="bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              {cat.icon}
              <span className="text-green-200 font-bold text-lg tracking-wide">{cat.category}</span>
            </div>
            <div className="flex flex-wrap font-bold gap-2">
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


export default Skills;