import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "18rem" }}>
      {/* <h1>okay</h1> */}
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            {country.name}
          </h5>
          <p className="card-text">
            {country.id}
          </p>
          <a href="#" className="btn btn-outline-danger">
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};

export default Country;
