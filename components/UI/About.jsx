import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/benai.jpeg";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Hello! My name is Benai and I enjoy creating things that live on the internet. My interest in web development and backend development
              started back in 2019 when I decided to intern and build someting interesting, turns out hacking together a custom button taught me a lot about HTML & CSS!</p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working in multiples start-up's,
              My main focus these days is building accessible, user friendly fast optimize experince through web and backend means.
            </p>

            <div>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <div className=" d-flex align-items-center gap-5">
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Webflow
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    WordPress
                  </h6>
                </div>

                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Shopify
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    bubble
                  </h6>
                </div>
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    JavaScript
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    React
                  </h6>
                </div>
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Nodejs
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    python
                  </h6>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="https://drive.google.com/file/d/1yKnwyOFxGn6yOyZZe04h2HtJ6XdBNHb1/view?usp=drive_link">Download CV</Link>
              </button>
            </div>
          </Col>

          <Col lg="6" className="text-center my-auto">
            <Image src={img01} alt="about-img" height={240} width={240}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
