/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
import MakeRsvp from "./MakeRsvp";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbar/Navbar.js";


// let ps = null;

export default function ProfilePage() {
//   const [tabs, setTabs] = React.useState(1);
//   React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       document.documentElement.className += " perfect-scrollbar-on";
//       document.documentElement.classList.remove("perfect-scrollbar-off");
//       let tables = document.querySelectorAll(".table-responsive");
//       for (let i = 0; i < tables.length; i++) {
//         ps = new PerfectScrollbar(tables[i]);
//       }
//     }
//     document.body.classList.toggle("profile-page");
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//         document.documentElement.className += " perfect-scrollbar-off";
//         document.documentElement.classList.remove("perfect-scrollbar-on");
//       }
//       document.body.classList.toggle("profile-page");
//     };
//   }, []);
  return (
    <>
      <Navbar />   
        <div className="page-header">         
          <div className="content-center">
            <Row className="row-grid justify-content-center align-items-center">
              <Col  md="" >
                <h1 className="text-white text-center">
                  Make your Reservations               
                </h1>
                <div className="btn-wrapper pt-3">
                  <MakeRsvp/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
    </>
  );
}
