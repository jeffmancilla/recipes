import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Footer = () => {
	return (
		<footer className="Footer">
			<a href="https://github.com/jeffmancilla">JeffM</a> was here! Built with <img src={viteLogo} className="logo" alt="Vite logo" />
			{' + '}
			<img src={reactLogo} className="logo react" alt="React logo" />
		</footer>
	)
}

export default Footer
