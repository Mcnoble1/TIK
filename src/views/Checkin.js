import React, {useState} from "react";
import { useForm } from "react-hook-form";
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


export default function Rsvp(props) {
  const { handleSubmit } = useForm();

    const [info, setInfo] = useState("");
    const [fees, setFees] = useState(null);

    const [miniModal, setMiniModal] = React.useState(false);
    const [formModal, setFormModal] = useState(false);


const handleClick = event => {
    event.currentTarget.classList.add('d-none');
    setMiniModal(true);
};

    const Rsvp = () => {
    //   let eventsArray = [];
    //   eventsArray.push(info, fees);
    //   console.log(eventsArray[0]);

      setFormModal(false);
      setMiniModal(true);

      setInfo("");

      attach(info)

      // return eventsArray;
    }

    async function attach(info) {
      const acc = await account();
      const ctc = acc.contract(backend, JSON.parse(info));
      const interact = {
        rsvpForEvent: (fees) => {
            setFees(stdlib.formatCurrency(fees));
            console.log(stdlib.formatCurrency(fees));
            },
        };
        backend.Attendee(ctc, interact);
        console.log(`You RSVPed to ${info}`);
    }


  return (  
    <>
        <Button className="btn-wrapper disabled btn-simple" color="success" onClick={handleClick}>
            Check-In
        </Button>
          {/* <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Reserve a Seat</h3>
              </div>
            </div>
            <div className="modal-body">             
            <Row>
              <Col md="">
                <Card className="card-plain">
                  <CardBody>
                    <Form role="form" onSubmit={handleSubmit(Rsvp)}>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Paste the contract Info</label>
                            <Input placeholder="{ }" type="textarea"
                            spellCheck="false"
                            required
                            // value={description} 
                            onChange={(e) => setInfo(e.target.value)}
                             />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="my-4" color="primary" type="submit"
                      >
                        RSVP
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
        </Modal> */}
        <Modal
            modalClassName="modal-info modal-primary modal-form"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
            onSubmit={handleSubmit(Rsvp)}
          >
             <UncontrolledAlert className="alert-with-icon" color="info">
              <span data-notify="icon" className="tim-icons icon-trophy" />
              <span>
                <b>Congrats! -</b>
                You have successfully checked into your event. Enjoy!.
                You will receive your payment back
              </span>
              <Button
                className="my-4" color="primary" type="submit"
                >
                    RSVP
                </Button>
            </UncontrolledAlert>
          </Modal>
    </>
    );
}
