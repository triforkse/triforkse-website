import React from 'react';

export default (props) => (
  <div className={(props.small && "hexagon hexagon--small") || "hexagon"} style={{"boxShadow": "0 0 400px rgba(0,0,0,1)"}}>
    { (props.icon && <span className="icon">{props.icon}</span>) || <span>{props.image}</span> }
  </div>
);
