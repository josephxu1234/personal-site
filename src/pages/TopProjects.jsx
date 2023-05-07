import { React, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { projects } from '../data/ProjectDescriptions';

function Projects(props) {
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

    var bg = props.theme === 'dark' ? '#1e3851' : '#f6f7f8'
    var font = props.theme === 'dark' ? '#f6f7f8' : '#1e3851'

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            {projects.slice(0, 3).map(
                (project) => (
                    <a href={project.link} key={project.title}>
                            <Card bgColor={bg} fontColor={font}>
                                <ImageHeader imageSrc={project.image} />
                                <CardHeader><i>{project.title}</i></CardHeader>
                                <CardBody>
                                    <p>{project.description}</p>
                                </CardBody>

                            </Card>
                    </a>
                )

            )}

        </div>
    );
}




export default Projects;