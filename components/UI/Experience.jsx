import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
} from "reactstrap";
import classes from "../../styles/experience.module.css";

const Experience = () => {
  const [open, setOpen] = useState(1);

  const noRefCheck = (e) => {
    console.log(e);
    setOpen(e);
  };
  return (
    <section id="experience">
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" md="7" className={`${classes.experience}`}>
            <h3 className={`${classes.experience__heading}`}>
              Where I’ve Worked
            </h3>
            <div>
              <Accordion open={String(open)} toggle={noRefCheck}>
                <AccordionItem className={`${classes.experience__accord__itm}`}>
                  <AccordionHeader
                    targetId="1"
                    className={`${classes.experience__accord__heading}`}
                  >
                    Fewcents, Remote (Sept 2021 - Dec 2023)
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="1"
                    className={`${classes.experience__accord__body}`}
                  >
                    <h6>Senior Software Engineer</h6>
                    <ul>
                      <li>Maintaining and optimizing the product website</li>
                      <li>
                        single Handedly work on a new project (fewcent.me).
                        where I design, architect, and develop the entire
                        frontend architecture.
                      </li>
                      <li>
                        Development of web app, integrating with the backend
                        API, and covering the entire code with more than 70%.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className={`${classes.experience__accord__itm}`}>
                  <AccordionHeader
                    targetId="2"
                    className={`${classes.experience__accord__heading}`}
                  >
                    LightFront, Remote (Feb 2021 - July 2021)
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="2"
                    className={`${classes.experience__accord__body}`}
                  >
                    <h6>Full stack Developer </h6>
                    <ul>
                      <li>Creating API's for the seller dashboard</li>
                      <li>
                        Build Dashboard featured from scratch and integrate with
                        the API's
                      </li>
                      <li>
                        Worked with tech stack like python, nodejs, react js,
                        flask
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className={`${classes.experience__accord__itm}`}>
                  <AccordionHeader
                    targetId="3"
                    className={`${classes.experience__accord__heading}`}
                  >
                    Parallel dots pvt Ltd, Gurugram (Sep 2020 - Jan 2021)
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="3"
                    className={`${classes.experience__accord__body}`}
                  >
                    <h6>Associate Data scientist</h6>
                    <ul>
                      <li>
                        Work on the Australian base project took complete
                        ownership of it, which includes data preparation,
                        classification, clustering, pattern matching, OCR.
                      </li>
                      <li>
                        Increase the over all accuracy by Optimizing and tuning
                        the Hyperparameter of the existing models.
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className={`${classes.experience__accord__itm}`}>
                  <AccordionHeader
                    targetId="4"
                    className={`${classes.experience__accord__heading}`}
                  >
                    Revos Technologies, Bangalore, India (June 2020 - August
                    2020)
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="4"
                    className={`${classes.experience__accord__body}`}
                  >
                    <h6>Machine learning developer </h6>
                    <ul>
                      <li>
                        Fetch data from ElasticNet (vehicle sensor data) and
                        perform pre-processing and EDA to get insight and
                        prepare data for modeling
                      </li>
                      <li>
                        Use a Deep learning and Machine learning Model to
                        predict the mileage and battery status and usage of
                        electric vehicle
                      </li>
                      <li>
                        Perform model evaluation, optimization, and parameter
                        tuning.
                      </li>
                      <li>
                        Make and API using Flask and Deploy model to server and
                        expose the Api
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className={`${classes.experience__accord__itm}`}>
                  <AccordionHeader
                    targetId="5"
                    className={`${classes.experience__accord__heading}`}
                  >
                    Fyle Technologies, Bangalore, India (July 2019 – June 2020)
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="5"
                    className={`${classes.experience__accord__body}`}
                  >
                    <h6>Full Stack Developer</h6>
                    <ul>
                      <li>
                        Developed dynamic and interactive websites that ensure
                        high traffic, page view, and good user experience, along
                        with fast page loading.
                      </li>
                      <li>
                        Take ownership and implement end to end new feature of
                        the product from gathering business and functional
                        requirements to development and testing
                      </li>
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
