import React from "react";
import Rsvp from "./Rsvp";
import Checkin from "./Checkin";
// reactstrap components
import {
  Container,
  Row,
  Col,
  CardHeader,
  CardFooter,
  Button,
  Card,
  CardBody,
  ListGroupItem,
  ListGroup,
} from "reactstrap";

export default function Events() {

    const events = [
        {
            name: "Event 1",
            date: "2020-01-01",
            time: "12:00",
            venue: "Location 1",
            description: "Description 1",
            organizer: "confirmed",
            fee: "100",
        },
        {
            name: "Event 2",
            date: "2020-01-01",
            time: "12:00",
            location: "Location 2",
            description: "Description 2",
            status: "confirmed",
        }
    ]


  return (  
    <>
         <section className="section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container id='rsvp'>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  RSVP for{" "}
                  <span className="text-info">Event</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase" >{localStorage.getItem('title')}</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>{localStorage.getItem('description')}</ListGroupItem>
                        <ListGroupItem>{localStorage.getItem('tickets')}</ListGroupItem>
                        <ListGroupItem>{localStorage.getItem('venue')}</ListGroupItem>
                        {/* <ListGroupItem>{events[0].time}</ListGroupItem> */}
                        <ListGroupItem>{localStorage.getItem('fee')}</ListGroupItem>
                        <ListGroupItem>{localStorage.getItem('organizer')}</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button className="btn-simple" color="primary">
                      RSVP
                    </Button> */}
                    <Rsvp/>
                    {/* <Checkin/> */}
                    {/* <Button className="btn-simple" color="success">
                      Check-in
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
    </>
    );
}
