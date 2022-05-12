// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// import '../Styles/Footer.css';

// function Footer() {
//     return (
//         <Container className="footer-container">
//                     <div className="row">
//                         <hr className="column-content clearfix w-100 d-md-none" />

//                         <div className="list-content col-md-3 mx-auto">

//                             <h5 className="list-items font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

//                             <ul className="list-item">
//                                 <li>
//                                     <a href="#!">Link 1</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 2</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 3</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 4</a>
//                                 </li>
//                             </ul>

//                         </div>

//                         <hr className="clearfix w-100 d-md-none" />

//                         <div className="list-content col-md-3 mx-auto">

//                             <h5 className="list-items font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

//                             <ul className="list-item">
//                                 <li>
//                                     <a href="#!">Link 1</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 2</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 3</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 4</a>
//                                 </li>
//                             </ul>

//                         </div>

//                         <hr className="clearfix w-100 d-md-none" />

//                         <div className="list-content col-md-3 mx-auto">

//                             <h5 className="list-items font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

//                             <ul className="list-item">
//                                 <li>
//                                     <a href="#!">Link 1</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 2</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 3</a>
//                                 </li>
//                                 <li>
//                                     <a href="#!">Link 4</a>
//                                 </li>
//                             </ul>

//                         </div>

//                     </div>
//         </Container>
//     )
// }

// export default Footer;

import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Plans & Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Frequently asked questions</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Job postings</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">News and articles</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link"><i className="fas fa-phone"></i>+47 45 80 80 80</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-comments"></i>Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-envelope"></i>Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-star"></i>Give feedback</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;