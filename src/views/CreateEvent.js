import React, {useState} from "react";
import "./textarea.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// react plugin used to create datetimepicker
// import ReactDatetime from "react-datetime";
import { UncontrolledAlert } from "reactstrap";
import {loadStdlib} from '@reach-sh/stdlib';
// import * as backend from './build/index.main.mjs';
import * as backend from '../reach/build/index.main.mjs';
import { account } from "./utils"
// reactstrap components
import {
  Button,
  FormGroup,
  Row,
  ListGroup,
  Container,
  ListGroupItem,
  CardFooter,
  Col,
  Modal,
  Form,
  Input,
  Card,
  CardBody,
} from "reactstrap";

const stdlib = loadStdlib('ALGO');


export default function CreateEvent(props) {
    const { handleSubmit } = useForm();

    // const mainContainer = document.getElementById('rsvp');

    const RSVPs = [];
    const [title, setTitle] = useState("");
    const [fee, setFee] = useState(1);
    // const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("Sept 1, 2022");
    const [description, setDescription] = useState("");
    const [tickets, setTickets] = useState("");
    const [organizer, setOrganizer] = useState("")
    const [address, setAddress] = useState("")
    const [ctcInfoStr, setCtcInfoStr] = useState("")

    const [miniModal, setMiniModal] = React.useState(false);
    const [formModal, setFormModal] = useState(false);

    const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));


    let details;

    details = {title, location, fee, tickets, organizer, date, description};

    const handleClick = event => {
      event.currentTarget.parentElement.parentNode.classList.add('d-none');
      setFormModal(true);
  
      };

      async function copyToClipboard(button) {
        navigator.clipboard.writeText(ctcInfoStr);
        const origInnerHTML = button.innerHTML;
        button.innerHTML = 'Copied!';
        button.disabled = true;
        await sleep(1000);
        button.innerHTML = origInnerHTML;
        button.disabled = false;
      }

    async function deploy() {
      const acc = await account();
      const ctc = acc.contract(backend);
      const interact = {
				deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[stdlib.connector],
				// fee: stdlib.parseCurrency(fee),
        createEvent: details,

        ready: () => {
          console.log('The event is ready to start accepting reservations.');
          // startRSVP();
        },
        seeRSVP: (who) => {
          setAddress(stdlib.formatAddress(who));
          RSVPs.push(who);
          // const rsvpEl = React.createElement('div')
          // rsvpEl.className = 'card my-4 col-5'
          // rsvpEl.innerHTML = `<p> 
          //   ${address} made a reservation and checked in to the event.
          // </p>`

          // mainContainer.appendChild(rsvpEl);
          console.log(`${stdlib.formatAddress(who)} made a reservation for the event.`);
        },
        // confirmGuest: (who) => {
        //   console.log(`${stdlib.formatAddress(who)} has checked in.`);
        // },
        // manageFunds: () => {
        //   console.log(`The funds are managed`);
        // },
			};


      backend.Admin(ctc, interact);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      console.log(`Your contract is deployed as = ${ctcInfoStr}`);
      setFormModal(false);

      setMiniModal(true);
      setCtcInfoStr(ctcInfoStr);
    }

  return (  
    <>
        <Button className="btn-wrapper btn-simple" color="success"  to="/dashboard" tag={Link} onClick={handleClick}>
            Create Event
        </Button>
          <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              {/* <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button> */}
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Fill in the Event Details</h3>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col md="">
                <Card className="card-plain">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(deploy)}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Title</label>
                            <Input type="text" placeholder="Event Title" 
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Location</label>
                            <Input placeholder="Location" type="text"
                             required
                            onChange={(e) => setLocation(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Fee (ALGO)</label>
                            <Input defaultValue="1" type="number" 
                            required
                            onChange={(e) => setFee(e.target.value)} 
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Tickets</label>
                            <Input placeholder="10" type="number" 
                            onChange={(e) => setTickets(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Organizer</label>
                            <Input placeholder="Reach" type="text" 
                            required
                            onChange={(e) => setOrganizer(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                            <label>Date</label>
                                {/* <ReactDatetime
                                inputProps={{
                                    className: "form-control",
                                    placeholder: "Date Picker Here",
                                    required: true
                                    // value: {dateTime},
                                    // onChange:{(e) => setDateTime(e.target.value)}
                                }}
                                /> */}
                                <Input placeholder="Sept 1, 2022" type="text" 
                            required
                            onChange={(e) => setDate(e.target.value)}
                            />
                            </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Description</label>
                            <Input placeholder="Hello there!" type="text"
                            required
                            onChange={(e) => setDescription(e.target.value)}
                             />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="my-4" color="primary" type="submit"
                      >
                        Create Event
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
        </Modal>
        <Modal
            modalClassName="modal-black modal"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
            <Container id='rsvp'>
             <UncontrolledAlert className="alert-with-icon" color="transparent">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>Congrats! -</b>
                Your event has been created successfully
              </span>
              </UncontrolledAlert>
              <Row>
              <Col className="text-center">
                <hr className="" />
                <h3>
                  Event Details
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="12">
              <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase" >{title}</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Fee: {fee} {stdlib.standardUnit}</ListGroupItem>
                        <ListGroupItem>Details: {description}</ListGroupItem>
                        <ListGroupItem>Venue: {location}</ListGroupItem>
                        <ListGroupItem>Date: {date}</ListGroupItem>
                        <ListGroupItem>No of Tickets: {tickets}</ListGroupItem>
                        <ListGroupItem>Organizer: {organizer}</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                  
                  </CardFooter>
                </Card>
                </Col>
            </Row>
            <h4 className="text-center card-plain" >Copy your Event Information</h4>
                <textarea value={ctcInfoStr} className="textarea">
                </textarea>
                <button className="btn-wrapper mt-3 mb-3 btn-simple btn-success"
                  onClick={(e) => copyToClipboard(e.currentTarget)}
                >Copy to clipboard
                </button>
                {/* <p>{address} made a reservation for the event.</p>
                <p>The funds are managed</p>
                <p>{address} has checked in</p> */}
            </Container>
          </Modal>
    </>
    );
}
