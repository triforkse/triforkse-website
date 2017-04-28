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
     ["Careers", "/careers"]],
     ["Blog", "/blog"],
     ["Contact Us", "/contact"]
  ];

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
            070 445 0863, stockholm@trifork.com
          </p>

          <p>
            Trifork is a Bacs approved bureau and is regulated by the
            Financial Conduct Authority as an Authorised Payment Institution.
          </p>

          <p>
            By continuing your visit to this site,
            you agree to the use of cookies. <a href="/privacy">Learn more</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
