import React from 'react';
import '../Styles/Container.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TypeWriterEffect from 'react-typewriter-effect';
import {Container} from 'react-bootstrap';

function ContainerFunc() {
    return (
        <Container className="caption-container">
            <figure clasName="postion-relative">
                <img className="image image-fluid" src={require("../Images/4565.jpg")} height={200} width={400} />
                <figcaption>
                    <h1 className="caption">Hire The Most <TypeWriterEffect
        textStyle={{
          color: 'rgb(7, 7, 78)',
          fontWeight: 800,
          fontSize: '1em',
        }}
        startDelay={100}
        cursorColor="#3F3D56"
        multiText={[
          "Skilled People!", 
          "Experienced People!", 
          "Talented People!"
          
        ]}
        multiTextDelay={1000}
        typeSpeed={300}
      /></h1>
                </figcaption>
            </figure>
            <div className="space">
            </div>
        </Container>
    );
}

export default ContainerFunc;


