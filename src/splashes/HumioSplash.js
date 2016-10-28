import React from 'react';

import BEM from '../BEM';

const splash = BEM("splash");

export default () => (
  <div {...splash()}>
    <div {...splash("demo")}>
      <img alt="" src={require("../images/logos/humio_logo.svg")} />
      <div {...splash("line-shadow")}></div>
    </div>
    <div {...splash("line")}></div>
    <div {...splash("content")}>
      <h1 {...splash("title")}>LOG AGGREGATION & DATA MANAGEMENT</h1>
      <div {...splash("description")}>
        Use your data as a strategic asset, get real-time insight
        into your business.
      </div>
    </div>
  </div>
);
