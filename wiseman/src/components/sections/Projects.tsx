import { useState, useRef, useEffect } from "react";
import { FaCode, FaProjectDiagram, FaExternalLinkAlt } from 'react-icons/fa';
import { randomMatrixString } from "../../utils/tools";


const Projects = () => {
	const GITHUB_USERNAME = import.meta.env.VITE_USERNAME;


  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [visibleCount, setVisibleCount] = useState(15);
  const [loadingMore, setLoadingMore] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
	setLoading(true);
	setError('');
	fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
	  .then(res => res.json())
	  .then(data => {
		if (Array.isArray(data)) {
		  setRepos(data);
		} else {
		  setError('Failed to fetch repositories.');
		}
		setLoading(false);
	  })
	  .catch(() => {
		setError('Failed to fetch repositories.');
		setLoading(false);
	  });
  }, []);

	useEffect(() => {
	const handleScroll = () => {
		if (loadingMore || visibleCount >= repos.length) return;

		const scrollTop = window.scrollY;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;

		if (scrollTop + windowHeight >= fullHeight - 100) {
		setLoadingMore(true);
		setTimeout(() => {
			setVisibleCount(v => Math.min(v + 10, repos.length));
			setLoadingMore(false);
		}, 600);
		}
	};

	window.addEventListener('scroll', handleScroll);
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
	}, [repos.length, visibleCount, loadingMore]);


  return (
	<div className="space-y-6">
	  <div className="mb-4 flex items-center gap-2 text-green-300 font-bold text-lg">
		<FaProjectDiagram className="text-green-400" />
		/projects
	  </div>
	  {loading ? (
		<div className="text-green-400 font-mono">[ Fetching repositories... ]</div>
	  ) : error ? (
		<div className="text-red-400 font-mono">{error}</div>
	  ) : (
		<div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen overflow-y-auto pr-2">
		  {repos.slice(0, visibleCount).map((repo) => (
			<a
			  key={repo.id}
			  href={repo.homepage || repo.html_url}
			  target="_blank"
			  rel="noopener noreferrer"
			  className="group bg-black/80 border border-green-800 rounded-xl p-6 shadow-lg flex flex-col items-start gap-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 relative overflow-hidden"
			>
			  <div className="flex items-center gap-2 mb-2">
				<FaCode className="text-green-400 text-2xl" />
				<span className="text-xl font-bold text-green-200 group-hover:text-green-100 transition">{repo.name}</span>
			  </div>
			  <div className="text-green-300 text-sm mb-2 line-clamp-3">{repo.description || 'No description provided.'}</div>
			  <div className="flex flex-wrap gap-2 mb-2">
				{repo.language && (
				  <span className="bg-green-900/60 border border-green-700 rounded px-2 py-0.5 text-xs text-green-200 font-mono shadow flex items-center gap-1">
					{repo.language}
				  </span>
				)}
			  </div>
			  <button className="mt-auto px-4 py-2 bg-green-700/80 text-green-100 rounded shadow font-mono text-sm tracking-wide border border-green-500 group-hover:bg-green-500 group-hover:text-black transition flex items-center gap-2">
				View Project <FaExternalLinkAlt className="text-green-200 text-xs" />
			  </button>
			  <span className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-scanline" />
			</a>
		  ))}
		  {loadingMore && (
			<div className="col-span-full flex justify-center py-4">
			  <span className="font-mono text-green-400 animate-pulse">[ Loading more... {randomMatrixString(12)} ]</span>
			</div>
		  )}
		</div>
	  )}
	</div>
  );
};

export default Projects

