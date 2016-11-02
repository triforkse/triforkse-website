import React, { Component } from 'react'
import Navbar from './Navbar';
import PageFooter from './PageFooter';
import { default as GoogleMapsLoader } from 'google-maps';
import './ContactPage.css';
import pin from '../images/graphics/pin.png';
import pinSmall from '../images/graphics/pin-small.png';

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
  { key: "phone", field: "Phone", value: "+46 70 445 0863" },
  { key: "email", field: "Email", value: <a href="mailto:thb@trifork.com">thb@trifork.com</a> }
];

const mapOptions = {
  center: {lat: 59.323, lng: 18.03},
  zoom: 4,
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: false,
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
    "thisIsUs": true,
    "lat": 59.323125,
    "long": 18.075935
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
        icon: (!!data.thisIsUs) ? pin : pinSmall
      }));
    });
  }

  renderVCard(vcard) {
    return vcard.map(item => (
      <div key={item.key} className={"contact-page__vcard-" + item.key}>
        <span className="contact-page__vcard-field">{item.field}</span>
        {item.value}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="contact-page__map">
          <div className="contact-page__worldmap" ref="worldmap"></div>
          <div className="contact-page__map-label">
            <div className="contact-page__map-title">20 Offices in 9 Countries</div>
            <p>The Swedish Trifork Office is one of many Trifork.</p>
            <p>If you are looking for one of our other offices, head over to our&nbsp;
            <a href="//trifork.com/offices/">Global Website.</a></p>
          </div>
        </div>
        <div className="contact-page__segment">
          <h1 className="contact-page__segment-heading">Contact Trifork Stockholm</h1>
          <div className="contact-page__inset">
            <div className="contact-page__vcard">{ this.renderVCard(vcardTrifork) }</div>
            <div className="contact-page__vcard">{ this.renderVCard(vcardThomas) }</div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
}
