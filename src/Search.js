import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Type city here"
              className="form-control"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-secondary" />
          </div>
        </div>
      </form>
    </div>
  );
}
