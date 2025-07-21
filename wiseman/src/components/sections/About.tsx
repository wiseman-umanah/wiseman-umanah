import { FaEnvelope, FaLinkedin, FaTelegramPlane, FaCode, FaTools, FaUserFriends, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const featuredProjects: { title: string; description: string; url: string }[] = [
  {
	title: 'Lisk Name Server',
	description: 'Lisk Name Service (LNS) is a decentralized naming protocol built for the future of Web3 adoption on Lisk and the broader Optimism Superchain.',
	url: 'https://lisk-name-server.vercel.app',
  },
  {
	title: 'NeonBid',
	description: 'NeonBid is a web3 auction platform for NFTs, specializing in art, generative art, and photography. Discover unique digital artworks, participate in live auctions, and connect with a community of creators and collectors. Built on blockchain for secure ownership and transparency.',
	url: 'https://neonbid.vercel.app',
  },
  {
	title: 'Astrics',
	description: 'Astrics is a web app that delivers astronomical pictures to users. This can inspire learning and research for people. 👩‍🚀🚀',
	url: 'https://github.com/wiseman-umanah/Astrics',
  },
  
  {
	title: 'Acadeva',
	description: 'Acadeva is a student powerhouse that contains all essentials needed by a student, Starting from books, recommendations, AI systems curated for students, time management to feeds and new designed to meet students needs.',
	url: 'https://go.acadeva.xyz',
  },
];


const About = () => (
  <div className="space-y-8">
	
	<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-green-700 pb-4 mb-4">
	  <div className="flex items-center gap-6">
		<div className="relative hidden md:block">
		  <img src="/me.jpg" alt="Wiseman Umanah" className="w-32 h-32 rounded-full object-cover border-4 border-green-700 shadow-lg" />
		  {/* Matrix glow */}
		  <span className="absolute inset-0 rounded-full border-4 border-green-400 opacity-30 blur-md animate-pulse pointer-events-none" />
		</div>
		<div>
		  <h1 className="text-4xl md:text-6xl font-extrabold text-green-300 tracking-tight drop-shadow-lg glitch-text">WISEMAN UMANAH</h1>
		  <div className="flex flex-wrap font-bold gap-4 mt-3 text-green-200 text-base items-center">
			<span className="flex items-center gap-2"><FaEnvelope className="text-green-400 text-2xl" /> wisemanumanah@gmail.com</span>
			<a href="https://x.com/0xwisemanumanah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-green-100 transition"><FaXTwitter className="text-green-400 text-2xl" /> 0xwisemanumanah</a>
			<a href="https://www.linkedin.com/in/wisemanumanah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-green-100 transition"><FaLinkedin className="text-green-400 text-2xl" /> wisemanumanah</a>
			<a href="https://t.me/wisemanumanah" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline hover:text-green-100 transition"><FaTelegramPlane className="text-green-400 text-2xl" /> wisemanumanah</a>
		  </div>
		</div>
	  </div>
	  <div className="flex flex-col items-end">
		<span className="bg-green-900/60 border border-green-700 rounded px-4 py-1 text-green-200 font-mono text-sm shadow">Software Engineer</span>
	  </div>
	</div>

	<div className="flex flex-col lg:flex-row gap-6">
	  {/* Quick Facts */}
	  <div className="flex-1 bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3">
		<div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-lg"><FaUserFriends className="text-green-400" /> Quick Facts</div>
		<div className="flex flex-col gap-2 text-green-100 font-mono">
		  <span><span className="text-green-400">Experience:</span> 4+ years</span>
		  <span><span className="text-green-400">Specialty:</span> Full-Stack Development, Frontend Development, Backend Development, Smart Contract Development</span>
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
	  
	  <div className="flex-1 bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg flex flex-col gap-3">
		<div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-lg"><FaCheckCircle className="text-green-400" /> Fun Fact</div>
		<div className="text-green-100 font-mono">
		  <span><span className="text-green-400">Hacker alias: </span>Knox</span><br />
		  <span><span className="text-green-400">Loves:</span> Drawing creatove stuffs, Solving complex challenges, and creative coding</span>
		</div>
	  </div>
	</div>
	
	<div className="bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg">
	  <h2 className="text-2xl font-bold text-green-300 mb-2 tracking-wide">Key Skills</h2>
	  <div className="flex flex-wrap gap-3 font-bold">
		{['Teamwork', 'Communication', 'Problem Solving', 'Leadership', 'Project Management', 'Adaptability', 'Creativity', 'Software Design', 'Development'].map(skill => (
		  <span key={skill} className="bg-green-900/60 border border-green-700 rounded px-3 py-1 text-green-200 font-mono text-sm shadow hover:bg-green-800 transition cursor-default">{skill}</span>
		))}
	  </div>
	</div>
	{/* Featured Projects */}
	<div className="bg-black/70 border border-green-800 rounded-lg p-5 shadow-lg">
	  <h2 className="text-2xl font-bold text-green-300 mb-4 tracking-wide">Featured Projects</h2>
	  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{featuredProjects.map((proj: { title: string; description: string; url: string }) => (
		  <a
			key={proj.title}
			href={proj.url}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex flex-col gap-2 bg-black/80 border border-green-800 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl hover:border-green-400 transition relative overflow-hidden"
		  >
			<div className="flex items-center gap-2 mb-1">
			  <FaCode className="text-green-400 text-xl" />
			  <span className="text-lg font-bold text-green-200 group-hover:text-green-100 transition">{proj.title}</span>
			</div>
			<div className="text-green-300 text-sm mb-2 line-clamp-4">{proj.description}</div>
			<span className="mt-auto px-3 py-1 bg-green-700/80 text-green-100 rounded shadow font-mono text-xs tracking-wide border border-green-500 group-hover:bg-green-500 group-hover:text-black transition flex items-center gap-2 w-fit">
			  View Project <FaExternalLinkAlt className="text-green-200 text-xs" />
			</span>
			<span className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-scanline" />
		  </a>
		))}
	  </div>
	</div>
  </div>
);

export default About;

