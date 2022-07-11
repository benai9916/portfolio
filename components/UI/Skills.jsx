import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>
              <div className="d-block">
              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Passionate software developer</h3>
            <h3 className="mb-4">On a mission to explorex every tech stack.</h3>
            <p>
            ⚡ Develop end-to-end Highly interactive, performance optimize, SEO friendly and responsive website/webapp
            </p>
            <p>⚡ Create API's, database scheme and backend login to consume in the frontend</p>
            <p>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
            <p>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
            <p>⚡ Deployment of Website using PAAS such as Heroku and IAAS such as AWS EC2 instance/azure VM's</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
