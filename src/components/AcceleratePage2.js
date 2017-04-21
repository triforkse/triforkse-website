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

            titleTagline="Explore Business Problems &amp; Validate Ideas is Just 5 Days"

            bubbles={[
              { title: "Realize Business Strategy", icon: "account_balance", description: "With your business strategy you want to reduce costs, acquire new customers, strengthen revenue streams. Accelerate helps focus your efforts on the actions that will lead you closer to your business goals.", color: "#45018F" },
              { title: "Validate New Ideas", icon: "lightbulb_outline", description: "People in your organization probably already have lots of new ideas for generating more business. Accelerate tests those ideas with a well-defined process - facilitated by Trifork. We help carefully select participants amongst stakeholders and your customers.", color: "#7B16A6" },
              { title: "Cost-Efficient Process", icon: "attach_money", description: "In only 5 days, Accelerate will test a business idea. The artifacts produced during the process is directly usable at the start of your new project, and gathers your team around a common vision. If the idea is dismissed, you save the cost and aggrevation of a failed project.", color: "#9F83BD" }
            ]}

            testimonial={{
              text: "This course will be rocket fuel to the two major project teams who attented. We blast off tomorrow in the office.",
              name: "Randall",
              jobTitle: "Developer of General Electric",
              portraitUrl: `${require("../images/logos/general-electric.svg")}`
            }}

            featureTitle="How can we help inspire and educate your employees"
            featureSubtitle="We offer both on-premise or off-site courses"

            features={[
              { icon: "code", color: "red", title: "Languages + Technology", description: "We pride ourselves on supplying course in cutting edge technology and new programming languages as well as certification mainstream tech like Spring Core, Erlang OTP and TTD." },
              { icon: "dehaze", color: "green", title: "Data + Log Management", description: "The world of IT is becoming data-driven. We help you get the skills and knowledge needed to be prepared to handle large amounts of data and logging from distributed systems." },
              { icon: "people", color: "purple", title: "Scrum + SAFe", description: "We work with the best agile trainers in the field from across Europe and the US to maintain a high level of quality. With 20 years of experience and our large global network you will be in the best hands with Trifork by your side." },
              { icon: "share", color: "blue", title: "DevOps + Micro Services", description: "Doing DevOps and Micro Services require both technical expertise and a change of mindset. We do courses like Intro to MicroServices and DevOps Bootcamp to ease your company's transition." },
            ]}

            brands={[
              { title: "Spotify", logoURL: require('../images/logos/spotify.svg') },
              { title: "Skatteverket", logoURL: require('../images/logos/skatteverket.svg') },
              { title: "Lego", logoURL: require('../images/logos/lego.svg') },
              { title: "Klarna", logoURL: require('../images/logos/klarna.svg') },
              { title: "Jysk", logoURL: require('../images/logos/ea.svg') },

            ]}
            ></ServicePage>
      );
  }
};
