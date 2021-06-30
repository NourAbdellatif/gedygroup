import { Image } from 'react-bootstrap';
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import logo from './images/logo.png'
import './Carousel.css'
class GedyCarousel extends Component {

  render() {
    return <div>
      <Carousel showThumbs={false}>
                <div>
                    <Image className="smallImage" src={logo} />
                    <p className="legend">Cutting edge technology</p>
                </div>
                <div>
                <Image className="smallImage" src={logo} />
                    <p className="legend">Transparent pricing</p>
                </div>
                <div>
                <Image className="smallImage" src={logo} />
                    <p className="legend">A partner you can trust</p>
                </div>
            </Carousel>
    </div>
  }
}
export default GedyCarousel
