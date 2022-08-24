import React from "react";

function Badge() {
  return (
    <>
      <button type="button" className="btn btn-primary">
        Profile <span className="badge badge-light">9</span>
        <span className="sr-only">unread messages</span>
      </button>

      <h1>
        Example heading <span className="badge badge-secondary">New</span>
      </h1>
      <h2>
        Example heading <span className="badge badge-secondary">New</span>
      </h2>
      <h3>
        Example heading <span className="badge badge-secondary">New</span>
      </h3>
      <h4>
        Example heading <span className="badge badge-secondary">New</span>
      </h4>
      <h5>
        Example heading <span className="badge badge-secondary">New</span>
      </h5>
      <h6>
        Example heading <span className="badge badge-secondary">New</span>
      </h6>

      <span className="badge badge-primary">Primary</span>
      <span className="badge badge-secondary">Secondary</span>
      <span className="badge badge-success">Success</span>
      <span className="badge badge-danger">Danger</span>
      <span className="badge badge-warning">Warning</span>
      <span className="badge badge-info">Info</span>
      <span className="badge badge-light">Light</span>
      <span className="badge badge-dark">Dark</span>

      <a href="#" className="badge badge-primary">
        Primary
      </a>
      <a href="#" className="badge badge-secondary">
        Secondary
      </a>
      <a href="#" className="badge badge-success">
        Success
      </a>
      <a href="#" className="badge badge-danger">
        Danger
      </a>
      <a href="#" className="badge badge-warning">
        Warning
      </a>
      <a href="#" className="badge badge-info">
        Info
      </a>
      <a href="#" className="badge badge-light">
        Light
      </a>
      <a href="#" className="badge badge-dark">
        Dark
      </a>

      <span className="badge badge-pill badge-primary">Primary</span>
      <span className="badge badge-pill badge-secondary">Secondary</span>
      <span className="badge badge-pill badge-success">Success</span>
      <span className="badge badge-pill badge-danger">Danger</span>
      <span className="badge badge-pill badge-warning">Warning</span>
      <span className="badge badge-pill badge-info">Info</span>
      <span className="badge badge-pill badge-light">Light</span>
      <span className="badge badge-pill badge-dark">Dark</span>
    </>
  );
}

export default Badge;
