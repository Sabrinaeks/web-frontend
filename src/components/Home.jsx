import React from "react";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Your Dream Career Starts With Us
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Belajar sesuai arahan yang telah disusun baik oleh expert &
                komunitas yang supportive
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Now
                </button>
                <button className="btn btn-outline-light rounded-pill px-4 py-2">
                  Our Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
