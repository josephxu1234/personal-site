import React from 'react';
import { Card, CardHeader, CardBody, ImageHeader } from 'react-simple-card';
import { projects } from '../data/ProjectDescriptions';

function Projects() {
    return (
        <>
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
        </>
    );
}




export default Projects;