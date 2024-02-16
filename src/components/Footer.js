import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Hadia-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abdul-rehman-butthi-44a62528b/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555389222368">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <div className="contact-info">
              <p>Phone: +92 3324184674</p>
              <p>Email: hoorhadi5555@gmail.com</p>
            </div>
            <p>
              Hello, I'm Haida. Thank you for exploring my portfolio. Your
              interest means a lot. If you have any questions about my projects
              or want to discuss potential collaborations, I'm all ears. Feel
              free to reach out—I'm excited about the possibility of working
              together. Looking forward to hearing from you soon!
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
