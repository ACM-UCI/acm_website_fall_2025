import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav"
import discordLogo from '/footer/discord.svg';
import emailLogo from "/footer/email.svg";
import instagramLogo from "/footer/instagram.png";

import "../scss/global.scss"

export default function Footer() {
    return(
    <div>
      <Row className="align-items-center footer_wrapper">
        <Col xs={12} md={2} className="d-flex justify-content-center">
          <h1 className="font-size-3">© 2025 ACM@UCI</h1>
        </Col>
        <Col xs={12} md={8} >
        </Col>
        <Col xs={12} md={2} className="d-flex justify-content-center">
                              <Nav.Link target="_blank" href="https://discord.gg/MCtKPxC">
                <img
                    src={discordLogo}
                    alt="ACM@UCI Discord server invite"
                    width="20"
                />
            </Nav.Link>
                              <Nav.Link target="_blank" href="https://discord.gg/MCtKPxC">
                <img
                    src={instagramLogo}
                    alt="bleh"
                    width="20"
                />
            </Nav.Link>
                                          <Nav.Link target="_blank" href="https://discord.gg/MCtKPxC">
                <img
                    src={emailLogo}
                    alt="bleh2"
                    width="20"
                />
            </Nav.Link>
          <h1 className="font-size-3">CONTACT US</h1>

        </Col>
      </Row>
    </div>
    )
}