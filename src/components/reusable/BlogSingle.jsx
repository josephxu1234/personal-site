import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const BlogSingle = ({ title, date, image, link }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<a href={link}>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="flex justify-center sm: block text-lg text-ternary-dark dark:text-ternary-light">
                        <FiCalendar className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiCalendar>
                            {date}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export default BlogSingle;
