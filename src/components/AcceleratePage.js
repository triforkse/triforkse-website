import React from 'react';
import Navbar from './Navbar';

export default class AcceleratePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    }

    componentDidMount() {
        var logo = document.getElementById("accelerateLogo");
        var velocity = [0, 0];
        var speed = 0.0001;
        var target = [0, 0];
        var maxDistX = 40;
        var maxDistY = 3;
        var maxVelocity = 0.1;
        var lastFrameTime = new Date().getMilliseconds();
        var position = [0,0];

        function updateTarget() {
           target = [(Math.random() - 0.5) * maxDistX, (Math.random() - 0.5) * maxDistY];
        }

        setInterval(updateTarget, 2000);
        updateTarget();

        function vecLength(v) {
            return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))
        }

        function dist(a, b) {
            var difference = [a[0] - b[0], a[1] - b[1]];
            return vecLength(difference);
        }

        logo.style.position = "relative";

        function clamp(x, min, max) {
            return Math.min(Math.max(x, min), max);
        }

        function clampMagnitude(v, maxLength) {
            var l = vecLength(v);

            if (l > maxLength) {
                var scaleFactor = maxLength / l;
                return [v[0] * scaleFactor, v[1] * scaleFactor];
            }

            return v;
        }

        function animate () {
            var currentTime = new Date().getTime();
            var delta = clamp(currentTime - lastFrameTime, 0, 10);

            var difference = [target[0] - position[0], target[1] - position[1]];
            var distance = dist(target, position);

            if (distance !== 0) {
                var direction = [difference[0] / distance, difference[1] / distance];

                velocity[0] += direction[0] * delta * speed;
                velocity[1] += direction[1] * delta * speed;

                velocity = clampMagnitude(velocity, maxVelocity);

                position[0] += velocity[0] * delta;
                position[1] += velocity[1] * delta;

                logo.style.transform = "translate(" + position[0] + "px, " + position[1] + "px)";
            }
            lastFrameTime = new Date().getTime();

            requestAnimationFrame(animate);
        }

        animate();
    }

  render() {
      return (
          <div className="page" id="accelerate-page">

          <Navbar />

          <div className="page__splash page__splash--1">
          <div className="page__splash-content">
          <img src={require('../images/logos/accelerate_logo.svg')}
             id="accelerateLogo" alt="Trifork Accelerate" />
          </div>
          </div>

          <div className="page__content splash--sky">
          <div className="home-page__container">

          </div>
          </div>

          <div className="page__content splash--sky">
          <div className="home-page__container">

          </div>
          </div>

          <div className="page__content splash--sky">
          <div className="home-page__container">

          </div>
          </div>

          <div className="page__content splash--sky">
          <div className="home-page__container">

          </div>
          </div>
          </div>
      );
  }
};
