import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../assets/PalmCoast/Shelby.jpg";
import photo2 from "../../assets/PalmCoast/group.jpg";
import photo3 from "../../assets/PalmCoast/cig.jpg";

import './Photos.css';

function Photos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade interval={5000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 trip-photo" src={photo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 trip-photo" src={photo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 trip-photo" src={photo3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Photos;