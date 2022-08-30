import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio_div">
      <div className="container p-5 z-depth-1 bg-dark container_div">
        <section className="text-center white-text">
          <h2 className="font-weight-bold mb-4 pb-2 text-uppercase">
            Portfolio
            <hr
              color="white"
              width="135px"
              className="mt-3"
              style={{
                margin: "auto",
                height: "2px",
                backgroundColor: "darkcyan",
              }}
            />
          </h2>

          <p className="lead text-muted mx-auto w-responsive portfolio_des">
            In today’s digital age, every touch point, impression, and branded
            interaction contribute an inspiring user experience. At Royal Cyber,
            we help you navigate the complexity of designing and improving your
            user experience. With our complete line UX services and our zero
            investment UX audit, we’ll help you design a UX strategy that best
            fits your business goals and improve your UI productivity.
          </p>

          <div
            className="modal fade"
            id="basicExampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
            >
        
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <ul
                className="nav md-pills flex-center flex-wrap mx-0"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel31"
                    role="tab"
                  >
                    ALL
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel32"
                    role="tab"
                  >
                    Web 
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link font-weight-bold text-uppercase"
                    data-toggle="tab"
                    href="#panel33"
                    role="tab"
                  >
                    UI 
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content mb-5 mt-5">
            <div
              className="tab-pane fade show in active"
              id="panel31"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img3.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Phone Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag, Box</p>
                    </div>
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img9.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Paper Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img4.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Book</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img5.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Notes</h5>
                      <p className="card-text text-uppercase mb-3">Note</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img10.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">T-shirt</h5>
                      <p className="card-text text-uppercase mb-3">Box</p>
                    </div>
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img8.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Magazine</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel32" role="tabpanel">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img9.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Paper Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img4.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Book</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img8.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Magazine</h5>
                      <p className="card-text text-uppercase mb-3">Book</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="panel33" role="tabpanel">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img3.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Phone Bag</h5>
                      <p className="card-text text-uppercase mb-3">Bag, Box</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src="https://mdbootstrap.com/img/Photos/Others/img5.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">Notes</h5>
                      <p className="card-text text-uppercase mb-3">Note</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src=" https://mdbootstrap.com/img/Photos/Others/img10.jpg"
                      alt="Card image cap"
                    />

                    <div className="card-body">
                      <h5 className="my-3">T-shirt</h5>
                      <p className="card-text text-uppercase mb-3">Box</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
