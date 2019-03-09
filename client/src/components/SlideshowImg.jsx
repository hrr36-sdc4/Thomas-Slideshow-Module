import React from 'react';

const SlideshowImg = ({image}) => (
  <div className="carousel-item">
    <img className="d-block" src={image.url} alt={image.description}/>
  </div>
)

export default SlideshowImg;