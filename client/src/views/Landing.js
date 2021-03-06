/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import back1 from "assets/img/theme/promo-1.png"
import logo from "assets/img/brand/logoS.png"


// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Registration from "components/registration.js"

//images component
import findWork from "../assets/img/persons/findWork.png"
import monetize from  "../assets/img/persons/monetize.png"
import plans from  "../assets/img/persons/plans.png"
import menu from  "../assets/img/persons/menu.png"

// index page sections
import Download from "./IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
        <>
          <DemoNavbar />
          <main ref="main">
            <div className="position-relative">
              {/* shape Hero */}
              <section className="section section-lg section-shaped pb-250">
                <div className="shape shape-style-1 shape-default">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <Container className="py-lg-md d-flex mt-md">
                  <div className="col px-0">
                    <Row>
                      <Col lg="7">
                        <img
                            style={{height : "auto"}}
                            alt="logo"
                            className="img-fluid floating"
                            src={menu}
                        />
                      </Col>
                      <Col >
                        <h1 className="display-3 text-white">
                          {" "}
                          <span>LA plateforme étudiante</span>
                        </h1>
                        <p className="lead text-white">
                          Avec Stud'Easy, nous avons trois objectifs : <strong>dynamiser</strong> votre vie étudiante, révolutionner vos finances et être un
                          intermédiaire privilégié auprès des autres acteurs de notre plateforme (votre école, entreprises, particuliers ...)
                        </p>
                        <div className="btn-wrapper">
                          <Button
                              className="btn-icon mb-3 mb-sm-0"
                              color="info"
                              href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                          >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-rocket" />
                          </span>
                            <span className="btn-inner--text">Inscris toi !</span>
                          </Button>

                        </div>
                      </Col>

                    </Row>
                  </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 2560 100"
                      x="0"
                      y="0"
                  >
                    <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                  </svg>
                </div>
              </section>
              {/* 1st Hero Variation */}
            </div>
            <section className="section section-lg pt-lg-0 mt--200">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid mt-lg">

                      <Col>
                        <Card className="card-lift--hover shadow border-0">

                          <iframe height="600" src="https://www.youtube.com/embed/43fqzaSH0CQ" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen/>


                        </Card>
                      </Col>

                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section section-lg ">
              <Container>
                <div className="mb-md-5">
                  <h1 className="display-3">
                    Stud'easy en détail
                  </h1>
                </div>
                <div>
                  <Row className="justify-content-center">
                    <Col lg="12">
                      <Row className="row-grid">
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" style={{height : 550}}>
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                <i className="ni ni-check-bold" />
                              </div>
                              <h6 className="text-primary text-uppercase">
                                Job étudiant
                              </h6>
                              <div>
                                <p className="description mt-3">
                                  Trouve facilement du travail en retrouvant différentes offres proposées par des entreprises</p>
                                <div>
                                  <img className="img-fluid " style={{height : 250}} src={findWork} alt="trouve du travail"/>
                                </div>
                              </div>


                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" style={{height : 550}}>
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                <i className="ni ni-money-coins" />
                              </div>
                              <h6 className="text-success text-uppercase">
                                Monétise ton temps
                              </h6>
                              <p className="description mt-3">
                                Monétise ton temps en proposant tes compétences à d'autres utilisateurs ou en les échangeants avec d'autres étudiants
                              </p>
                              <div className="mb-sm-4">
                                <img className="img-fluid " style={{height : 250}} src={plans} alt="trouve du travail"/>

                              </div>


                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" style={{height : 550}}>
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-satisfied" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Bon plans
                              </h6>
                              <p className="description mt-3">
                                Profite de bon plans et de réductions chez nos différents partenaires
                              </p>
                              <img className="img-fluid " style={{height : 250}} src={monetize} alt="trouve du travail"/>


                            </CardBody>
                          </Card>
                        </Col>

                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="mt-md">
                  <Row className="justify-content-center">
                    <Col lg="12">
                      <Row className="row-grid">
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                <i className="ni ni-briefcase-24" />
                              </div>
                              <h6 className="text-primary text-uppercase">
                                Auto-entrepreneur ?
                              </h6>
                              <div>
                                <p className="description mt-3">
                                  Crée et fait gérer ton business, on t'aide et on t'accompagne</p>
                              </div>

                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                <i className="ni ni-book-bookmark" />
                              </div>
                              <h6 className="text-success text-uppercase">
                                Besoin d'aide ?
                              </h6>
                              <p className="description mt-3">
                                Notre équipe et la communauté t’aide dans tes démarches : administratif, logement …
                              </p>

                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="4">
                          <Card className="card-lift--hover shadow border-0" >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-satisfied" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Association
                              </h6>
                              <p className="description mt-3">
                                Des services sur mesure pour vous, votre association
                              </p>


                            </CardBody>
                          </Card>
                        </Col>

                      </Row>
                    </Col>
                  </Row>

                </div>
              </Container>
            </section>
            <section className="section bg-secondary section-lg">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-md-2" md="6">
                    <img
                        alt="..."
                        className="img-fluid floating"
                        src={back1}
                    />
                  </Col>
                  <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                      <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        <i className="fa fa-facebook-square" />
                      </div>
                      <h3>Participez déjà sur Facebook</h3>
                      <p>
                        Soutenez nous en likant notre page facebook (lien : https://www.facebook.com/studeasy34)
                        et en intégrant le groupe privé des membres de Stud’Easy avant le lancement de la plateforme. <br/>
                        <br/>
                        Vous pourrez :
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex ">
                            <div>
                              <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                              >
                                <i className="ni ni-world-2" />
                              </Badge>
                            </div>
                            <div >
                              <h6 className="mb-0">
                                Nous aider à faire grandir la communauté
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex ">
                            <div>
                              <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                              >
                                <i className="ni ni-bulb-61" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">Partager vos idées et participer </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex ">
                            <div>
                              <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                              >
                                <i className="ni ni-chat-round" />
                              </Badge>
                            </div>
                            <div>
                              <h6 className="mb-0">
                                Commencer à communiquer vos compétences et besoins
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex ">
                            <div>
                              <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                              >
                                <i className="ni ni-briefcase-24" />
                              </Badge>
                            </div>
                            <div >
                              <h6 className="mb-0">
                                Créer et gérer votre business étudiant, notre équipe vous accompagne !
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex ">
                            <div>
                              <Badge
                                  className="badge-circle mr-3"
                                  color="success"
                              >
                                <i className="ni ni-like-2" />
                              </Badge>
                            </div>
                            <div >
                              <h6 className="mb-0">
                                Bénéficier d’aides réservées aux membres : logement, administratif, bons plans …
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="d-flex align-content-center mt-md" >
                  <Button href="https://www.facebook.com/studeasy34" block color="info" size="lg" type="button">
                    Suivez nous sur Facebook !
                  </Button>
                </div>
              </Container>
            </section>
            <section className="section bg-secondary">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col md="6">
                    <Card className="bg-default shadow border-0">
                      <CardImg
                          alt="..."
                          src={require("assets/img/theme/img-1-1200x1000.jpg")}
                          top
                      />
                      <blockquote className="card-blockquote">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-bg"
                            preserveAspectRatio="none"
                            viewBox="0 0 583 95"
                        >
                          <polygon
                              className="fill-default"
                              points="0,52 583,95 0,95"
                          />
                          <polygon
                              className="fill-default"
                              opacity=".2"
                              points="0,42 583,95 683,0 0,95"
                          />
                        </svg>
                        <h4 className="display-3 font-weight-bold text-white">
                          Design System
                        </h4>
                        <p className="lead text-italic text-white">
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever happens.
                        </p>
                      </blockquote>
                    </Card>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                        <i className="ni ni-settings" />
                      </div>
                      <h3>Our customers</h3>
                      <p className="lead">
                        Don't let your uses guess by attaching tooltips and
                        popoves to any element. Just make sure you enable them
                        first via JavaScript.
                      </p>
                      <p>
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go.
                      </p>
                      <p>
                        The kit comes with three pre-built pages to help you get
                        started faster. You can change the text and images and
                        you're good to go.
                      </p>
                      <a
                          className="font-weight-bold text-warning mt-5"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                      >
                        A beautiful UI Kit for impactful websites
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section pb-0 bg-gradient-warning">
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-lg-2 ml-lg-auto" md="6">
                    <div className="position-relative pl-md-5">
                      <img
                          alt="..."
                          className="img-center img-fluid"
                          src={require("assets/img/ill/ill-2.svg")}
                      />
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="6">
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                          <i className="ni ni-building text-primary" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="display-3 text-white">Modern Interface</h4>
                        <p className="text-white">
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                      </div>
                    </div>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="ni ni-satisfied" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-success">
                              Awesome Support
                            </h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <a
                                className="text-success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div>
                            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                              <i className="ni ni-active-40" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-warning">
                              Modular Components
                            </h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <a
                                className="text-warning"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                  <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h2 className="display-3">The amazing Team</h2>
                    <p className="lead text-muted">
                      According to the National Oceanic and Atmospheric
                      Administration, Ted, Scambos, NSIDClead scentist, puts the
                      potentially record maximum.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-1-800x800.jpg")}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Ryan Tompson</span>
                          <small className="h6 text-muted">Web Developer</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                              className="btn-icon-only rounded-circle"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-2-800x800.jpg")}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Romina Hadid</span>
                          <small className="h6 text-muted">
                            Marketing Strategist
                          </small>
                        </h5>
                        <div className="mt-3">
                          <Button
                              className="btn-icon-only rounded-circle"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-3-800x800.jpg")}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">Alexander Smith</span>
                          <small className="h6 text-muted">UI/UX Designer</small>
                        </h5>
                        <div id="testAnchor" className="mt-3">
                          <Button
                              className="btn-icon-only rounded-circle"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="mb-5 mb-lg-0" lg="3" md="6">
                    <div className="px-4">
                      <img
                          alt="..."
                          className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                          style={{ width: "200px" }}
                      />
                      <div className="pt-4 text-center">
                        <h5 className="title">
                          <span className="d-block mb-1">John Doe</span>
                          <small className="h6 text-muted">Founder and CEO</small>
                        </h5>
                        <div className="mt-3">
                          <Button
                              className="btn-icon-only rounded-circle"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                              className="btn-icon-only rounded-circle ml-1"
                              color="success"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="section section-lg pt-0">
              <Container>
                <Card className="bg-gradient-warning shadow-lg border-0">
                  <div className="p-5">
                    <Row className="align-items-center">
                      <Col lg="8">
                        <h3 className="text-white">
                          We made website building easier for you.
                        </h3>
                        <p className="lead text-white mt-3">
                          I will be the leader of a company that ends up being
                          worth billions of dollars, because I got the answers. I
                          understand culture.
                        </p>
                      </Col>
                      <Col className="ml-lg-auto" lg="3">
                        <Button
                            block
                            className="btn-white"
                            color="default"
                            href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                            size="lg"
                        >
                          Download React
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Container>
            </section>
            <section className="section section-lg bg-gradient-default">
              <Container className="pt-lg pb-300">
                <Row className="text-center justify-content-center">
                  <Col lg="10">
                    <h2 className="display-3 text-white">Build something</h2>
                    <p className="lead text-white">
                      According to the National Oceanic and Atmospheric
                      Administration, Ted, Scambos, NSIDClead scentist, puts the
                      potentially record low maximum sea ice extent tihs year down
                      to low ice.
                    </p>
                  </Col>
                </Row>
                <Row className="row-grid mt-5">
                  <Col lg="4">
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-settings text-primary" />
                    </div>
                    <h5 className="text-white mt-3">Building tools</h5>
                    <p className="text-white mt-3">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </Col>
                  <Col lg="4">
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-ruler-pencil text-primary" />
                    </div>
                    <h5 className="text-white mt-3">Grow your market</h5>
                    <p className="text-white mt-3">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </Col>
                  <Col lg="4">
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-atom text-primary" />
                    </div>
                    <h5 className="text-white mt-3">Launch time</h5>
                    <p className="text-white mt-3">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                  <polygon
                      className="fill-white"
                      points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>

            <section id="registration" className="section section-lg pt-lg-0 section-contact-us">
              <Container>
                <Row className="justify-content-center mt--300">
                  <Col lg="8">
                    <Card className="bg-gradient-secondary shadow">
                      <CardBody className="p-lg-5">
                        <h4 className="mb-1">Alors, prêts à révolutionner votre vie étudiante ?</h4>
                        <p className="mt-0">
                          Pré-inscrivez-vous dès maintenant !
                        </p>

                        <Registration/>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>

            <Download />

          </main>
          <CardsFooter />
        </>
    );
  }
}

export default Landing;
