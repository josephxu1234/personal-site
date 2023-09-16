import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';
import Art from './Art.jsx'
//import Books from './Books.jsx'
import Blogs from './Blogs.jsx'

const About = () => {
	return (
		<AboutMeProvider>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				{/* profile image w description */}
				<AboutMeBio />

				<section className="py-5 sm:py-10 mt-5 sm:mt-10">

					<div className="text-center">
						<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
							Recent Writing
						</p>
					</div>

				</section>

				<Blogs />

				{/*
				<section className="py-5 sm:py-10 mt-5 sm:mt-10">

					<div className="text-center">
						<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
							Recent Art (^-^)
						</p>
					</div>

				</section>
				*/}


				{/* art gallery */}

				{/*<Art />*/}

				{/* {
					<section className="py-5 sm:py-10 mt-5 sm:mt-10">

					<div className="text-center">
						<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
							Book Recs!
						</p>
					</div>

				</section>
				<Books />
				} */}

				


			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
