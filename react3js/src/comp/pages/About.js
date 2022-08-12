import React from 'react';
import { Alert,Card,CardDeck} from 'react-bootstrap';


const About = () => {
    return(
        <div className="container">
            <div className="py-4">
              <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <h1> What can you do to help mother nature?</h1>
                <p><h4>There are many simple things you can do to help Mother Nature. Going green is easier than you think.</h4> </p><hr />
                <p className="mb-0">“The mountains are calling and I must go.”   -― John Muir</p>
              </Alert> 
                <h1> Let's help our mother earth </h1>
              <CardDeck>
                  <Card>
                      <Card.Img variant="top" src="https://csrbox.org/company/proj_img/1540528532World-Environment-Day.jpg" />
                      <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>Hugging a tree, understanding the language of trees and sending loving kindness to trees will make you rich</Card.Text>
                      </Card.Body>
                  </Card>

                  <Card>
                      <Card.Img variant="top" src="https://img.freepik.com/free-photo/people-volunteer-keeping-garbage-plastic-bottle-into-black-bag-park-near-river-sunset_34152-2042.jpg?size=626&ext=jpg"/>
                      <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>Water and air, the two essential fluids on which all life depends, have become global garbage cans.</Card.Text>
                      </Card.Body>
                  </Card>

                  <Card>
                      <Card.Img variant="top" src="https://zjf683hopnivfq5d12xaooxr-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/04-Price_Citarum_River_002.jpg" />
                      <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Text>The next great mystery of the ocean is, "How are we going to get rid of all that plastic?".”</Card.Text>
                      </Card.Body>
                    
                  </Card>
              </CardDeck>
            </div>
        </div>
    );
};

export default About;
