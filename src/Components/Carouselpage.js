import fox1 from '../Assets/Img/Fox1.jpg';
import fox2 from '../Assets/Img/Fox2.jpg';
import fox3 from '../Assets/Img/Fox3.jpg';

import Carousel from 'react-bootstrap/Carousel';

function Carouselpage() {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fox1}
                        alt="First slide"
                        height="300"
                    />

                    <Carousel.Caption>
                        <h3>PreReact.com slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fox2}
                        alt="Third slide"
                        height="300"
                    />

                    <Carousel.Caption>
                        <h3>PreReact.com slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fox3}
                        alt="Third slide"
                        height="300"
                    />

                    <Carousel.Caption>
                        <h3>PreReact.com slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Carouselpage;