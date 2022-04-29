import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import laptop1 from '../../../images/laptop1.jpg';
import laptop2 from '../../../images/laptop2.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={laptop1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-black'>First slide label</h3>
                    <p className='text-black'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={laptop2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-black'>Second slide label</h3>
                    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    );
}

// render(<ControlledCarousel />);


export default Banner;