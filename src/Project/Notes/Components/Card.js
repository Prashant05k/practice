import React from "react";

export default function Card() {
  function deleteNote(id) {}
  return (
    <div className="noteCard my-2 mx-2 card" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Note</h5>
        <p className="card-text">p</p>
        <button
          id="${index}"
          onclick={deleteNote(this.id)}
          className="btn btn-primary"
        >
          Delete Note
        </button>
      </div>
    </div>
  );
}
