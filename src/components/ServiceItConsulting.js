import React from 'react';
import ServicePage from './ServicePage';

export default class AcceleratePage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {x: 0, y: 0};
  }

  render() {
      return (
          <ServicePage colors={["#dbf6c8 20%", "#1cafc6 50%", "#012690 110%"]}
            title={<span>IT Consulting<br />&amp; Product Design</span>}

            titleIcon="code"

            titleTagline="Helping your company grow your business"

            bubbles={[
              { title: "Forefront of Technology", icon: "dns", description: "We strive to be ahead of the curve with new technology, being able to help our custumers beat the competition.", color: "#14298E" },
              { title: "Impressive Track Record", icon: "thumb_up", description: "Trifork has been helping our customers for over 20 years, working with everything from small start-ups to huge multi-national coorporations just as Uber, Volvo and Credit Suisse.", color: "#5DA9C3" },
              { title: "Inspiration & Implementation", icon: "lightbulb_outline", description: "From your idea to a finished product. We can help you through the entire product development process, from initial idea, proto-typing, design, user testing, deployment and maintenance.", color: "#9ED4C7" }
            ]}

            testimonial={{
              text: "Working together with Trifork has been an eye-opener. I am very impressed with the high skill level their engineers. We have made Trifork a key technology partner.",
              name: "Søren Brogaard",
              jobTitle: "CTO of TrackUnit",
              portraitUrl: `${require("../images/people/thb.jpg")}`
            }}

            features={[
              { icon: "school", color: "red", title: "Machine Learning + AI", description: "You don’t have to have Big Data in order to get value out of concepts like Machine Learning and Data Mining. Trifork helps you realize the potential of your data and implement decision engines and visualizations so you can make smart business choices." },
              { icon: "share", color: "green", title: "Micro Services + Infrastructure Automation", description: "Most of the projects we work on are cloud based. Many of the with a large number of servers and a necessity to scale quickly and seamlessly. These are properties best served by automation. We use tools like Consul for Service Discovery, Terraform for Provisioning and Docker for Deployment." },
              { icon: "fingerprint", color: "purple", title: "IoT + Security", description: "You product is out in the world, and you cannot wait on tracking to make improvements. Track actions on mobile and web, all with minimal code. Implementation on any platform from web and mobile takes less than a day, not weeks or months." },
              { icon: "timeline", color: "blue", title: "Data Management + Visualization", description: "You product is out in the world, and you cannot wait on tracking to make improvements. Track actions on mobile and web, all with minimal code. Implementation on any platform from web and mobile takes less than a day, not weeks or months." },
            ]}

            brands={[
              { title: "Danske Bank", logoURL: require('../images/logos/danskebank.svg') },
              { title: "Grundfos", logoURL: require('../images/logos/grundfos.jpg') },
              { title: "Lego", logoURL: require('../images/logos/lego.svg') },
              { title: "Cisco", logoURL: require('../images/logos/cisco.svg') },
              { title: "Jysk", logoURL: require('../images/logos/jysk.svg') },

            ]}
            ></ServicePage>
      );
  }
};
