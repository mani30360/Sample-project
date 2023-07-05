import React from 'react';
import { Link } from 'react-router-dom';
let NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Project1</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Contact">Contact</Link>

            </li>

          </ul>
        </div>
      </div>
    </nav>
    //   <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default NavBar;


