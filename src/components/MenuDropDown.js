import React from 'react';
import MenuDropDownItem from './MenuDropDownItem';

import './MenuDropDown.css';

export default (props) => {
  return (
    <div className="menu-dd">
      <div className="menu-dd__window">
        {props.items && props.items.map(item => (
          <MenuDropDownItem key={item.title} color={item.color} icon={item.icon} text={item.text} title={item.title} />
        ))}
      </div>
    </div>
  );
};
