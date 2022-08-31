import React, {useEffect} from "react";
import "./Portfolio.css";

//images of portfolio
import img1 from "../../Assets/p1.jpg";
import img2 from "../../Assets/p2.jpg";
import img3 from "../../Assets/p3.jpg";
import img4 from "../../Assets/p4.jpg";
import img5 from "../../Assets/p5.jpg";
import img6 from "../../Assets/p6.jpg";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation_left = useAnimation();
  const animation_right = useAnimation();

  useEffect(() => {
    if (inView) {
      animation_left.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 130,
          bounce: 0.3,
        },
      });
      animation_right.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 130,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation_left.start({ x: "-20vw" });
      animation_right.start({ x: "20vw" });
    }
  }, [inView]);

  return (
    <div ref={ref} className="portfolio_div" id="portfolio">
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
            ></div>
          </div>

          <motion.div animate={animation_left} className="row mt-5">
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
          </motion.div>

          <div className="tab-content mb-5 mt-5">
            <div
              className="tab-pane fade show in active"
              id="panel31"
              role="tabpanel"
            >
              <motion.div animate={animation_left}  className="row">
                <div className="col-md-12 col-lg-4">
                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src={img1}
                      alt="Card image cap"
                    />
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="bg-dark card-img-top"
                      src={img2}
                      alt="Card image cap"
                    />
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
                      src={img3}
                      alt="Card image cap"
                    />
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src={img4}
                      alt="Card image cap"
                    />
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
                      src={img5}
                      alt="Card image cap"
                    />
                  </a>

                  <a
                    className="bg-dark card hoverable mb-4"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <img
                      className="card-img-top"
                      src={img6}
                      alt="Card image cap"
                    />
                  </a>
                </div>
              </motion.div>
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
                      src={img1}
                      alt="Card image cap"
                    />
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
                      src={img1}
                      alt="Card image cap"
                    />
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
                      src={img2}
                      alt="Card image cap"
                    />
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
                      src={img3}
                      alt="Card image cap"
                    />
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
                      src={img4}
                      alt="Card image cap"
                    />
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
                      src={img5}
                      alt="Card image cap"
                    />
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
