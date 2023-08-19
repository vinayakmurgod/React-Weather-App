import React from "react";

export default function Result(props) {
  const { Data: data } = props;

  function getTime(stamp) {
    const time = new Date(stamp * 1000);
    return time.toLocaleTimeString();
  }

  return props.Error ? (
    <>
      <div className="container-fluid mt-3">
        <div className="result">
          <hr className="hr-1" />
          <p className="mt-4 text-center">{props.Error}</p>
        </div>
      </div>
    </>
  ) : (
    <>
      {props.isSearched ? (
        <>
          {props.Data ? (
            <>
              <div className="container-fluid mt-3">
                <div className="result ">
                  <hr className="hr-1" />
                  <div className="col-md">
                    <div>
                      <h1>
                        {data.name} ({data.main.temp} °C)
                        <img
                          className="weatherImg"
                          src={
                            "https://openweathermap.org/img/wn/" +
                            data.weather[0].icon +
                            ".png"
                          }
                          alt="weather image"
                        />
                      </h1>
                      <h4>{data.weather[0].description}</h4>
                    </div>
                    <hr className="hr-1" />
                    <div className="mt-4">
                      <div className="col-md">
                        <div className="row">
                          <p className="col-6">
                            <b>Feels Like </b>
                          </p>
                          <p className="col-6">{data.main.feels_like} °C</p>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="row">
                          <p className="col-6">
                            <b>Min Temp.</b>
                          </p>
                          <p className="col-6">{data.main.temp_max} °C</p>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="row">
                          <p className="col-6">
                            <b>Max Temp.</b>
                          </p>
                          <p className="col-6">{data.main.temp_min} °C</p>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="row">
                          <p className="col-6">
                            <b>Sun Rise </b>
                          </p>
                          <p className="col-6">{getTime(data.sys.sunrise)}</p>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="row">
                          <p className="col-6">
                            <b>Sun Set</b>
                          </p>
                          <p className="col-6">{getTime(data.sys.sunset)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container-fluid mt-3">
                <div className="result">
                  <hr className="hr-1" />
                  <div className="loader loader--style5" title="4">
                    <svg
                      version="1.1"
                      id="L5"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enableBackground="new 0 0 0 0"
                      xmlSpace="preserve"
                    >
                      <circle fill="#212529" stroke="none" cx="6" cy="50" r="3">
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 15 ; 0 -15; 0 15"
                          repeatCount="indefinite"
                          begin="0.1"
                        />
                      </circle>
                      <circle
                        fill="#212529"
                        stroke="none"
                        cx="30"
                        cy="50"
                        r="3"
                      >
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 10 ; 0 -10; 0 10"
                          repeatCount="indefinite"
                          begin="0.2"
                        />
                      </circle>
                      <circle
                        fill="#212529"
                        stroke="none"
                        cx="54"
                        cy="50"
                        r="3"
                      >
                        <animateTransform
                          attributeName="transform"
                          dur="1s"
                          type="translate"
                          values="0 5 ; 0 -5; 0 5"
                          repeatCount="indefinite"
                          begin="0.3"
                        />
                      </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="container-fluid mt-3">
            <div className="result">
              <hr className="hr-1" />
              <p className="mt-4 text-center">Not Found, search insted</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
