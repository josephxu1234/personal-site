import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { projects } from '../data/ProjectDescriptions';

function Projects() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            {projects.slice(0, 3).map(
                (project) => (
                    <a href={project.link} key={project.title}>
                        <Card>
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