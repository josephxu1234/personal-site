import { AnimatePresence } from 'framer-motion';
import { root } from 'postcss';
import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/AllProjects'));
//const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));



function App() {
	const [theme, setTheme] = useState(localStorage.theme)
	const root = window.document.documentElement;

	if (theme === 'dark'){
		root.classList.remove('light')
		root.classList.add('dark')
		localStorage.setItem('theme', 'dark')
	}
	else{
		root.classList.remove('dark')
		root.classList.add('light')
		localStorage.setItem('theme', 'light')
	}
	
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader theme={theme} setTheme={setTheme}/>
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
							<Route path="about" element={<About />} />
							<Route path="projects" element={<Projects theme={theme} setTheme={setTheme}/>} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
