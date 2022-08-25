import React from "react";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
import CreateEvent from "./CreateEvent";
// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components
import Navbar from "components/Navbar/Navbar.js";

let ps = null;

export default function ProfilePage() {
  // const [tabs, setTabs] = React.useState(1);
  // React.useEffect(() => {
  //   if (navigator.platform.indexOf("Win") > -1) {
  //     document.documentElement.className += " perfect-scrollbar-on";
  //     document.documentElement.classList.remove("perfect-scrollbar-off");
  //     let tables = document.querySelectorAll(".table-responsive");
  //     for (let i = 0; i < tables.length; i++) {
  //       ps = new PerfectScrollbar(tables[i]);
  //     }
  //   }
  //   document.body.classList.toggle("profile-page");
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     if (navigator.platform.indexOf("Win") > -1) {
  //       ps.destroy();
  //       document.documentElement.className += " perfect-scrollbar-off";
  //       document.documentElement.classList.remove("perfect-scrollbar-on");
  //     }
  //     document.body.classList.toggle("profile-page");
  //   };
  // }, []);
  return (
    <>
      <Navbar />   
        <div className="page-header">         
          <div className="content-center">
            <Row className="row-grid justify-content-center align-items-center">
              <Col  md="" >
                <h1 className="text-white text-center">
                  Get started by creating your event                
                </h1>
                <div className="btn-wrapper pt-3">
                  <CreateEvent/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* <Footer /> */}
    </>
  );
}
