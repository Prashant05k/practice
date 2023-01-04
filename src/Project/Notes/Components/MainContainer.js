import React from "react";
import Card from "./Card";

function MainContainer() {
  return (
    <div className="container my-3">
      <h1>Welcome To Magic Notes</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add a note</h5>
          <div className="form-group">
            <textarea className="form-control" id="addTxt" rows="3"></textarea>
          </div>
          <button className="btn btn-primary" id="addBtn">
            Add Note
          </button>
        </div>
      </div>
      <hr />
      <h1>Your Notes</h1>
      <hr />
      <div id="notes" className="row container-fluid">
        {" "}
      </div>
      {/* <Card/> */}
    </div>
  );
}

export default MainContainer;
