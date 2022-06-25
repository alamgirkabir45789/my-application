/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import proImg from "../../../assets/images/AlamgirSmallSizePP.jpg";
import "../../../css/Home.css";
const initialState = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",

  subject: "",
  message: "",
};
const Home = () => {
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [tableData, setTableData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.id === 0) {
      const submitData = {
        id: Math.floor(Math.random() * 10),
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,

        subject: state.subject,
        message: state.message,
      };
      await axios
        .post("https://nodecreacttestapp.herokuapp.com/send", submitData)
        .then(function (response) {
          if (response.status === 200) {
            alert("Data Submitted");
            setState(initialState);
          } else {
            alert("Data not submitted");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      setTableData(...tableData, submitData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prevState = { ...state };
    prevState[name] = value;
    setState(prevState);
  };
  // if (initialState) {
  //   return (
  //     <div>
  //       <CustomPreLoader />
  //     </div>
  //   );
  // }
  return (
    <div>
      <div style={{ color: "#000B49", textTransform: "uppercase" }}>
        <marquee direction="right">
          <strong>Welcome To Alamgir's Documentary</strong>
        </marquee>
      </div>

      <div>
        <CardTitle className="text-center"></CardTitle>
        <CardBody>
          <Row>
            <Col lg={6} sm={12} md={12} xs={12} xl={6}>
              <Row>
                <Col lg={6} sm={6} md={6} xs={12} xl={6}>
                  {/* <img src={proImg} height="200px" width="200px" alt="Image" /> */}
                  <CardImg
                    id="profile"
                    src={proImg}
                    height="200px"
                    width="200px"
                    alt="Image"
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Alamgir Kabir</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Jr.Software Developer
                    </CardSubtitle>{" "}
                    <CardSubtitle className="mb-2 text-muted " tag="h6">
                      Quadrion Technologies,Chittagong
                    </CardSubtitle>
                    <CardText className="mb-2 text-muted " tag="h6">
                      Contact No:01892-950630
                    </CardText>
                    <Button
                      id="project-link"
                      onClick={() => navigate("/project")}
                    >
                      Project
                    </Button>
                  </CardBody>

                  <div className="d-flex">
                    <nav id="socialMedia">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="https://www.linkedin.com/in/alamgir-kabir-38232b128/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="https://github.com/alamgirkabir45789?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Col>
                <Col lg={6} sm={6} md={6} xs={12} xl={6}>
                  <p id="profileContent">
                    As-salamu alaikum(ٱلسَّلَامُ عَلَيْكُمْ) .I am Alamgir
                    Kabir.I am a Web Developer.I Complete my graduation from
                    IDB-BISEW in{" "}
                    <b>
                      "Diploma in Enterprise Systems Analysis & Design - C#.NET
                      (ESAD-C#.NET)".
                    </b>
                    After that I Contine my Proffessional Career at Quadrion
                    Technology in Chittagong as a
                    <strong>"Software Developer"</strong>.In this project I
                    apply
                    <div className="d-flex justify-content-between ">
                      <div>
                        <ul>
                          <li>HTML</li>
                          <li>CSS3</li>
                          <li>Bootstrap</li> <li>ReactJs</li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                          <li>Javascript</li>
                          <li>NodeJs</li>
                          <li>ExpressJs</li>
                          <li>JsonDB</li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </Col>
              </Row>
            </Col>{" "}
            <Col
              lg={6}
              sm={12}
              md={12}
              xs={12}
              xl={6}
              className="text-black"
              id="contactForm"
            >
              <FormGroup row style={{ margin: "12px" }}>
                <h2 id="contactHeader">Contact with me</h2>
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={state.firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    bsSize="sm"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={state.lastName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    bsSize="sm"
                    type="email"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={6} sm={6} md={6} xs={6}>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    bsSize="sm"
                    type="number"
                    name="phone"
                    id="phone"
                    value={state.phone}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup tag={Col} lg={12} sm={12} md={12} xs={12}>
                  <Label htmlFor="subject">subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    value={state.subject}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup tag={Col} lg={12} sm={12} md={12} xs={12}>
                  <Label htmlFor="message">Message</Label>
                  <Input
                    bsSize="sm"
                    type="textarea"
                    name="message"
                    id="message"
                    value={state.message}
                    onChange={handleInputChange}
                  />
                </FormGroup>{" "}
                <FormGroup>
                  <Button
                    className="text-primary bg-light btn pull-right"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </FormGroup>
              </FormGroup>
            </Col>
          </Row>
          <div>
            <div className="d-flex justify-content-center mb-2">
              <div className="spinner "></div>
              <div id="skill">
                <h2 style={{ color: "green" }}>My Skill</h2>
              </div>
              {/* <div className="">
                <h2>My Skill</h2>
              </div> */}
            </div>

            <Row id="skillDiv">
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList">
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Bootstrap</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList">
                  <li>Javascript</li>
                  <li>ReactJs</li>
                  <li>NodeJs</li>
                </ul>
              </Col>
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList">
                  <li>Angular</li>
                  <li>AngularJS</li>
                  <li>SQL</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList">
                  <li>C#</li>
                  <li>ASP.NET</li>
                  <li>ASP.NET MVC</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList">
                  <li>ASP.NET CORE</li>
                  <li>ASP.NET WEB API</li>
                  <li>XML</li>
                </ul>
              </Col>{" "}
              <Col lg={2} sm={4} md={4} xs={6}>
                <ul className="skillList text-nowrap">
                  <li style={{ fontFamily: "monospace" }}>PROJECT LIST</li>
                  <li>
                    <a
                      href="http://192.168.0.29/nasir/erp-production/-/tree/alamgir"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Garments ERP
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/alamgirkabir45789/AspDotNetMvcProject_Alamgir"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      HOSPITAL MANAGEMENT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/alamgirkabir45789/ETicket"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      E-TICKET
                    </a>
                  </li>
                </ul>
              </Col>{" "}
            </Row>
          </div>
        </CardBody>
      </div>
    </div>
  );
};

export default Home;
