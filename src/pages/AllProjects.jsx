import { React, useEffect } from 'react';
import { projects } from '../data/ProjectDescriptions';

import ProjectSingle from '../components/reusable/ProjectSingle';

function Projects(props) {
    // disable the context menu. weird glitch in safari?
    useEffect(() => {
        // define a custom handler function
        // for the contextmenu event
        const handleContextMenu = (e) => {
            // prevent the right-click menu from appearing
            e.preventDefault()
        }

        // attach the event listener to 
        // the document object
        document.addEventListener("contextmenu", handleContextMenu)

        // clean up the event listener when 
        // the component unmounts
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    }, [])

    return (
        <div className="container mx-auto py-5 lg:py-10 lg:mt-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 text-lg text-ternary-dark dark:text-ternary-light">
                {projects.map(
                    (project) => (
                        <ProjectSingle title={project.title} category={project.description} image={project.image} link={project.link} />
                    )
                )}

            </div>
        </div>
    );
}




export default Projects;