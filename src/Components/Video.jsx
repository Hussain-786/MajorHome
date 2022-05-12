import React from 'react';
import '../Styles/Video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';


function Video(){
    return(
        <Container className="video">
          <h1 className="video-h1">How this works?</h1>
          <div>
              <iframe className="youtube" src="https://www.youtube.com/embed/1WaGUqQwfxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <p className="video-para">The initiative of this platform is to provide employment to the people who are not connected to the internet on a daily basis. With just authentication and contact details, one can easily achieve employment. Making employment reach to the every single skilled worker out there not connected to the internet is our goal.</p>

        </Container>
    )
}

export default Video;