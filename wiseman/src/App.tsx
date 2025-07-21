import MatrixRain from './components/MatrixRain'
import TerminalNav from './components/TerminalNav'
import DisplayPanel from './components/DisplayPanel'
import { useState} from 'react'
import HackerLoader from './components/HackerLoader'
import './index.css'
import Joyride from 'react-joyride';
import { Helmet } from "react-helmet-async";



function App() {
  const [activeCommand, setActiveCommand] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [showTour, setShowTour] = useState(() => {
    return localStorage.getItem('wiseman-joyride') !== 'done';
  });

  const joyrideSteps = [
    {
      target: '.terminal-joyride',
      content: 'Type commands here to interact my portfolio.',
      disableBeacon: true,
    },
    {
      target: '.display-joyride',
      content: 'This panel will every relevant content based on the commands given.',
    },
  ];

  const handleJoyrideCallback = (data: any) => {
    if (data.status === 'finished' || data.status === 'skipped') {
      setShowTour(false);
      localStorage.setItem('wiseman-joyride', 'done');
    }
  };

  if (loading) {
    return <HackerLoader onDone={() => setLoading(false)} />;
  }

  return (
	<>
		<Helmet>
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Wiseman Umanah",
					url: "https://wisemanumanah.vercel.app",
					sameAs: [
						"https://linkedin.com/in/wiseman-umanah",
						"https://github.com/wiseman-umanah",
						"https://x.com/0xwisemanumanah"
					],
					jobTitle: "Software Engineer",
					worksFor: {
						"@type": "Organization",
						name: "Freelance/Contract"
					}
				})}
			</script>
		</Helmet>

		<div className="relative min-h-screen bg-black text-green-400 font-mono">
		{showTour && (
			<Joyride
			steps={joyrideSteps}
			continuous
			showSkipButton
			showProgress
			styles={{
				options: {
				zIndex: 10000,
				primaryColor: '#00ff41', 
				backgroundColor: '#111',
				textColor: '#d1ffd6',
				arrowColor: '#111',
				overlayColor: 'rgba(0,0,0,0.7)',
				width: 380,
				spotlightShadow: '0 0 0 2px #00ff41',
				},
				buttonNext: {
				backgroundColor: '#00ff41',
				color: '#111',
				fontWeight: 700,
				borderRadius: 4,
				boxShadow: '0 0 0 2px #00ff41',
				},
				buttonBack: {
				color: '#00ff41',
				background: 'transparent',
				fontWeight: 700,
				},
				buttonSkip: {
				color: '#00ff41',
				background: 'transparent',
				fontWeight: 700,
				},
				tooltip: {
				backgroundColor: '#111',
				color: '#d1ffd6',
				border: '1px solid #00ff41',
				boxShadow: '0 0 12px #00ff41',
				}
			}}
			locale={{
				back: 'Back',
				close: 'Close',
				last: 'Done',
				next: 'Next',
				skip: 'Skip',
			}}
			callback={handleJoyrideCallback}
			/>
		)}
		<MatrixRain />
		<div className="relative z-10 flex flex-col min-h-screen">
			<div className="flex flex-1 flex-col md:flex-row w-full mt-4 gap-4">
			<div className="md:w-1/3 w-full terminal-joyride">
				<TerminalNav onCommand={setActiveCommand} />
			</div>
			<div className="md:w-2/3 w-full display-joyride">
				<DisplayPanel command={activeCommand} />
			</div>
			</div>
		</div>
		</div>
	</>
    
  )
}

export default App
