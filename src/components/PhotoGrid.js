import React from 'react';

import './PhotoGrid.css';

export default (props) => (
  <div className="photo-grid">
    {props.photos.map((img, i) => (
      <div key={i} className="photo-grid__photo" style={{backgroundImage: `url(${img})`}}></div>
    ))}
  </div>
)
