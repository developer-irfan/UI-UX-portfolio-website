import React, { useEffect } from "react";
import About_Pic from "../../Assets/header_img.png"
import "./About.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//main function
function AboutSec() {
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

  //return statement
  return (
    <div
      ref={ref}
      className="bg-dark darken-3 py-5"
      style={{ overflow: "hidden" }}
    >
      <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
        <div className="row">
          <motion.div
            animate={animation_left}
            className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center"
          >
            <img
              src={About_Pic}
              className="img-fluid mt-5 about_img"
              alt=""
              
            />
          </motion.div>

          <motion.div
            animate={animation_right}
            className="col-lg-6 mb-4 mb-lg-0 pt-lg-5 pt-xl-5"
          >
            <h3 className="font-weight-bold mb-4 white-text pt-lg-5 about_txt">
              {" "}
              About Me{" "}
            </h3>

            <p className="font-weight-bold white-text mb-4 about_heading_txt">
              Hello There, I am <span className="name_span sami_txt">Sameeullah</span>
            </p>

            <p className="text-muted about_description">
              I am a UI/UX designer of 1 year experience. I have successfully
              design for client. My design practice combine thinking, user
              research and experience strategy, all with a relentess focus on
              user.
            </p>

            <button
              className="btn btn-sm about_btn"
              style={{ fontWeight: "bold", height: "40px", color: "white", borderRadius:"30px", backgroundColor:"darkcyan" }}
            >
              Download Resume
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutSec;
