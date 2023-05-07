import { React, useEffect } from 'react';
import { Card, CardHeader, CardBody, ImageHeader } from 'react-simple-card';
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
        <div className="container mx-auto">
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">

                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
                        Project Portfolio
                    </p>
                </div>

            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 text-lg text-ternary-dark dark:text-ternary-light">
                {projects.map(
                    (project) => (
                        <a href={project.link}>
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
        </div>
    );
}




export default Projects;