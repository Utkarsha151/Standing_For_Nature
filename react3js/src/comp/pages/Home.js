import React from 'react';
import {Jumbotron,  Carousel} from 'react-bootstrap';

const Home = () => {
    return(
        <div className="container">
            <div className="py-4">
                <Jumbotron > </Jumbotron> 
                <Carousel>
                    <Carousel.Item>
                    <img className="d-block w-100"
                          src="https://media.gettyimages.com/photos/people-cleaning-the-environment-picture-id1019562458"
                          alt="First slide"
                          width="600"  height="400"/>
                    <Carousel.Caption>
                          <h3></h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-100"
                            src="http://www.collegescholarships.org/images/social-worker-scholarships.jpg"
                            alt="Third slide"
                            width="600"  height="400" />

                      <Carousel.Caption>
                          <h3></h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-100"
                           src="http://www.kisangym.com/wp-content/uploads/2019/06/1545197930environment.jpg"
                           alt="Third slide"
                           width="600"  height="400" />
                      <Carousel.Caption>
                        <h3></h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    );
};

export default Home;

