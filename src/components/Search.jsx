import React from "react";

export default function Search(props) {
  return (
    <div className="container-fluid mt-5">
      <form className="row g-3 " onSubmit={props.Submit}>
        <div className="col-md-5">
          <label htmlFor="search" className="form-label ">
            City Name
          </label>

          <input
            value={props.City}
            onChange={props.onchange}
            type="search"
            name="city"
            className="form-control "
            id="inputEmail4"
            placeholder="Enter city name "
          />
        </div>
        <div className="col-md-1 text-center ">
          <p>OR</p>
        </div>

        <div className="col-md-6 ">
          <label htmlFor="lan" className="form-label">
            Get Coordinates &nbsp;{" "}
            <button
              type="button"
              className="coordIcon"
              onClick={props.Location}
            >
              <i className="bi bi-geo-alt-fill"></i>
            </button>
          </label>
          <div className="row">
            <div className="col-md-5 mb-4">
              <div className="input-group">
                <div className="input-group-text">Lat</div>
                <input
                  value={props.Lat}
                  onChange={props.onchange}
                  type="number"
                  step="any"
                  name="lat"
                  className="form-control"
                  id="autoSizingInputGroup"
                  placeholder="Enter latitude"
                />
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="input-group">
                <div className="input-group-text">Lon</div>
                <input
                  value={props.Lon}
                  onChange={props.onchange}
                  type="number"
                  step="any"
                  name="lon"
                  className="form-control"
                  id="autoSizingInputGroup"
                  placeholder="Enter longitude"
                />
              </div>
            </div>

            <div className="col-md mb-4">
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
