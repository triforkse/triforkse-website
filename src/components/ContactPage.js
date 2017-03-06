import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import { default as GoogleMapsLoader } from 'google-maps';
import './ContactPage.css';
import pin from '../images/graphics/pin.png';

const vcardTrifork = [
  { key: "name", value: "Trifork AB" },
  { key: "street", field: "Street", value: "Ferkens Gränd 3" },
  { key: "city", field: "City", value: "SE-111 30 Stockholm" },
  { key: "country", field: "Country", value: "Sweden" },
  { key: "vat", field: "Org no.", value: "556993-3392" },
  { key: "email", field: "Email", value: <a href="mailto:stockholm@trifork.com">stockholm@trifork.com</a> }
];

const vcardThomas = [
  { key: "name", value: "Thomas Anagrius" },
  { key: "title", field: "Title", value: "VD, Managing Director" },
  { key: "phone", field: "Phone", value: "+46 70 445 0863 (No Recruiters)" },
  { key: "email", field: "Email", value: <a href="mailto:thb@trifork.com">thb@trifork.com</a> }
];

const mapOptions = {
  center: {lat: 42.323, lng: -42.03},
  zoom: 3,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: true,
  mapTypeId: "roadmap",
  styles: [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels",
      stylers: [
          { visibility: "off" }
      ]
    },
    {
      featureType: "administrative.state",
      elementType: "labels",
      stylers: [
          { visibility: "off" }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 13
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#144b53"
        },
        {
          "lightness": 14
        },
        {
          "weight": 1.4
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#08304b"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0c4152"
        },
        {
          "lightness": 5
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#0b434f"
        },
        {
          "lightness": 25
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#0b3d51"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "color": "#146474"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#021019"
        }
      ]
    }
  ]
};

const markerData = [
  {
    "lat": 56.152759,
    "long": 10.195402
  },
  {
    "lat": 56.218600,
    "long": 10.145964
  },
  {
    "lat": 55.684649,
    "long": 12.586092
  },
  {
    "lat": 55.527404,
    "long": 8.449280
  },
  {
    "lat": 52.516903,
    "long": 13.389893
  },
  {
    "lat": 47.481089,
    "long": 19.065776
  },
  {
    "lat": 52.347796,
    "long": 4.850765
  },
  {
    "lat": 51.445583,
    "long": 5.460362
  },
  {
    "lat": 52.366384,
    "long": 4.877263
  },
  {
    "lat": 50.064152,
    "long": 19.942219
  },
  {
    "lat": 59.323125,
    "long": 18.075935
  },
  {
    // Chicago
    "lat": 41.881832,
    "long": -87.623177
  },
  {
    "lat": 47.177497,
    "long": 8.710227
  },
  {
    "lat": 53.790796,
    "long": -1.552236
  },
  {
    "lat": 51.512893,
    "long": -0.067163
  },
  {
    "lat": 51.505091,
    "long": -0.100208
  },
  {
    "lat": 37.787191,
    "long": -122.399027
  }
];

export default class ContactPage extends Component {
  componentDidMount() {
    GoogleMapsLoader.load((google) => {
      let map = new google.maps.Map(this.refs.worldmap, mapOptions);
      markerData.map(data => new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.long),
        map: map,
        icon: pin
      }));
    });
  }

  renderVCard(vcard) {
    return (
      <div className="contact-page__vcard">
        { vcard.map(item => (
          <div key={item.key} className={"contact-page__vcard-row " + item.key}>
            <span className="contact-page__vcard-field">{item.field}</span>
            {item.value}
          </div>
        )) }
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page-top" id="contact-page__worldmap-container">
          <div className="contact-page__worldmap" ref="worldmap"></div>
          <div className="page-top__text">
            <h2>20 Offices in 9 Countries</h2>
            <div>
              The Swedish Trifork Office is one of many.<br/>
              If you are looking for one of our other offices, head over to
              our <a href="http://trifork.com/">Global Website</a>.
            </div>
          </div>
        </div>
        <div className="trifork-container">
          <div className="row">
          <div className="col-md-6">
            <div className="section">
              <h2 className="section__title">How can we help you?</h2>
              <p className="description">
                The first step to building great software building a great relationship.
                If you're aiming to grow your business, change your industry, or the world. We want to help.
              </p>

              <h2 className="section__title">Looking for a job?</h2>
              <p className="description">
                Check out our <a href="/team">Team Page</a>.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-page__vcards">
                { this.renderVCard(vcardTrifork) }
                { this.renderVCard(vcardThomas) }
            </div>
          </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
