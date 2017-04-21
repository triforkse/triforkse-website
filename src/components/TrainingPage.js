import React from 'react';
import ServicePage from './ServicePage';

export default class TrainingPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {x: 0, y: 0};
  }

  render() {
      return (
          <ServicePage colors={["rgb(183, 151, 218) 20%", "rgb(148, 28, 198)50%", "rgb(69, 1, 144) 110%"]}
            title={<span>Training<br />&amp; Certification</span>}

            imageId="2"

            titleIcon="school"

            titleTagline="20 years of in Business Education in Programming &amp; Agile Techniques"

            bubbles={[
              { title: "Great Instructors", icon: "dns", description: "Our instructors are both skilled engineers and educators. Through our conference and event business we are able to attract world-renowned educators and speakers.", color: "#45018F" },
              { title: "Over 4000 Students", icon: "local_library", description: "We have a long track record and are a trusted education partner of many big companies like e.g. Danske Bank and Lego. Have certified tousands of students in topics like Scrum and Spring Core.", color: "#7B16A6" },
              { title: "Tailor Made Courses", icon: "extension", description: "If your organization has a special request for a course, we are happy to accomadate your needs. We can tailor together course material that caters to your company's specific needs.", color: "#9F83BD" }
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
