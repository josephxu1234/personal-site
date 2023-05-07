import profileImage from '../../images/profile.jpeg';
import { useContext, createElement } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
//import { parse } from 'postcss';
import parse from 'html-react-parser'


const convertStringToHTML = htmlString => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');

    return html.body;
}

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{parse(bio.bio)}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
