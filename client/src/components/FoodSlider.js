import Carousel from 'react-bootstrap/Carousel';
import '.././styles/food.css'


const FoodSlider = () => {
  return (
    <Carousel className='foodSlider'>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group14.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h2>Various luxurious dishes</h2>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group13.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h2>Grills of all kinds</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group12.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Fresh fruits and salads</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group11.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Delicious appetizers and snacks</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group10.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Very good cocktails</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group9.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Fresh and refreshing drinks</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="imgSlider"
        src="img/Group8.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Elegant and attractive sweets</h2>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>


  </Carousel>
  );
}

export default FoodSlider;