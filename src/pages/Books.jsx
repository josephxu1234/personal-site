import React from 'react';
import { Card, CardHeader, CardBody, ImageHeader } from 'react-simple-card';
import { books } from '../data/bookRecs';


// todo: switch out card w ProjectSingle
function Books() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            {books.map(
                (book) => (
                    <a href={book.link} key={book.title}>
                        <Card>
                            <ImageHeader imageSrc={book.image} />
                            <CardHeader><i>{book.title}</i></CardHeader>
                            <CardBody>
                                <p>{book.description}</p>
                            </CardBody>

                        </Card>
                    </a>
                )

            )}

        </div>
    );
}




export default Books;