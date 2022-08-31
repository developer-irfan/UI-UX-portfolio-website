import React from "react";

function Footer() {
  return (
    <div className="bg-dark" style={{marginTop:"-50px"}}>
      <footer className="page-footer text-center font-small bg-dark">
        <div className="">
          <div className="pb-4 pt-4">
            <a href="https://www.facebook.com/mdbootstrap" target="_blank">
              <i className="fab fa-facebook-f mr-3"></i>
            </a>

            <a href="https://twitter.com/MDBootstrap" target="_blank">
              <i className="fab fa-twitter mr-3"></i>
            </a>

            <a
              href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4"
              target="_blank"
            >
              <i className="fab fa-youtube mr-3"></i>
            </a>

            <a
              href="https://plus.google.com/u/0/b/107863090883699620484"
              target="_blank"
            >
              <i className="fab fa-google-plus-g mr-3"></i>
            </a>

            <a href="https://dribbble.com/mdbootstrap" target="_blank">
              <i className="fab fa-dribbble mr-3"></i>
            </a>

            <a href="https://pinterest.com/mdbootstrap" target="_blank">
              <i className="fab fa-pinterest mr-3"></i>
            </a>

            <a
              href="https://github.com/mdbootstrap/bootstrap-material-design"
              target="_blank"
            >
              <i className="fab fa-github mr-3"></i>
            </a>

            <a href="http://codepen.io/mdbootstrap/" target="_blank">
              <i className="fab fa-codepen mr-3"></i>
            </a>
          </div>

          <div className="footer-copyright py-3">
            © 2022 Copyright:
            <a
              href="https://sameeullah.netlify.app/"
            >
              {" "}
             Sameeullah All Reserved
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
