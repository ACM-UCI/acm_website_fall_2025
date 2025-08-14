
import Nav from "react-bootstrap/Nav"

import "../scss/global.scss"

export default function Footer() {
  return (


    <div className="footer_wrapper">
  <div className="footer_section">
    <h1 className="font-size-3">© 2025 ACM @ UCI</h1>
  </div>

  <div className="footer_section">
    {/* Empty middle section if desired */}
  </div>

  <div className="footer_section">
    <div className="footer_top_row">
      <div></div> {/* placeholder for left if needed */}
      <h1 className="font-size-3">CONTACT US</h1>
    </div>
    <div className="footer_logo_row">
      <Nav.Link target="_blank" href="https://discord.gg/MCtKPxC">
        <img style={{width: "50%"}} src={import.meta.env.BASE_URL + '/footer/discord.svg'} alt="Discord" />
      </Nav.Link>
      <Nav.Link target="_blank" href="https://www.instagram.com/acm.uci/">
        <img style={{width: "70%"}} src={import.meta.env.BASE_URL + "/footer/instagram.png"} alt="Instagram" />
      </Nav.Link>
      <a style={{marginLeft: "0.5vw"}} href="mailto:acm@uci.edu"><img style={{width: "80%"}} src={import.meta.env.BASE_URL + "/footer/email.svg"} alt="Email" /></a>

    </div>
  </div>
</div>

  );
}
