import React from 'react';

export default (props) => {
  const menus = [
    [["Home", "/"],
     ["GOTO Conference", "https://gotosthlm.com/"],
     ["Tech Meetups", "https://www.meetup.com/gotosthlm/"]],

    [["Services", "/services"],
     ["Training", "/training"],
     ["Accelerate", "/accelerate"]],

    [["Blog", "/blog"],
     ["Careers", "/careers"]]];

  return (
    <div className="page-footer">
      <div className="page-footer__content">
        <div className="page-footer__menus">
          {menus.map((menu,i) => (
            <div key={i} className="page-footer__menu">
              {menu.map(([title, href], j) => (
                <a key={j} href={href}>{title}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="page-footer__info">
          <p>
            Trifork AB. Ferkens Gränd 3,<br/>
            Stockholm, 11 130, Sweden.<br/>
            stockholm@trifork.com
          </p>

        </div>
      </div>
    </div>
  );
};
