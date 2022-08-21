import React, {useState} from "react";
import { useForm } from "react-hook-form";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
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

    const [title, setTitle] = useState("");
    const [fees, setFees] = useState(1);
    // const [image, setImage] = useState("");
    const [venue, setVenue] = useState("");
    // const [dateTime, setDateTime] = useState("");
    const [description, setDescription] = useState("");
    const [tickets, setTickets] = useState(1);
    const [organizer, setOrganizer] = useState("")
    const [ctcInfoStr, setCtcInfoStr] = useState("")

    const [miniModal, setMiniModal] = React.useState(false);
    const [formModal, setFormModal] = useState(false);


    const createEvent = () => {
      let eventsArray = [];

      eventsArray.push(title, venue, fees, tickets, organizer, description);
      console.log(eventsArray);

      setFormModal(false);
      setTitle("");
      setFees(null);
      setVenue("");
      setDescription("");
      setTickets(1);
      setOrganizer("");

      localStorage.setItem('title', title);
      localStorage.setItem('fees', fees);
      localStorage.setItem('venue', venue);
      localStorage.setItem('description', description);
      localStorage.setItem('tickets', tickets);
      localStorage.setItem('organizer', organizer);
      localStorage.setItem('ctcInfoStr', ctcInfoStr);
      // localStorage.setItem('dateTime', dateTime);
      // localStorage.setItem('image', image);
      deploy()

      // return eventsArray;
    }

    function getData() {
      console.log(localStorage.getItem('title'));
      console.log(localStorage.getItem('fees'));
      console.log(localStorage.getItem('venue'));
      console.log(localStorage.getItem('description'));
      console.log(localStorage.getItem('tickets'));
      console.log(localStorage.getItem('organizer'));
      console.log(localStorage.getItem('ctcInfoStr'));
  }

  getData();

    async function deploy() {
      const acc = await account();
      const ctc = acc.contract(backend);
      const interact = {
				deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[stdlib.connector],
				fees: stdlib.parseCurrency(fees),
			};
      backend.Admin(ctc, interact);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      console.log(`Your contract is deployed as = ${ctcInfoStr}`);
      setMiniModal(true);
      setCtcInfoStr(ctcInfoStr);
    }

  return (  
    <>
        <Button className="btn-wrapper btn-simple" color="success" onClick={() => setFormModal(true)}>
        <i className="tim-icons icon-bulb-63" />
            Create Event
        </Button>
          <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Create Your Event</h3>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col md="">
                <Card className="card-plain">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(createEvent)}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Title</label>
                            <Input type="text" placeholder="Event Title" 
                            required
                            // value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Venue</label>
                            <Input placeholder="Venue" type="text"
                             required
                            // value={venue} 
                            onChange={(e) => setVenue(e.target.value)}
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
                            // value={fees} 
                            onChange={(e) => setFees(e.target.value)} 
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Tickets</label>
                            <Input placeholder="10" type="number" 
                            // value={tickets} 
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
                            // value={organizer} 
                            onChange={(e) => setOrganizer(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                            <label>Date</label>
                                <ReactDatetime
                                inputProps={{
                                    className: "form-control",
                                    placeholder: "Date Picker Here",
                                    required: true
                                    // value: {dateTime},
                                    // onChange:{(e) => setDateTime(e.target.value)}
                                }}
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
                            // value={description} 
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
            modalClassName="modal-info modal-primary modal-form"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
             <UncontrolledAlert className="alert-with-icon" color="info">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>Congrats! -</b>
                Your event has been created successfully
              </span>
              <textarea value={ctcInfoStr} >
              </textarea>
            </UncontrolledAlert>
          </Modal>
    </>
    );
}
