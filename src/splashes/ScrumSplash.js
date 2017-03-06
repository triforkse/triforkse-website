import React from 'react';

import BEM from '../BEM';

const splash = BEM("splash");

export default () => (
  <div {...splash()}>
    <div {...splash("demo")}>
      <img {...splash("demo-sprint-icon")} alt="" src={require("../images/graphics/sprint.svg")} />
      <div {...splash("line-shadow")}></div>
    </div>
    <div {...splash("line")}></div>
    <div {...splash("content")}>
      <h1 {...splash("title")}>Become a Scrum Master<br />in just 2 days</h1>
      <div {...splash("description")}>
        Learn to help your team, track performance and deal with change.
        Trifork offers training with World-Renound scrum instructors.
      </div>
      <a href="#" {...splash("call-to-action")}>Book a Course</a>
    </div>
  </div>
);
