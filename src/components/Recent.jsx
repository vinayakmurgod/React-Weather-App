import React from "react";

export default function Recent(props) {
  return (
    <div className="container-fluid border ">
      <h3 className="m-2">Recent</h3>

      <ul className="list-unstyled">
        {props.Recent.map((data, id) => {
          return (
            <>
              <li
                className="border m-2 btn btn-secondary"
                key={id}
                onClick={() => props.GetWeather(data.city)}
              >
                {data.city}
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
}
