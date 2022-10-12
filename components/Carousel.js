import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselScreen() {
  return (
    <Carousel autoPlay>
      <div>
        <img alt="" src="images/category/category-1.jpg" height={10} />
        <p className="legend">White Cot</p>
      </div>
      <div>
        <img alt="" src="images/category/category-2.jpg" />
        <p className="legend">Bed</p>
      </div>
      <div>
        <img alt="" src="images/category/category-3.jpg" />
        <p className="legend">Dinning Chairs</p>
      </div>
      <div>
        <img alt="" src="images/category/category-4.jpg" />
        <p className="legend">Sofa</p>
      </div>
      <div>
        <img alt="" src="images/category/category-5.jpg" />
        <p className="legend">Sofa</p>
      </div>
      <div>
        <img alt="" src="images/category/category-6.jpg" />
        <p className="legend">Dinning Chairs</p>
      </div>
    </Carousel>
  );
}
