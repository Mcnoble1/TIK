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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loadStdlib } from '@reach-sh/stdlib';
import { account } from "../../views/utils"


// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function TopNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const stdlib = loadStdlib('ALGO');
  // stdlib.setWalletFallback(stdlib.walletFallback({
  // providerEnv: 'TestNet', MyAlgoConnect }));


  // const account = useRef()
  // const balance = useRef()


    const [accountBal, setAccountBal] = useState(0);
    const [accountAddress, setAccountAddress] = useState('Connect Wallet');


    const connectWithMyAlgoWallet  = async () =>{
        try{
            await getAccount()
            await getBalance()
                
        }catch(err){
            console.log(err)
        }
    }

    const getAccount = async () => {
        try{
          const acc = await account()
            setAccountAddress(acc.networkAccount.addr)
            // console.log("Account :" + acc.networkAccount.addr)
        }catch(err){
            console.log(err)
        }
    }

    const getBalance = async () => {
        try{
              const acc = await account()
              let rawBalance = await stdlib.balanceOf(acc)
                let balance = stdlib.formatCurrency(rawBalance, 4)
                setAccountBal(balance)
            // console.log("Balance :" + balance)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>TIK• </span>
            RSVP Platform
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">            
              <Button
                className="nav-link d-lg-block"
                color="primary"
                target="_blank"
                href=""
                onClick={connectWithMyAlgoWallet}
              >
                <i className="tim-icons icon-spaceship" /> {accountAddress}
              </Button>
          
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href=""
                onClick={connectWithMyAlgoWallet}
              >
                <i className="tim-icons icon-spaceship" /> {accountAddress}
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
