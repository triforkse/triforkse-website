import React, { Component } from 'react'
import Icon  from 'react-fontawesome';
import Navbar from '../Navbar';
import PageFooter from '../PageFooter';
import './TeamPage.css';

const Teamtailor = window.Teamtailor;


export default class TeamPage extends Component {
  componentDidMount() {
    Teamtailor.Jobs.init({
      company: 'zsE8D5Vb8zA',
      limit: 10,
    });
  }

  render() {
    const techName = [
      {name: "Clojure", description: "Clojure & Datomic"},
      {name: "Elm", description: "Elm"},
      {name: "Elixir", description: "Elixir & Phoenix Framework"},
      {name: "Docker", description: "Docker & Kubernetes"},
      {name: "Erlang", description: "Erlang"},
      {name: "GoLang", description: "GoLang"},
      {name: "Java", description: "Java, Spring & Gradle"},
      {name: "PostgreSQL", description: "PostgreSQL"},
      {name: "Python", description: "Python for Machine Learning"},
      {name: "Kafka", description: "Kafka"},
      {name: "React", description: "React & React Native"},
    ];

    const tech = techName.map(t => ({
      name: t.description,
      image: require(`./images/${t.name.toLowerCase()}.png`),
    }))

    return (
      <div>
        <Navbar transparent={false} />
        <div id="team-page">
          <div className="page-top">
            <div className="page-top__text">
              <h2>Stop just writing code, and start programming</h2>
              <p>
                At Trifork we are currently looking for new talent to join in the fun.
                You think you've got what it takes or are up for the challenge in making us better, you should call us.
                We think Trifork is a great place to work. That is why we work here! :-)
              </p>
            </div>
          </div>
        </div>

        {/* JOB POSTINGS */}

        <div className="segment segment--content">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1 className="segment__title">What we're looking for</h1>
                <div className="segment__content">
                  <div className="description">
                  <p>
                    We are looking for social, outgoing people that consider themselves generalists. You are good at many things and expert at a few things.
                  </p>
                  <p>
                    You should be ready to take on challenges in areas you have never delt with before and be ready to plan and host social events, come up with innovative product ideas and make our clients happy.
                </p>
                  <p>
                    You are inquisitive, intelligent, and hungry to learn from your co-workers – and teach others as well.
                </p>
                <p>
                    We are looking for full-stack developers, conference coordinators, and project managers.
                </p>
                </div>
              </div>
              </div>
              <div className="col-md">
                <div className="segment__content segment__content--no-header">
                  <div id="teamtailor-jobs-widget"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECH */}

        <div className="segment segment--content segment--alternate">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <h1 className="segment__title">Interested in working at Trifork?</h1>
                <div className="segment__content">
                  <p className="description">
                    Send us an e-mail or swing by at one of our Events.
                    Most of them we host at the office in Gamla Stan. These events are a great way to learn more
                    about what it's like to work with us, and you'll get to meet us in person.
                  </p>
                </div>
              </div>
              <div className="col-md">
                <div className="segment__content">
                  <h1 className="segment__title">Tech we choose to work with</h1>
                  <ul className="icon-list">
                    {tech.map(t => (
                      <li className="icon-list__item" key={t.name}>
                        <div className="icon-list__icon-container">
                          <img src={t.image} alt={t.name} className="icon-list__icon" />
                        </div>
                        <div>{t.name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PageFooter />
      </div>
    );
  }
}
