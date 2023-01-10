import React from "react";

const Footer = () => {
  return (
    <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Tentang Kami</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor suscipit ipsum, a mollis urna blandit eu.
            </p>
            <p>
              <a href="#about" className="btn btn-outline-light">
                Lebih Lanjut
              </a>
            </p>
          </div>
          <div className="col-md-3">
            <h4>Kategori Kursus</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Data Analysis</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Kursus</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">UI/UX Design</a>
              </li>
              <li>
                <a href="#">Data Analysis</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Hubungi Kami</h4>
            <p>
              <a href="#">
                <i className="fab fa-facebook fa-fw"></i> Facebook
              </a>
              <br />
              <a href="#">
                <i className="fab fa-twitter fa-fw"></i> Twitter
              </a>
              <br />
              <a href="#">
                <i className="fab fa-instagram fa-fw"></i> Instagram
              </a>
              <br />
              <a href="#">
                <i className="fas fa-envelope fa-fw"></i> Email
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="lead text-center">
              Copyright &copy; {new Date().getFullYear()} Kursus Online
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
