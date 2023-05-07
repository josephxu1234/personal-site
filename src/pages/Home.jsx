import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
//import ProjectsGrid from '../components/projects/ProjectsGrid';
//import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import Projects from './TopProjects';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
const Home = (props) => {

	return (
		<div className="container mx-auto">
			<AppBanner theme={props.theme} setTheme={props.setTheme}></AppBanner>

			<section className="py-5 sm:py-10 mt-5 sm:mt-10">

			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Featured Projects
				</p>
			</div>

			</section>

			<Projects theme={props.theme} setTheme={props.setTheme}></Projects>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					
					<Button title="More Projects" />
				</Link>
			</div>

		</div>
	);
};

export default Home;
