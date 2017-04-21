import React from 'react';
import ServicePage from './ServicePage';

export default class AcceleratePage2 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {x: 0, y: 0};
  }

  render() {
      return (
          <ServicePage gradient="linear-gradient(to right bottom,#131c47,#192152,#474c9a,#ac93d2)"
            title={<span>Accelerate Workshops</span>}

            imageId="2"

            titleIcon="arrow_forward"

            testimonalTitle="What to Expect"

            titleTagline="Explore Business Problems &amp; Validate Ideas is Just 5 Days"

            bubbles={[
              { title: "Realize Business Strategy", icon: "account_balance", description: "With your business strategy you want to reduce costs, acquire new customers, strengthen revenue streams. Accelerate helps focus your efforts on the actions that will lead you closer to your business goals.", color: "#45018F" },
              { title: "Validate New Ideas", icon: "lightbulb_outline", description: "People in your organization probably already have lots of new ideas for generating more business. Accelerate tests those ideas with a well-defined process - facilitated by Trifork. We help carefully select participants amongst stakeholders and your customers.", color: "#7B16A6" },
              { title: "Cost-Efficient Process", icon: "attach_money", description: "In only 5 days, Accelerate will test a business idea. The artifacts produced during the process is directly usable at the start of your new project, and gathers your team around a common vision. If the idea is dismissed, you save the cost and aggrevation of a failed project.", color: "#9F83BD" }
            ]}

            testimonial={{
              text: "The process can feel intens and even frustrating at times (Esspecially the first 2 days). But you get quick results! The Trifork Accelerate process has both proven ideas to be worth persuing and dismissed others. Both results are equally valuable for our customers.",
              name: "Peter Rørsgaard",
              jobTitle: "VP, Trifork Copenhagen",
              portraitUrl: `${require("../images/people/pro.jpg")}`
            }}

            featureTitle="Your company is already full of ideas, you just need to pick the right one"
            featureSubtitle="We offer both on-premise or off-site workshops"

            features={[
              { icon: "people", color: "red", title: "The People", description: "The team is all-important. You need a cross-functional group of people, including Stakeholders, Developers, Designers and External Users." },
              { icon: "dehaze", color: "green", title: "Artifacts", description: "The excercises that we go through in the process produceses artifacts like Story Boards, User Story Videos, Mock-Ups and Prototypes that are directly usable in a project." },
              { icon: "school", color: "purple", title: "Expert Facilitator", description: "Having an experienced facilitator that is external to the team helps the team to keep on tack and offers an unpartican and objective view." },
              { icon: "thumb_up", color: "blue", title: "Success Criteria + Mindset", description: "Success is measured by whether an idea can be VALIDATED OR DISMISSED, not whether it becomes a project in the end. This is the key to the entire process." },
            ]}

            brands={[
              { title: "Sparinvest", logoURL: require('../images/logos/sparinvest.png') },
              { title: "Alm Brand", logoURL: require('../images/logos/alm_brand.png') },
              { title: "BankData", logoURL: require('../images/logos/bankdata.png') },
              {},
              { title: "Telmore", logoURL: require('../images/logos/telmore.png') },
            ]}
            ></ServicePage>
      );
  }
};
