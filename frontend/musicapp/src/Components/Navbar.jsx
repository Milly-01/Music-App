import React from "react";
import "./Navbar.css";

function Navbar(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg nav-color">
                 <div className="container-fluid">
                    <a className="navbar-brand" href="#">Music Play</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/library">Library</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/player">Player</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/feed">Feed</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trending">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/favorites">Favorites</a>
                        </li>
                      </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;