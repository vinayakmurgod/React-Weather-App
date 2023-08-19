import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import Recent from "./Recent";
import axios from "axios";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lon: "",
      lat: "",
      city: "",
      error: null,
      weatherData: null,
      isSearched:false,
      recent: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      lat: "",
      lon: "",
      city: "",
      error: null,
      weatherData: null,
    });

    const city = event.target.city.value;
    const lat = event.target.lat.value;
    const lon = event.target.lon.value;

    const apiKey = "68047661532fdf7538611445f19846fa";

    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        .then((response) => {
          // console.log(this.state.recent);

          //set weather state
          this.setState(
            {
              city: response.data.name,
              lat: response.data.coord.lat,
              lon: response.data.coord.lon,
              isSearched:true,
              weatherData: response.data,
            },
            () => {
              this.addToRecent({
                city: response.data.name,
                lat: response.data.coord.lat,
                lon: response.data.coord.lon,
              });
            }
          );
        })
        .catch((error) => {
          // handle error

          console.log(error);
          this.setState({ error: error.message });
        });
    } else if (lat && lon) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        )
        .then((response) => {
          // console.log(this.state.recent);

          //set weather state
          this.setState(
            {
              city: response.data.name,
              lat: response.data.coord.lat,
              lon: response.data.coord.lon,
              isSearched:true,
              weatherData: response.data,
            },
            () => {
              this.addToRecent({
                city: response.data.name,
                lat: response.data.coord.lat,
                lon: response.data.coord.lon,
              });
            }
          );
          // console.log(this.state.recent);
        })
        .catch((error) => {
          // handle error
          console.log(error);

          this.setState({ error: error.message });
        });
    } else {
      this.setState({ error: " Enter city name or coordinates " });
    }
  };

  addToRecent = (data) => {
   
    let recent = this.state.recent;
    const index = recent.findIndex(object => object.city === data.city);
    if (index === -1) {
    recent.push(data);
    } 
    this.setState({ recent }, () => {
      return window.localStorage.setItem("recent", JSON.stringify(recent));
    });
  };

  componentDidMount() {
    const data = window.localStorage.getItem("recent");

    this.setState({ recent: data === null ? [] : JSON.parse(data) });
    
  }

  handleRecent = (city) => {
    const apiKey = "68047661532fdf7538611445f19846fa";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        // console.log(this.state.recent);

        //set weather state
        this.setState({
          city: response.data.name,
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
          isSearched:true,
          weatherData: response.data,
        });
      
      })
      .catch((error) => {
        // handle error

        console.log(error);
        this.setState({ error: error.message });
      });
  };
  handleChange = (event) => {
    const name = event.target.name;
    if (name == "city") {
      this.setState({ city: event.target.value });
    } else if (name == "lat") {
      this.setState({ lat: event.target.value });
    } else if (name == "lon") {
      this.setState({ lon: event.target.value });
    } else {
      this.setState({
        weatherData: null,
      });
    }
  };

  handleLocation = () => {
    this.setState({
      lat: "",
      lon: "",
      city: "",
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
            });
          }, 500);
        },
        (error) => {
          console.log(error);
          this.setState({ error: error.message });
        }
      );
    } else {
      console.log("Failed to get your location, try again.");
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <Search
          City={this.state.city}
          Lat={this.state.lat}
          Lon={this.state.lon}
          Location={this.handleLocation}
          Submit={this.handleSubmit}
          onchange={this.handleChange}
        />
        <div className="col-md">
          <div className="row">
            <div className="col-md-10">
              <Result Error={this.state.error} Data={this.state.weatherData} isSearched={this.state.isSearched} />
            </div>
            <div className="col-md-2 mt-5">
              <Recent
                Recent={this.state.recent}
                GetWeather={this.handleRecent}
                
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
