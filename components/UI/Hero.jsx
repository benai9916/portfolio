import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.svg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3 text-primary">I&apos;m Benai Kumar</h2>
              <h5 className="mb-4">Software Developer</h5>
              <p>
                A passionate Software Developer 🚀 having an experience of building beautiful UI/UX for the Web with JavaScript / Webflow / Wordpress / Bubble / Shopify / Reactjs / Nodejs and some other cool CMS, libraries and frameworks.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1yKnwyOFxGn6yOyZZe04h2HtJ6XdBNHb1/view?usp=drive_link">Download CV</Link>
                </button>
              </div>
              <div className={`${classes.hero__links}`}>
                <Link href="https://github.com/benai">
                  <i className="ri-github-line"></i>
                </Link>
                <Link href="https://www.linkedin.com/in/benai/">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="600" height="600" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
